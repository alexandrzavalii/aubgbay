Comments = new Meteor.Collection('comments');

Comments.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    },
    remove: function (userId, doc) {
      console.log("REMOVING RULES");
        return false;
    }
});

Comments.attachSchema(new SimpleSchema({
    body: {
      type: String,
      max: 500
    },
    userId: {
      type: String,
      autoValue: function(){return Meteor.userId()}
    },
    itemId: {
      type: String
    },
    username:{
      type: String,
      autoValue: function(){return Meteor.user().username || Meteor.user().profile.name}
    },
    facebookId: {
      type: String,
      autoValue: function(){return Meteor.user().services.facebook.id}
    },
    createdAt: {
      type: Date,
      autoValue: function(){ return new Date()}
    }
}));
