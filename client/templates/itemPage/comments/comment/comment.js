Template.Comment.helpers({
    "read": function(){
      if(Notifications.findOne({userId: Meteor.userId(),itemId: this.itemId, commentId: this._id})){
        return "notread";
      }

    }
});
