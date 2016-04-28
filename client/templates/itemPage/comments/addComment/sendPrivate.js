Template.addComment.events({
'click #sendPrivate': function(event){
  event.preventDefault();
    var fromUserId = Meteor.userId();
    var toUserId= this.userId;
  if($('textarea#message').val()){
    $("#insertCommentForm").removeClass('has-error');
    $( "#insertCommentForm span.help-block" ).text('');
    var $body = $('textarea#message').val();
    var toFacebook = Meteor.users.findOne({_id: toUserId},{fields: {'services.facebook.id': 1}});
    var toFacebookId = toFacebook.services.facebook.id;
    var fromFacebookId = Meteor.user().services.facebook.id;


    var message = {
      body: $body,
      toUserId: toUserId,
      toFacebookId: toFacebookId,
      fromUserId: fromUserId,
      toFacebookId: toFacebookId
    }
    Meteor.subscribe('chat',toUserId, fromUserId);


    Meteor.call('messageSend', message, function(error, messageId) {
        if (error) {
          $("#insertCommentForm").addClass('has-error');
          $( "#insertCommentForm span.help-block" ).text('You can not send a message to yourself');
        } else {
          console.log(messageId);
            $('textarea#message').val('');
        }
      });

    // $('#qnimate').addClass('popup-box-on');

  }else{
    $("#insertCommentForm").addClass('has-error');
    $( "#insertCommentForm span.help-block" ).text('Body is required');
  }
}
});
