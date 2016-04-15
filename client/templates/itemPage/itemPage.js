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
  }else{
    $("#insertCommentForm").addClass('has-error');
    $( "#insertCommentForm span.help-block" ).text('Body is required');
    console.log('event,',event.target);
    console.log('<span class="help-block">Body is required</span>');
  }


  FB.ui({
       app_id:'985251324890486',
       method: 'send',
       name: "sdfds jj jjjsdj j j ",
       link: 'https://apps.facebook.com/xxxxxxxaxsa',
       to:985251324890486,
       description:'sasa d d dssd ds sd s s s '

   });
}
});
