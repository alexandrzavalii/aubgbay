Notifications = new Mongo.Collection('notifications');

Notifications.allow({
    remove: function() {
        return true;
    }
});
Meteor.methods({
    removeNotifications: function(id){
        Notifications.remove({itemId: id});
    },
    createCommentNotification: function(commentId,itemId) {

        var item = Items.findOne(itemId);
        var comment = Comments.findOne(commentId);
        if (comment.userId !== item.userId) {

            Notifications.insert({
                userId: item.userId,
                itemId: item._id,
                commentId: comment._id,
                commenterName: comment.username,
                postName: item.name,
                read: false
            });
        }
    }
});
