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
  'click #mine': function(e){
  $(e.target).toggleClass( "selected" );

  if($(e.target).hasClass("selected")){
    $('input[type=text].form-control').attr("placeholder", '::'+ Meteor.user().profile.name);
    ItemsIndex.getComponentMethods().addProps('own', true);
    }else {
          $('input[type=text].form-control').attr("placeholder", 'search here..');
            ItemsIndex.getComponentMethods().removeProps('own');
    }
  },
  'click .category': function(e){
    $( ".category" ).each(function(index) {
      if(($(this).hasClass("selected")) && $(e.target).attr('id') != $(this).attr('id'))
      $(this).removeClass( "selected" )
    });
  $(e.target).toggleClass( "selected" );

  if($(e.target).hasClass("selected")){
    $('input[type=text].form-control').attr("placeholder", '::'+ $(e.target).attr('id'));
    ItemsIndex.getComponentMethods().addProps('category', $(e.target).attr('id'));
    //ItemsIndex.getComponentMethods().addProps('sortBy', [$(e.target).attr('id')]);
    }else {
        $('input[type=text].form-control').attr("placeholder", 'search here..');
          ItemsIndex.getComponentMethods().removeProps('category');
    }
  }

})
