const { getUserId } = require("../../utils");
const stripe = require("../../stripe");

const item = {
  async createItem(
    parent,
    { title, description, image, price, largeImage },
    ctx,
    info
  ) {
    const userId = getUserId(ctx);
    if (!userId) {
      throw new Error("You must be logged in to do that!");
    }

    return await ctx.db.mutation.createItem(
      {
        data: {
          // This is how to create a relationship between the Item and the User
          user: {
            connect: {
              id: userId
            }
          },
          title,
          description,
          image,
          price,
          largeImage
        }
      },
      info
    );

    // console.log(item);

    // return item;
  },

  // async publish(parent, { id }, ctx, info) {
  //   const userId = getUserId(ctx);
  //   const postExists = await ctx.db.exists.Post({
  //     id,
  //     author: { id: userId }
  //   });
  //   if (!postExists) {
  //     throw new Error(`Post not found or you're not the author`);
  //   }

  //   return ctx.db.mutation.updatePost(
  //     {
  //       where: { id },
  //       data: { isPublished: true }
  //     },
  //     info
  //   );
  // },

  async deleteItem(parent, { id }, ctx, info) {
    const userId = getUserId(ctx);
    const itemExist = await ctx.db.exists.Item({
      id,
      user: { id: userId }
    });
    if (!itemExist) {
      throw new Error(`Item not found or you're not the owner`);
    }

    return ctx.db.mutation.deleteItem({ where: { id } });
  },

  async addToCart(parent, { id }, ctx, info) {
    const userId = getUserId(ctx);
    const [cartItemExist] = await ctx.db.query.cartItems({
      where: {
        item: { id },
        user: { id: userId }
      }
    });
    if (cartItemExist) {
      console.log(`Item already in the cart`);
      return ctx.db.mutation.updateCartItem(
        {
          where: { id: cartItemExist.id },
          data: { quantity: cartItemExist.quantity + 1 }
        },
        info
      );
    }

    return ctx.db.mutation.createCartItem(
      {
        data: {
          user: {
            connect: {
              id: userId
            }
          },
          item: {
            connect: {
              id
            }
          }
        }
      },
      info
    );
  },
  async removeFromCart(parent, { id }, ctx, info) {
    // const userId = getUserId(ctx);
    return ctx.db.mutation.deleteCartItem({ where: { id } }, info);
  },
  async createOrder(parent, args, ctx, info) {
    // 1. Query the current user and make sure they are signed in
    const userId = getUserId(ctx);
    if (!userId)
      throw new Error("You must be signed in to complete this order.");
    const user = await ctx.db.query.user(
      { where: { id: userId } },
      `{
      id
      email
      cart {
        id
        quantity
        item { title price id description image largeImage }
      }}`
    );
    // 2. recalculate the total for the price
    const amount = user.cart.reduce(
      (tally, cartItem) => tally + cartItem.item.price * cartItem.quantity,
      0
    );
    console.log(`Going to charge for a total of ${amount}`);
    // 3. Create the stripe charge (turn token into $$$)
    const charge = await stripe.charges.create({
      amount,
      currency: "USD",
      source: args.token
    });
    // 4. Convert the CartItems to OrderItems
    const orderItems = user.cart.map(cartItem => {
      const orderItem = {
        ...cartItem.item,
        quantity: cartItem.quantity,
        user: { connect: { id: userId } }
      };
      delete orderItem.id;
      return orderItem;
    });

    // 5. create the Order
    const order = await ctx.db.mutation.createOrder({
      data: {
        total: charge.amount,
        charge: charge.id,
        items: { create: orderItems },
        user: { connect: { id: userId } }
      }
    });
    // 6. Clean up - clear the users cart, delete cartItems
    const cartItemIds = user.cart.map(cartItem => cartItem.id);
    await ctx.db.mutation.deleteManyCartItems({
      where: {
        id_in: cartItemIds
      }
    });
    // 7. Return the Order to the client
    return order;
  }
};

module.exports = { item };
