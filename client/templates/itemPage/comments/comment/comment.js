Template.Comment.helpers({
    "read": function(){
      if(Notifications.findOne({userId: Meteor.userId(),itemId: this.itemId, commentId: this._id})){
        return "notread";
      }
    },
    'checkUserStatus': function(comment){
      var user = Meteor.users.findOne({_id: comment.userId});
      if(user){
      var userStatus = user.status.online;
        console.log(userStatus);
      }else{
        var userStatus = false;
      }
      return userStatus;
    }
});
