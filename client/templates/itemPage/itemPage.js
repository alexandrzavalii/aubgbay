Template.itemPage.onCreated(function(){
    var self = this;
    id = Router.current().params._id;
    self.autorun(function() {
      self.subscribe('oneItemWithImages', id);
    });
});

Template.itemPage.events({
'submit form': function(e){
  console.log('form');
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
