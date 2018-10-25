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
