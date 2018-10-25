const Subscription = {
  feedSubscription: {
    subscribe: (parent, args, ctx, info) => {
      return ctx.db.subscription.item(
        {
          where: {
            node: {
              isPublished: true
            }
          }
        },
        info
      );
    }
  }
};

module.exports = { Subscription };
