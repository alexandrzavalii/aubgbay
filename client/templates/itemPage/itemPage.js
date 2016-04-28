Template.itemPage.onCreated(function(){
    var self = this;
    id = Router.current().params._id;
    self.autorun(function() {
      self.subscribe('oneItemWithImages', id);
    });


});
