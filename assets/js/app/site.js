 // Function to toggle the plus menu into minus
//  function toggelDdlIcon(x) {
//     console.log(x)
//   var span = $(x).find("span")
//    $(span).text("expand_less").toggle();
// }
$(document).ready(function() {
 
  $(".owl-carousel_1").owlCarousel({
 
      autoPlay: true,
      autoplayTimeout:100,
      autoplaySpeed:true,
      margin:10,
      
      
      items : 5,
      dots:true,
      nav:false,
      loop:true,
      responsive: {
        768: {
          items: 5
        },
        600:{
          items:2,
          
        },
        590:{
          items:2,
         
        },
       400:{
        items:1,
       },
       300:{
        items:1
       }
      }
     
  });

  $(".owl-carousel_2").owlCarousel({
 
      autoPlay: true,
      autoplayTimeout:100,
      autoplaySpeed:true,
      margin:10,
      
      
      items : 5,
      dots:true,
      nav:false,
      loop:true,
      responsive: {
        
        
        768: {
          items: 5,  
        },
        600:{
          items:2,
          
        },
        590:{
          items:2,
         
        },
       400:{
        items:1,
       },
       300:{
        items:1
       },
       200:{
        items:1
       }
      }
     
  });

  $(".owl-carousel_3").owlCarousel({
 
    autoPlay: true,
    autoplayTimeout:100,
    autoplaySpeed:true,
    margin:10,
    
    
    items : 3,
    dots:false,
    nav:false,
    loop:true,
    responsive: {
      890: {
        items: 3,  
      },
      
      768: {
        items: 2,  
      },
      600:{
        items:1,
        
      },
      590:{
        items:1,
       
      },
     400:{
      items:1,
     },
     300:{
      items:1
     },
     200:{
      items:1
     }
    }
   
});
 
});

 


var nextCard_3=()=>{
  var owl = $('.owl-carousel_3');
  owl.trigger('next.owl.carousel');
}


var prevCard_3=()=>{
  var owl = $('.owl-carousel_3');
  owl.trigger('prev.owl.carousel');
}

var owlNextFunc=()=>{
    var owl = $('.owl-carousel');
    owl.trigger('next.owl.carousel');
}

var owlPrevFunc=()=>{
    var owl = $('.owl-carousel');
    owl.trigger('prev.owl.carousel');
}

// $(".owl-carousel").owlCarousel({
 
//   autoPlay: true,
//   autoplayTimeout:100,
//   autoplaySpeed:true,
//   margin:10,
  
  
//   items : 5,
//   dots:true,
//   nav:false,
//   loop:true,
//   responsive: {
//     600: {
//       items: 5
//     },
//     100:{
//       items:1
//     },
//     300:{
//       items:1
//     },
//     400:{
//       items:1
//     }
//   }
 
// });





