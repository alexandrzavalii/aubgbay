Template.members.onCreated(function(){
    var self = this;
    self.autorun(function() {
       self.subscribe('userStatus');
    });
});

Template.members.helpers({
  show: function (user) {
      
   return user;
 }
});
  