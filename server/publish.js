Meteor.publish("users", function (id) {
    return Meteor.users.find({_id: id});
});

Meteor.publish('items', function(){
   return Items.find({}, {sort: {createdAt: -1}});
});
Meteor.publish("images", function () {
  return Images.find({});
});
Meteor.publish('commentsCount', function(options){
   return commentsCount.find({});
});
Meteor.publish('notifications', function(options){
   return Notifications.find({});
});

Meteor.publishComposite('oneItemWithImages', function(itemId) {
        return {
            find: function() {
                return Items.find({_id: itemId});
            },
            children: [
              {
                find: function(item) {
                  return Images.find({ "_id": {
                        "$in": item.images
                    }});
                }
              }
            ]
        }
    });

Meteor.publish('comments', function(id){
    check(id, String);
   return Comments.find({itemId: id});
});
