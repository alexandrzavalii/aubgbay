Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});
Router.map(function(){

      this.route('/',{
        name:"listPage",
        template: 'listPage',

      });

    this.route('/item/:_id',{
         name: 'itemPage',
         template: 'itemPage',
         data: function(){
              var currentItem = this.params._id;
              return Items.findOne({_id: currentItem});
    }
 });
  this.route('/members',{
         name: 'members',
         template: 'members',
         data: function(){
             return Meteor.users.find();
    }
 });
});
