function ShowValue(cadenac) {

    switch (cadenac) {
        case "Landing":
         
            document.getElementById("planselected").innerHTML = "<center><b> Seleccionaste el plan: " + cadenac +"</b><center>";
            break;
        case "WebSite":
        
        document.getElementById("planselected").innerHTML = "<center><b> Seleccionaste el plan: " + cadenac +"</b><center>";
            break;
        case "WebSite-Pro":
           
        document.getElementById("planselected").innerHTML = "<center><b> Seleccionaste el plan: " + cadenac +"</b><center>";
            break;
        case "Tienda":
        
        document.getElementById("planselected").innerHTML = "<center><b> Seleccionaste el plan: " + cadenac +"</b><center>";
            break;

            case "app":
        
        document.getElementById("planselected").innerHTML = "<center><b> Seleccionaste el plan: " + cadenac +"</b><center>";
            break;
    }
}



 
//$(document).ready(function(){
  //  $("#testimonial-slider").owlCarousel({
   //     navigation : true,
     //   items:3,
    //    itemsDesktop:[1000,2],
    //    itemsDesktopSmall:[979,2],
     //   itemsTablet:[767,1],
     //   pagination: true,
    //    navigation : true,
     //   autoPlay:true
   // });
//});


$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
      navigation : false,
      autoPlay:true,

          //Basic Speeds
    slideSpeed : 20,
    paginationSpeed : 100,
    rewindSpeed : 150,

    //Pagination
    pagination : true,
    paginationNumbers: true,
 
     //Lazy load

     lazyFollow : true,
   
 

    });
   
  });