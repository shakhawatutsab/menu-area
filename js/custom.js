

jQuery(document).ready(function(){
    
    jQuery(".main-menu .bar").click(function(){
        jQuery(".main-menu ul").slideToggle(2000);
    });

    jQuery(window).resize(function(){

        var screenWidth = jQuery(window).width();
        if (screenWidth > 700){
            jQuery(".main-menu ul").removeAttr("style");
        }

    });

    jQuery(".main-menu ul li").click(
        function(){
        jQuery(this).children("ul").slideToggle(2000);
    }
        );
    jQuery(".main-menu ul ul").parent("li").children("a").append(' <i class="fa fa-angle-down"></i>');

    
});




