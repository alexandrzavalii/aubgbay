Template.Notifications.onCreated(function(){
    var self = this;
    self.autorun(function() {
       self.subscribe('notifications');
    });
});


Template.Notifications.helpers({
    notifications: function() {
        Meteor.setTimeout(function(){
            Meteor.call('removeNotifications', Router.current().params._id);
        },1000);

        return Notifications.find({
            userId: Meteor.userId(),
            read: false,
        });
    },
    notificationCount: function() {
  /*   Meteor.setTimeout(function(){
            Meteor.call('removeNotifications', FlowRouter.getParam('id'));
        },1000); */
        return Notifications.find({
            userId: Meteor.userId(),
            read: false,
        }).count();
    }
});

Template.notificationItem.helpers({
    notificationItemPath: function() {
         return Router.routes.itemPage.path({_id: this.itemId});
    }
});
