
jQuery(document).ready(function($) {

    ( function( $ ) {
        // Init Skrollr
        var s = skrollr.init({
            render: function(data) {
                //Debugging - Log the current scroll position.
                //console.log(data.curTop);
                var prog = (data.curTop / data.maxTop);
                $('.mov-prog').css('height', prog*100+'%');
            }
        });
    } )( jQuery );


    $('#back-top').click(function() {
        skrollr.get().setScrollTop(0);
    });



    $('.mov-share').click(function() {
        $(this).toggleClass('active');
        $('.mov-social-modal').toggleClass('show');
        $('.mov-share .fa').toggleClass('fa-plus');
        $('.mov-share .fa').toggleClass('fa-times');
    });


    var fbName = "How Would Modern Technology Ruin Classic Movies? | SunLife";
    var fbDesc = "Our favourite movies could have had a very different outcome had modern day technology been around. Scroll through our motion picture to find out more.";

    $(".mov-fb").attr("href", "https://www.facebook.com/dialog/feed?app_id=631449813702031&display=popup&name="+fbName+"&description="+fbDesc+"&caption=www.sunlife.co.uk&link=https://www.sunlife.co.uk/life-cover/over-50-life-insurance/how-tech-would-have-ruined-movies&picture=https://www.sunlife.co.uk/life-cover/over-50-life-insurance/how-tech-would-have-ruined-movies/images/mov-fb-dialog.jpg&redirect_uri=https://www.sunlife.co.uk/life-cover/over-50-life-insurance/how-tech-would-have-ruined-movies");

    // Make Facebook/Twitter buttons open in popup window
    $('.mov-fb, .mov-tweet').click(function (event) {
        if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
        window.open($(this).attr("href"), "popupWindow", "width=600,height=600,scrollbars=yes");
    });

});