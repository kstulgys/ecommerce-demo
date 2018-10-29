const { forwardTo } = require("prisma-binding");
const { getUserId } = require("../utils");

const Query = {
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),

  me(parent, args, ctx, info) {
    const id = getUserId(ctx);
    if (!id) return null;
    return ctx.db.query.user({ where: { id } }, info);
  },
  async order(parent, args, ctx, info) {
    // 1. Make sure they are logged in
    const userId = getUserId(ctx);
    if (!userId)
      throw new Error("You must be signed in to complete this order.");
    // 2. Query the current order
    const order = await ctx.db.query.order(
      {
        where: { id: args.id }
      },
      info
    );
    // 3. Check if the have the permissions to see this order
    // const ownsOrder = order.user.id === ctx.request.userId;
    // const hasPermissionToSeeOrder = ctx.request.user.permissions.includes(
    //   "ADMIN"
    // );
    // if (!ownsOrder || !hasPermission) {
    //   throw new Error("You cant see this buddd");
    // }
    // 4. Return the order
    return order;
  },
  async orders(parent, args, ctx, info) {
    const userId = getUserId(ctx);
    if (!userId)
      throw new Error("You must be signed in to complete this order.");
    return ctx.db.query.orders(
      {
        where: {
          user: { id: userId }
        }
      },
      info
    );
  }

  //   async infiniteScrollItems(
  //     parent,
  //     { pageNum, pageSize },
  //     ctx,
  //     info
  //   ) {

  // let items

  // if(pageNum === 1){
  // items = await ctx.db.query.items({ where: { id } }, info);
  // }
  // const item = await ctx.db.mutation.createItem(
  //   {
  //     data: {
  //       // This is how to create a relationship between the Item and the User
  //       user: {
  //         connect: {
  //           id: userId
  //         }
  //       },
  //       title,
  //       description,
  //       image,
  //       price,
  //       largeImage
  //     }
  //   },
  //   info
  // );

  // console.log(item);

  // return item;
  // }
};

module.exports = { Query };
