$(document).ready(function(){
    //   $('body').fadeOut();

    (function() {

        "use strict";

        var toggles = document.querySelectorAll(".cmn-toggle-switch");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
            toggle.addEventListener( "click", function(e) {
                e.preventDefault();
                (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
            });
        }

    })();
    
    $('.cmn-toggle-switch').click(function(){
        $('nav').toggleClass('active');
        
        
    });
    
      $('#tab-container').easytabs({
        tabs:"ul > li"
    });  
    
    $("nav a, .top").mPageScroll2id();


});