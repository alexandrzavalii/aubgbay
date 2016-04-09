Template.item.events({
  'click .delete-item': function(event){
  event.preventDefault();
          var confirm = window.confirm("delete the item?");
          if(confirm)
          {
            
            Meteor.call('removeItem', this);

          }
}

});
Template.item.helpers({
  'author': function(){

    if(this.userId == Meteor.userId()){
      return true;
    }else{
      return false;
    }

  }

});
