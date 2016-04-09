Template.itemPage.onCreated(function(){
    var self = this;
    var id = Router.current().params._id;

    self.autorun(function() {
       self.subscribe('comments', id);
    });
});

Template.Comments.helpers({
  comments: function(){
    return Comments.find({}, {sort: {createdAt: -1}});
  }
})
