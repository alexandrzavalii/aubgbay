Template.chat.onCreated(function(){
    var self = this;
    self.autorun(function() {
      self.subscribe('allChat',Meteor.userId());
    });
});

Template.chat.onRendered(function(){
if ($('#ms-menu-trigger')[0]) {
        $('body').on('click', '#ms-menu-trigger', function() {
            $('.ms-menu').toggleClass('toggled');
        });
    }
    $( ".list-group-item" ).first().addClass( "chatItem");
});

Template.chat.helpers({
  users: function(){
    //return all the users that are stated in the fromuserid
      var distinctToUserId = _.uniq(Chat.find({}).fetch().map(function(x) {
     return x.toUserId;
     }), true);
     var distinctFromUserId =_.uniq(Chat.find({}).fetch().map(function(x) {
    return x.fromUserId;
    }), true);

  var users = Meteor.users.find({ "_id": {
        "$in": distinctToUserId
    }});

 return users;

  },
  messages: function(userFrom){
    console.log(userFrom);
    return Chat.find({});
  }
})

Template.chat.events({
  'click .list-group-item': function(e){
    console.log(e.target);
  }
})
