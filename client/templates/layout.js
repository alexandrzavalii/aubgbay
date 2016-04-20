Template.layout.onCreated(function(){
    var self = this;
    var id = Meteor.userId();
    
    self.autorun(function() {
       self.subscribe('users', id);
       self.subscribe('userStatus');
    });
});
Template.layout.events({
  'click #facebook-login': function(event) {
      Meteor.loginWithFacebook({}, function(err){
          if (err) {
              throw new Meteor.Error("Facebook login failed");
          }
      });
  }

});
