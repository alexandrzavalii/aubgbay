Chat = new Mongo.Collection('chat');

Chat.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    },
    remove: function (userId, doc) {
        return !!userId;
    }
});

Meteor.methods({
    messageSend: function(message) {
      if(message.fromUserId == message.toUserId){
           throw new Meteor.Error('not allowed', 'You can not speak to yourself');
      }else{
      check(message,{
        body: String,
        toUserId: String,
        toFacebookId: String,
        fromUserId: String,
        toFacebookId: String
      });

      message = _.extend(message, {
          createdAt: new Date()
      });
      message._id = Chat.insert(message);
      return message._id;
    }

    },
    deleteComments: function(id){

       Comments.remove({itemId: id});

    }
});
