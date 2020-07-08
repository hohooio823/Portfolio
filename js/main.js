(function ($) {

    "use strict";

    /*---------------------------
    typeit INTEGRATION
    -----------------------------*/
   
    let myTypeItInstance = new TypeIt('#inputc', {
        speed:400})
        .type('Masri')
        .pause(300)
        .options({speed: 200})
        .delete(2)
        .options({speed: 45})
        .pause(300)
        .type('r')
        .pause(300)
        .type('i')
      ;
      
      myTypeItInstance.go();  
})(jQuery);
