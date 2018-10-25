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

    const item = await ctx.db.mutation.createItem(
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

    console.log(item);

    return item;
  }

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

  // async deletePost(parent, { id }, ctx, info) {
  //   const userId = getUserId(ctx);
  //   const postExists = await ctx.db.exists.Post({
  //     id,
  //     author: { id: userId }
  //   });
  //   if (!postExists) {
  //     throw new Error(`Post not found or you're not the author`);
  //   }

  //   return ctx.db.mutation.deletePost({ where: { id } });
  // }
};

module.exports = { item };
