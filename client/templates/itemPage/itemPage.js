Template.itemPage.onCreated(function(){
    var self = this;
    id = Router.current().params._id;
    self.autorun(function() {
      self.subscribe('oneItemWithImages', id);
    });
    

});

Template.itemPage.events({
'click #sendPrivate': function(event){
  event.preventDefault();
  if($('textarea#message').val()){
    $("#insertCommentForm").removeClass('has-error');
    $( "#insertCommentForm span.help-block" ).text('');
    $('textarea#message').val('');
     $('#qnimate').addClass('popup-box-on');
  }else{
    $("#insertCommentForm").addClass('has-error');
    $( "#insertCommentForm span.help-block" ).text('Body is required');
    console.log('event,',event.target);
    console.log('<span class="help-block">Body is required</span>');
  }
}
});
