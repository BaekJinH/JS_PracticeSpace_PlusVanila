if (window.console == undefined) {console={log:function(){} };}
var GJB = GJB || {};
var GJB = {
    init : function(){
        GJB.ini.init();
        GJB.mainpage();
        GJB.winScroll();
        GJB.accordion.init();
        GJB.tab.init();
    },

    // global scroll
    winScroll : function(){
        var win = $(window),
        body = $('body'),
        sec = $('.sec');

        win.on('load', function() {
            $('.direct-sticker').each(function(){
                $(this).after('<div class="bg-sticker"></div>');
            });
        });

        win.on('load scroll', function(){
            if (!$(".quick-sticker").length) {
                return;
            } else {
                GJB.fixedSticker.ini();
            }
        });

        win.on('resize', function(){
            GJB.fixedSticker.ini();
        });
    },

    //main page
    mainpage : function(){
        console.log("main page");
    },

    //fixedStickerButton
    fixedSticker : {
        ini : function(){
        if ($(".quick_mnu").length){
            console.log("be sticker");
            var wTop = $(window).scrollTop();
            var quickEle = $(".quick_mnu");
            var offsetTop = quickEle.offset().top;
            if(wTop > 200){
                quickEle.css({"z-index":10, "position":"fixed", "top":"100px"})
                } else {
                    quickEle.css({"z-index":0, "position":"absolute", "top":"300px"})
                }
            }
        }
    },

    // ini
    ini : {
        init: function(){
            this.event();
        },

        event: function(){
            this.action();
        },

        action: function(){
            //
        },

        // myself add class
        addOn: function(overEle){ $(overEle).addClass("on") },

        // parent add class
        addOnParent: function(overEle){ $(overEle).parent().addClass("on") },

        // remove class
        removeOn: function(outEle){ $(outEle).removeClass("on")},

        // layer popup close
        popCloseFunc : function(){
            $('.pop_loop').remove();
            $('.layer-popup').fadeOut();
            $('body').css({'overflow':'auto','height':'auto'});
            $(".layerActive").focus().removeClass("layerActive");
        }

    },

    // accordion [opt. addclass:"sync"]
    accordion : {
        init: function(){
            $acc = $(".as-accordion");
            $accLi = $(".as-accordion > li");
            $accThis = $accLi.find("a");
            this.event();
            $($acc).each(function(){
                if ($(this).parents(".as-accordion").hasClass("as-no")){
                        return;
            } else {
                $acc.not(".as-no")
                    .find("li:first-child")
                    .addClass("on")
                    .find(".toggle-ele")
                    .css("display","block");
            }
            });
        },
        event: function(){
            var accordion = this;
            $acc.on("click", "li>a", function(e){
                e.preventDefault();
                accordion.action($(this));
            });
        },
        action: function(eleAcc){
            var $eleAcc = $(eleAcc).parent("li");
            var $eleAccParent = $eleAcc.closest(".as-accordion");
            if ($eleAcc.hasClass("on")){
                $eleAcc.find(".toggle-ele").slideUp(150, function(){
                    $eleAcc.removeClass("on");
                });
            } else {
                if ($eleAccParent.hasClass("sync")){
                    $eleAccParent.find("li").removeClass("on");
                    $eleAccParent.find(".toggle-ele").slideUp(150);
                }
                $eleAcc.addClass("on");
                $eleAcc.find(".toggle-ele").slideDown(150);
            }
        }
    },

    // tab menu
    tab : {
        init: function(){
            if ($(".as-tab").length == 0 || $(".tab-pass").length) {return;}
            $tabEle = $(".as-tab .area-tab-mnu").find("li");
            $tabEleLen = $tabEle.length;
            this.event();
        },
        event: function(){
            var tab = this;
            $tabEle.find('a[href^="#"]').click(function(e){e.preventDefault();});
            $tabEle.on("click", function(e){
                tab.action($(this), $(this).closest(".area-tab-mnu").find(" > li").index(this));
            });
            $tabEle.not(":hidden").each(function() {
                if ($(this).parent(".area-tab-mnu").hasClass("flexible")){
                    return;
                } else {
                    var menuEa = $(this).parent(".area-tab-mnu").find("li").length;
                    var menuSize = (100/menuEa);
                    $(this).parent(".area-tab-mnu").find("li").width(menuSize+"%");
                    console.log(menuEa, menuSize );
                }
            });
            if (($tabEle).hasClass("active")) {
                $(".as-tab .area-tab-mnu > li.active > a").trigger("click");
            } else {
             $tabEle.eq(0).find("> a").trigger("click");
            }
        },
        action: function(ele, getIndex){
            var $findNode = $(ele);
            var $findEle = $findNode.closest(".as-tab").find("> .area-tab-cont .tab-ele");
            $(ele).addClass("active").find(">a").attr("title", "선택된탭");
            $(ele).siblings().removeClass("active").find(">a").attr("title","");
            $findEle.css("display","none");
            $findEle.eq(getIndex).css("display","block");
        }
    },




    // layer popup open [event]
    modalLayer : {
        open: function(ele, unique, widNum){
            var uniqueId = $('#'+unique),
                that = ele;
            $(that).addClass("layerActive");
            uniqueId.attr('tabindex', '0').fadeIn("fast").focus();
            uniqueId.append('<a href="#" class="pop_loop">포커스이동</a>');
            $('.pop_loop').focus(function(){
                uniqueId.attr('tabindex', '0').fadeIn().focus();
            });
            if (widNum){
                $('#'+unique).find(".pop-area").width(widNum);
            } else {
                $('#'+unique).find(".pop-area").css("width","700px");
            }
            $('body').css({'overflow':'hidden','height':'100%'});
            $(window).resize(function(){
                var win_h = $(window).height();
                var win_w = $(window).width();
                var pop_h = uniqueId.find('.pop-area').height();
                var pop_w = uniqueId.find('.pop-area').width();
                var position_top =    (win_h - pop_h) / 2;
                var position_left = (win_w - pop_w) / 2;
                if(position_top <= 0){position_top = 0;}
                if(position_left <= 0){position_left = 0;}
                uniqueId.find('.pop-area').css({'top':position_top,'left':position_left});
                pop_h >= win_h ? $('.dimmed').css('height',pop_h) : $('.dimmed').css('height', 100 + "%");
                pop_w >= win_w ? $('.dimmed').css('width',pop_w) : $('.dimmed').css('width', 100 + "%");
            }).resize();

            //close [event]
            uniqueId.find('.as-pop-close').click(function(e){
                e.preventDefault();
                GJB.ini.popCloseFunc();
            });
        },

        close: function(){
            GJB.ini.popCloseFunc();
        }
    },


}//last

$(function(){
    GJB.init();
});



/*(function() {
    function async_load(){
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = '/js/after_load.js';
        s.async = true;
        var x = document.getElementsByTagName('script')[1];
        x.parentNode.insertBefore(s, x);
    }
    window.attachEvent ? window.attachEvent('onload', async_load) : window.addEventListener('load', async_load, false);
})();*/