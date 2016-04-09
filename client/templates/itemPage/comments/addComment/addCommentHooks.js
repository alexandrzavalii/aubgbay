var commentHooks = {
  beginSubmit: function() {
    $(".insertComment").addClass("m-progress");
  },
  endSubmit: function() {
    $(".insertComment").removeClass("m-progress");
  },
   onSuccess: function(insert, result) {
    var commentId = result;
     Meteor.call('addComment', Router.current().params._id, function(error, result){
       Meteor.call('createCommentNotification', commentId,result, function(error, result){
       })
      });
  }
}

AutoForm.addHooks('insertCommentForm', commentHooks);
