$(function(){
    // title
    var olCheck = $(".guide-nav li.inner_on");
    var olTxt = olCheck.children("a").text();
    var ulTxt = $(".guide-nav li.on").children("a").text();
    if ((olCheck.length)){
        $(".contents .tit").text(olTxt);
    } else {
        $(".contents .tit").text(ulTxt);
    }

    // nav slide
    $(document).on("click", ".guide-nav ul > li > a", function(){
        var depthSt = $(this).parent();
        var depthNd = depthSt.find("ol");
        if (depthSt.hasClass("on")){
            depthSt.removeClass("on");
            depthNd.slideUp(300).removeClass("on");
        } else {
            $(".guide-nav li ol").slideUp(300).closest("li").removeClass("on");
            depthSt.addClass("on");
            depthNd.slideDown(300).addClass("on");
        }
    });

    $(document).keydown(function(e){
        if(e.keyCode == 27) {
            if ($('body').hasClass('preview-mode')) {
                $('body').removeClass('preview-mode');
            } else {
                $('body').addClass('preview-mode');
            }
        }
    });
});

// menu indi.
function navMenu(d1, d2){
    $('.nav').children().eq(d1).addClass('on').find("ol").show().find("li").eq(d2).addClass('inner_on');
}

