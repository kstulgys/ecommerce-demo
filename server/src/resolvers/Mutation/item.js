const { getUserId } = require("../../utils");

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
  }
};

module.exports = { item };
