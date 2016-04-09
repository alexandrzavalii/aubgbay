Meteor.methods({
    addComment:function(itemId) {
      Items.update(itemId, {
           $inc: { commentsCount: 1 },
         });
            return itemId;
    },
    removeItem: function(item) {
      var itemId = item.__originalId;
      Images.remove({ "_id": {
            "$in": item.images
        }});

      Comments.remove({itemId: itemId});
      Notifications.remove({itemId: itemId});
      Items.remove({_id: itemId});

    }
});
