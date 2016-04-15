Template.Carousel.onRendered(function(){
var owl = $('.owl-carousel');
  owl.owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:true,
              loop:false
          },
          1000:{
              items:3,
              nav:true,
              loop:false
          }
      }
  })
});
Template.Carousel.helpers({
  'images': function(){
    return Images.find();
  }
})
