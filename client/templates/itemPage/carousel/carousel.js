Template.Carousel.onRendered(function(){

  $(".item:first").addClass('active');
  console.log('rendered');
});
Template.Carousel.helpers({
  'images': function(){
    return Images.find();
  },
  'firstImage': function(index){
    console.log(index);
    if(index == 0){
      console.log(index);
    return true;
  }else
    return false;
  }
})
