Template.listPage.onCreated(function(){
    var self = this;
    self.autorun(function() {
       self.subscribe('images');
    });
});


Template.search.helpers({
  attributes: function () {
   return {
      placeholder: 'search here..',
      class: 'form-control',
   };
 },
  itemIndex: () => ItemsIndex // instanceof EasySearch.Index

});
Template.search.events({
  'click #Mine': function(e){
  $(e.target).toggleClass( "selected" );

  if($(e.target).hasClass("selected")){
    $('input[type=text].form-control').attr("placeholder", '::'+Meteor.user().profile.name);

    ItemsIndex.getComponentMethods()
      .addProps('categoryFilter', [$(e.target).attr('id')]);
    }else {
          $('input[type=text].form-control').attr("placeholder", 'search here..');
            ItemsIndex.getComponentMethods().removeProps();
    }
  },
  'click #Popular': function(e){
    $(e.target).toggleClass( "selected" );
    if($(e.target).hasClass("selected")){
    $('input[type=text].form-control').attr("placeholder", '::Popular');

    ItemsIndex
      .getComponentMethods()
      .addProps( 'sortBy', 'Popular' );
    } else {
      $('input[type=text].form-control').attr("placeholder", 'search here..');
        ItemsIndex.getComponentMethods().removeProps();
    }
  }
})
