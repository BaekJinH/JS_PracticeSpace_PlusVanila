// browser check 일단 사용안함
// var Browser = {chk : navigator.userAgent.toLowerCase()}
// Browser = {ie : Browser.chk.indexOf('msie') != -1, ie6 : Browser.chk.indexOf('msie 6') != -1, ie7 : Browser.chk.indexOf('msie 7') != -1, ie8 : Browser.chk.indexOf('msie 8') != -1, ie9 : Browser.chk.indexOf('msie 9') != -1, ie10 : Browser.chk.indexOf('msie 10') != -1, ie11 : Browser.chk.indexOf('trident') != -1, edge : Browser.chk.indexOf('edge') != -1, opera : !!window.opera, safari : Browser.chk.indexOf('safari') != -1, safari3 : Browser.chk.indexOf('applewebkit/5') != -1, mac : Browser.chk.indexOf('mac') != -1, chrome : Browser.chk.indexOf('chrome') != -1, firefox : Browser.chk.indexOf('firefox') != -1}
// var responCheck = Browser.ie7 || Browser.ie8;
// if (Browser.ie7) {$("html").addClass("ie7");} else if (Browser.ie8) {$("html").addClass("ie8");} else if (Browser.ie9) {$("html").addClass("ie9");} else if (Browser.ie10) {$("html").addClass("ie10");} else if (Browser.ie11) {$("html").addClass("ie11");} else if (Browser.edge) {$("html").addClass("edge");}
// if (window.console == undefined) {console={log:function(){}};}

// // 호환성보기 테스트
// if (navigator.userAgent.indexOf("MSIE 7") > 0 && navigator.userAgent.indexOf("Trident")){
//     console.log("호환성테스트");
// }
// or
/*if (/MSIE 7.*Trident/.test(navigator.userAgent)){document.getElementsByTagName("html")[0].className+="ie-compatible";}*/

// && 곱연산 단축 평가는 두 가지 전부 true여야만 좌측 값 반환

// 변수 KDATA의 값이 있다면 KDATA , 없다면 {} 값 반환
// 둘 중 하나만 true면 true로 평가되므로 왼쪽 피연산자가 true이면 바로 true를 반환
// 왼쪽이 true라면 무조건 왼쪽 반환
var KDATA = KDATA || {};
var KDATA = {
    init : function() {
        KDATA.ini.init();
        KDATA.tab.init();
        KDATA.menuAll.init();
        KDATA.accordion.init();
        KDATA.selectbox.init();
        KDATA.dsgnForm();
        KDATA.dsgnRdo();
        KDATA.GNB();
        KDATA.notCaption();
        KDATA.clearInput();
        KDATA.searchLayer();
    },

    // GNB
    GNB : function() {
        var delay = 30, setTimeOutConst; // GNB노출에 대한 의도가 있을 경우의 감도조절
        var $lnb = $(".gnb > li");
        var $anchor = $lnb.find(">a");

        $anchor.on("mouseenter focusin", function() {
            var $anchorLi = $(this).parent();
            var $depth = $anchorLi.index();

            $("select").blur();

            setTimeOutConst = setTimeout(function() {
                 $lnb.removeClass("active");
                 $anchorLi.addClass("active");
            }, delay);

            //current active
            //if($(".gnb-ext").length) {
                //$(".gnb-ext").removeClass("active").find(".inner-box").removeClass("active");
                //$(".gnb-ext").addClass("active");
                //hover시 다른 메뉴 붙는 부분 수정 - 김민정(20200923)
                // 주석 21.09
                // $(".gnb-ext ul").each(function(index, element) {
                //     if($(this).attr("id").indexOf($depth+1) != -1) {
                //         $(this).addClass("active");
                //     }
                // });

                //$(".gnb-ext .inner-box").eq($depth).addClass("active");
            //}
        });
        $(".gnb > li > a").on("mouseout focusout", function() {
            clearTimeout(setTimeOutConst);

            if ($lnb.hasClass("active") && depth_1 == false && depth_2 == false) {
                gnbMouseCheck();
            }
        });
        // $(".gnb").on("mouseenter", function(){depth_1=true; gnbCheck();});
         $(".gnb-ext").on("mouseenter", function(){depth_2=true; gnbCheck();});
        // $(".gnb").on("mouseleave", function(){depth_1=false; gnbCheck();});
         $(".gnb-ext").on("mouseleave", function(){depth_2=false; gnbCheck();});
        $(".gnb li").on("mouseenter", function(){depth_1=true; gnbCheck();});
        //$(".gnb-ext li").on("mouseenter", function(){depth_2=true; gnbCheck();});
        $(".gnb li").on("mouseleave", function(){depth_1=false; gnbCheck();});
        //$(".gnb-ext li").on("mouseleave", function(){depth_2=false; gnbCheck();});

        // mouse leave.enter flag
        depth_1 = false;
        depth_2 = false;

        // mopuseleave add opt.
        function gnbMouseCheck(){
            if(depth_1 == false && depth_2 == false){
                //console.log(depth_1,depth_2);
                $(".gnb > li").removeClass("active");
                $(".gnb-ext").removeClass("active");
                $(".gnb-ext").find(".inner-box").removeClass("active").children().removeClass("active");
            }
        }

        function gnbCheck(){
            setTimeout(function(){
                gnbMouseCheck();
            }, 200);
        }

        // util layer
        $(".user_menu > a").each(function(e) {
            $(this).click(function(e) {
                e.preventDefault();
                var accLi = $(this).parent("li").find(".user_area");
                if (accLi.hasClass("active")) {
                    accLi.removeClass("active").fadeOut(100);
                } else {
                    $("#header .menu-toggle a").removeClass("active").html('모든 메뉴 열기');
                    $("#header .all-sec").fadeOut(100);
                    accLi.addClass("active").fadeIn(500);
                }

                // gnb 회원정보메뉴 aria
                if ( $(this).parent("li").is('.user_menu') && $(this).siblings('.user_area').is('.active') ) {
                    $(this).attr('aria-expanded','true');
                } else {
                    $(this).attr('aria-expanded','false');
                }

            });
        });

        // $(document).on("mouseup", function(e) {
        //     var cont = $(".gnb-sec .user_area");
        //     if (cont.has(e.target).length == 0) {
        //         cont.removeClass("active").hide();
        //     }
        // });
    },

    searchLayer : function(ele) {
        console.log($(ele));
        var searchLyr = $(ele).next(".gnb-search");
        function close() {
            $(ele).focus().removeClass("active");
            searchLyr.find('input').val('');
            searchLyr.find('.gnb-auto').hide();
            searchLyr.fadeOut(200).removeAttr('tabindex').find('.pop_loop').remove();
        }
        if ($(ele).hasClass("active")) {
            close();
        } else {
            //if($(".gnb-sec .user_area").hasClass("active")){
                $(".gnb-sec .user_area").removeClass("active").fadeOut(100);//util layer 닫기
                $("#header .menu-toggle a").removeClass("active").html('모든 메뉴 열기');// 햄버거 닫기
                $("#header .all-sec").fadeOut(100);//전체메뉴 닫기
            //}
            $(ele).addClass("active");
            searchLyr.fadeIn(500);
            searchLyr.attr('tabindex', '0').fadeIn("fast").focus().append('<a href="#" class="pop_loop">포커스이동</a>');
        }
        //자동완성 입력필드 노출
        searchLyr.find('input').on('propertychange change keyup paste input focusin', function(){
            searchLyr.find('.gnb-auto').fadeIn(300);
        });
        //$(".gnb-search").on('focusout', function(){
        //    $('.gnb-auto').fadeOut(100);
        //});

        $('.pop_loop').focus(function() {
            searchLyr.attr('tabindex', '0').fadeIn().focus();
        });
        searchLyr.find('.btn-close-srch').click(function() {
            close();
        });
    },

    // main page
    mainpage : function() {
        // console.log("main page");
    },

    // ini
    ini : {
        init : function() {
            this.event();
        },

        event : function() {
            this.action();
        },

        action : function() {
            //
        },

        // myself add class
        addOn : function(overEle) {
            $(overEle).addClass("on")
        },

        // parent add class
        addOnParent : function(overEle) {
            $(overEle).parent().addClass("on")
        },

        // remove class
        removeOn : function(outEle) {
            $(outEle).removeClass("on")
        },

        // layer popup close
        popCloseFunc : function() {
            console.log("close");
            $('.pop_loop').remove();
            $('.layer-popup').fadeOut();
            //$('.layer-popup').hide();

            /* 2020.04.23 수정
            $(".layer-popup .pop-area").each(function() {
                pop_h = $(this).outerHeight();
            });
            */

            $('body').css({
                'overflow' : 'auto',
                'height' : 'auto'
            });
            $(".layerActive").focus().removeClass("layerActive");
        },

        // modeless close
        lessCloseFunc : function() {
            $('.less-loop').remove();
            $('.less-popup').fadeOut(function() {
                $(".layer-popup .pop-area").removeClass('scroll');
            });
            $(".layerActive").focus().removeClass("layerActive");
        },

        // content go
        contJump : function() {
            if ($("#content_jump").length) {
                var titOffset = $("#content_jump").offset().top - 50;
                $("html,body").animate({
                    scrollTop : titOffset
                }, 100);
            }
        }
    },

    // table caption setting [execpt:.not-caption]
    notCaption : function() {
        $('table').each(function(i) {
            if (!$(this).hasClass('not-caption')) {
                var th = Array();
                $(this).find('th:visible').each(function(i) {
                    if (i <= 7) {
                        th[i] = $(this).text();
                        $(this).closest('table').find('caption p').text(th + ' 정보를 제공');
                    } else {
                        $(this).closest('table').find('caption p').text(th + ' 등의 정보를 제공');
                    }
                });
            }
        });
    },

    // all menu
    menuAll : {
        init : function() {
            var $menuList = $(".gnb li, .gnb-ext")
            var $menuAll = $("#header .menu-toggle a");
            var $menuAllWrap = $("#header .all-sec");
            var $menuAllWrapClose = $menuAllWrap.find("#header .menu-toggle a.active");

            // main GNB drop menu
            $('.nav_list > li > a').on('mouseover focus', function (e) {
                $('.nav_list > li > ul').show();
                $('.nav_list_bg').show();
            });
            $('.nav_list').on('mouseleave', function () {
                $('.nav_list > li > ul').hide();
                $('.nav_list_bg').hide();
            });
            $('.visual_wrap .swiper-button-prev').focus(function() {
                $('.nav_list > li > ul').hide();
                $('.nav_list_bg').hide();
                $("#header .all-sec").fadeOut();
                $("#header .menu-toggle a").removeClass("active").html('모든 메뉴 열기');
            });


            $menuAll.click(function() {
                //current active
                if (!$(this).hasClass("active")) {
                    $(this).attr('aria-expanded', 'true');
                    $(this).addClass("active").html('모든 메뉴 닫기');
                    $(".gnb-sec .user_area").removeClass("active").fadeOut(100);
                    $(".gnb2 .search_btn").removeClass("active");
                    $(".gnb-search").fadeOut(200).removeAttr('tabindex').find('.pop_loop').remove();
                    //$("html,body").animate({
                    //    scrollTop : 0
                    //}, 100);
                    $menuAllWrap.fadeIn(500);
                    //$menuAllWrap.focus();
                    $('body').addClass('back_scroll_lock');
                } else {
                    $(this).attr('aria-expanded', 'false');
                    $(this).removeClass("active").html('모든 메뉴 열기');
                    $menuAllWrap.fadeOut(200);
                    //$(this).focus();
                    $('body').removeClass('back_scroll_lock');
                }
            });
            $menuAllWrapClose.click(function() {
                $menuAllWrap.hide();
                $menuAll.removeClass("active").focus();
            });

            /* key check function */
            // $menuAllWrap.on('keydown', function(event) {
            //     if (event.target.className === "all-sec") {
            //         if (event.keyCode == 9 && event.shiftKey)
            //             return false;
            //     }
            // });
            // $menuAllWrapClose.on('keydown', function(event) {
            //     if (event.keyCode == 9 && event.shiftKey) {
            //     } else if (event.target.className === "active") {
            //         if (event.keyCode == 9) {
            //             $menuAllWrap.focus();
            //         }
            //     }
            // });
        },
    },

    // accordion [opt. addclass:"sync"]
    accordion : {
        init : function() {
            //console.log("accordion");
            $acc = $(".as-accordion");
            $accLi = $(".as-accordion > li");
            $accThis = $accLi.find("a");
            this.event();
            $($acc).each(function() {
                if ($(this).hasClass("as-no")) {
                    return;
                } else if ($(this).hasClass("as-allview")) {
                    $(this).find("li").addClass("on").find(".toggle-ele").css("display", "block");
                } else {
                    $acc.not(".as-no").find("li:first-child").addClass("on").find(".toggle-ele").css("display", "block");
                }
            });
            $acc.find(".title-wrap > a").each(function(index) {
                $(this).attr("title", $(this).find(".title").text() + " 상세내용 보기");
                $acc.find("li").first().find(".title-wrap > a").attr("title", $(this).closest('.as-accordion').find("> li:first-child .title-wrap a .title").text() + " 상세내용 닫기");
            });

            // faq 추가타입
            if ($acc.hasClass("acco-faq")) {
                $acc.find("li").each(function(i, ele) {
                    if ($(this).find(".toggle-ele").is(":visible")) {
                        $(this).closest("li").find("a").attr("title", "답변닫기");
                    } else {
                        $(this).closest("li").find("a").attr("title", "답변열기");
                    }

                    if ($(ele).parent('ul').is('.title-modify')) {
                        $(ele).find('.title > a').attr("title", "답변닫기");
                    } else {
                        $(ele).find('.title > a').attr("title", "답변열기");
                    }
                });
            }

            if ( $acc.hasClass('title-modify') ) {
                $acc.find("li .toggle-ele a").each(function(i, ele) {
                    let titleVal = $(ele).text();
                    if ($(ele).hasClass('auto-notitle')) {
                        $(ele).attr('title', titleVal + " 페이지 이동");
                    }
                })
            }
        },
        event : function() {
            var accordion = this;
            $acc.on("click", ".title-wrap > a, .toggle-btn", function(e) {
                e.preventDefault();
                if ($(this).closest(".as-accordion").hasClass("acco-faq")) {
                    accordion.actionFaq($(this));
                } else {
                    accordion.action($(this));
                }
            });

        },
        action : function(eleAcc) {
            var $eleAcc;
            if ($(eleAcc).parent().is("li")) {
                $eleAcc = $(eleAcc).parent("li");
            } else {
                $eleAcc = $(eleAcc).parent().parent();
            }
            var $eleAccParent = $eleAcc.closest(".as-accordion");
            if ($eleAcc.hasClass("on")) {
                $eleAcc.find(".toggle-ele").slideUp(150, function() {
                    $eleAcc.removeClass("on").find(".title-wrap > a").attr("title", $eleAcc.find(".title-wrap > a .title").text() + " 상세내용 보기");
                });
            } else {
                if ($eleAccParent.hasClass("sync")) {
                    $eleAccParent.find("li").removeClass("on");
                    $eleAccParent.find(".toggle-ele").slideUp(150);
                    //console.log($(this).closest(".as-accordion").find(">a"));
                    $acc.find(".title-wrap > a").each(function(index) {
                        $(this).attr("title", $(this).find(".title").text() + " 상세내용 보기");
                    });

                }
                $eleAcc.addClass("on");
                $eleAcc.find(".toggle-ele").slideDown(150);
                $eleAcc.find(".title-wrap > a").attr("title", $eleAcc.find(".title-wrap > a .title").text() + " 상세내용 닫기");
            }
        },
        actionFaq : function(eleAcc) {
            var $eleAcc;
            if ($(eleAcc).parent().is("li")) {
                $eleAcc = $(eleAcc).parent("li");
            } else {
                $eleAcc = $(eleAcc).parent().parent();
            }
            var $eleAccParent = $eleAcc.closest(".as-accordion");
            var $eleAccParentFaq = $eleAcc.closest(".as-accordion.acco-faq");
            if ($eleAcc.hasClass("on")) {
                $eleAcc.find(".toggle-ele").slideUp(150, function() {
                    $eleAcc.find("a").attr("title", "답변열기");
                    $eleAcc.removeClass("on");
                });
            } else {
                if ($eleAccParent.hasClass("sync")) {
                    $eleAccParent.find("li").removeClass("on");
                    $eleAccParent.find(".toggle-ele").slideUp(150);
                    $eleAccParent.find("li a").attr("title", "답변열기");
                }
                $eleAcc.addClass("on");
                $eleAcc.find(".toggle-ele").slideDown(150);
                $eleAcc.find("a").attr("title", "답변닫기");
            }

            if ( $eleAcc.parent('ul').hasClass('title-modify') ) {
                $eleAcc.find(".toggle-ele a").each(function(i, ele) {
                    let titleVal = $(ele).text();
                    if ($(ele).hasClass('auto-notitle')) {
                        $(ele).attr('title', titleVal + " 페이지 이동");
                    }
                })
            }
        }
    },

    // tab menu
    tab : {
        init : function() {
            if ($(".as-tab").length == 0 || $(".tab-pass").length) {
                return;
            }
            $tabEle = $(".as-tab .area-tab-mnu").find("li");
            $tabEleLen = $tabEle.length;
            this.event();
        },
        event : function() {
            var tab = this;
            $tabEle.find('a[href^="#"]').click(function(e) {
                e.preventDefault();
            });
            $tabEle.on("click", function(e) {
                tab.action($(this), $(this).closest(".area-tab-mnu").find(" > li").index(this));
            });
            $tabEle.not(":hidden").each(function() {
                if ($(this).parent(".area-tab-mnu").hasClass("flexible")) {
                    return;
                } else {
                    var menuEa = $(this).parent(".area-tab-mnu").find("li").length;
                    var menuSize = (100 / menuEa);
                    $(this).parent(".area-tab-mnu").find("li").width(menuSize + "%");
                    //console.log(menuEa, menuSize);
                }
            });
            if (($tabEle).hasClass("active")) {
                $(".as-tab .area-tab-mnu > li.active > a").trigger("click");
            } else {
                $tabEle.eq(0).find("> a").trigger("click");
            }
        },
        action : function(ele, getIndex) {
            var $findNode = $(ele);
            var $findEle = $findNode.closest(".as-tab").find("> .area-tab-cont .tab-ele");
            $(ele).addClass("active").find(">a").attr("title", "선택된탭");
            $(ele).addClass("active").find(">a").attr("aria-selected", "true");
            $(ele).siblings().removeClass("active").find(">a").attr("title", "");
            $(ele).siblings().removeClass("active").find(">a").attr("aria-selected", "false");
            $findEle.css("display", "none");
            $findEle.eq(getIndex).css("display", "block");
        }
    },

    // checkbox, radio design solution
    dsgnForm : function() {
        $('.dsgn-form input, .dsgn-ele').each(function() {
            if ($(this).attr('type') == 'checkbox') {
                if ($(this).parent(".ele-chk").length == 0) {
                    // $(this).wrap('<span class="ele-chk"></span>');
                } else {

                    $(this).focus(function() {
                        $(this).parent('.ele-chk').addClass('focus');
                    });
                    $(this).blur(function() {
                        $(this).parent('.ele-chk').removeClass('focus');
                    });
                    //2019.10.14 KDATA용 약관 이용시 체크시에는 계속 체크
                    // $(this).change(function() {
                    //     if (this.checked) {
                    //         $(this).parent('.ele-chk').addClass('checked');
                    //     } else {
                    //         $(this).parent('.ele-chk').removeClass('checked');
                    //     }
                    // });
                    $(this).change(function() {
                         if (this.checked) {
                             $(this).parent('.ele-chk').addClass('checked');
                         } else {
                             if($(this).hasClass('agree')){

                             } else {
                                 $(this).parent('.ele-chk').removeClass('checked');
                             }
                         }
                    });
                    if ($(this).is(":disabled")) {
                        $(this).parent('.ele-chk').addClass('disabled');
                    }
                    if ($(this).is(":checked")) {
                        $(this).parent('.ele-chk').addClass('checked');
                    }
                }
            } else if ($(this).attr('type') == 'radio') {
                if ($(this).parent(".ele-rdo").length == 0) {
                    // $(this).wrap('<span class="ele-rdo"></span>');
                } else {
                    $(this).focus(function() {
                        $(this).parent('.ele-rdo').addClass('focus');
                    });
                    $(this).blur(function() {
                        $(this).parent('.ele-rdo').removeClass('focus');
                    });
                    $('input[type=radio]').change(function() {
                        $('input[type=radio]').parent('.ele-rdo').removeClass('checked');
                        $('input[type=radio]:checked').parent('.ele-rdo').addClass('checked');
                    });
                }
            }
            if (this.checked) {
                $(this).parent().addClass('checked');
            }
        });
    },

    dsgnRdo : function() {
        $('.ele-rdo2 .rdo-item input[type=radio]').each(function() {
            if (this.checked) {
                $(this).parents('.rdo-item').addClass('check');
            }
        });
        $('.ele-rdo2 .rdo-item input[type=radio]').change(function() {
            var name = $(this).attr('name');
            if (this.checked) {
                $('.ele-rdo2 .rdo-item input[name=' + name + ']').parents('.rdo-item').removeClass('check');
                $(this).parents('.rdo-item').addClass('check');
            } else {
                $(this).parents('.rdo-item').removeClass('check');
            }
        });

        $('.ele-rdo2 .rdo-item input[type=radio]').focus(function() {
            $(this).parents('.rdo-item').addClass('focus');
        }).blur(function() {
            $(this).parents('.rdo-item').removeClass('focus');
        });
    },

    // layer popup open [event] [스크립트이관]
    modalLayer : {
        open : function(ele, unique, widNum, flag) {
            var uniqueId = $('#' + unique), that = ele;
            $(that).addClass("layerActive");
            uniqueId.attr('tabindex', '0').fadeIn("fast").focus();
            //2019-10-14    uniqueId.append('<a href="#" class="pop_loop">포커스이동</a>');
            $('.pop_loop').focus(function() {
                uniqueId.attr('tabindex', '0').fadeIn().focus();
            });
            if (widNum) {
                //$('#' + unique).find(".pop-area").width(widNum);
                $('#' + unique).find(".pop-area").css("max-width", widNum);
            } else {
                // $('#' + unique).find(".pop-area").css("width", "700px");
            }
            $('body').css({
                'overflow' : 'hidden',
                'height' : '100%'
            });

            // 팝업 포커스
            $('.pop-area').attr('tabindex','0');
            $('.pop-area').focus();

            var win_h = $(window).height();
            var pop_h;

            /* 2020.04.23 수정
            pop_h = uniqueId.find('.pop-area').outerHeight();
            */

            //2020.04.23 추가
            if(!uniqueId.find('.pop-area').hasClass('scroll')){
                pop_h = uniqueId.find('.pop-area').outerHeight();
            }
            //console.log(pop_h,win_h);
            //2020.04.23 추가 끝

            $(window).resize(function() {
                var win_w = $(window).width();
                //var pop_w = uniqueId.find('.pop-area').width();
                var pop_w = uniqueId.find('.pop-area').outerWidth();
//                var position_top = (win_h - pop_h) / 2;
                var position_left = (win_w - pop_w) / 2;

//                if (position_top <= 0) {
//                    position_top = 0;
//                }
                if (position_left <= 0) {
                    position_left = 0;
                }
                uniqueId.find('.pop-area').css({
                    //'top' : position_top//,
                    //'left' : position_left
                });

                var win_h = $(window).height();
                // 20170922 아코디언 포함된 팝업 스타일 아코디언 갯수로 분기 처리
                if (uniqueId.find('.pop-area .acco-type2').length >= 1) {
                    uniqueId.find('.pop-area').addClass('scroll').css({
                        'margin-top' : '0'
                    });
                //}
                //2019.10.14
                } else {
                     if (pop_h >= win_h) {
                        //console.log("클떄  "+pop_h,win_h);
                         uniqueId.find('.pop-area').addClass('scroll').css({
                         //uniqueId.find('.pop-area').css({
                            'top' : '0'
                            ,'margin-top' : '0'
                            ,'margin-left' : -pop_w / 2
                         });

                         //2020.04.23 추가
                         uniqueId.find('.pop-area').find(".pop-content").scrollTop(0);
                         //2020.04.23 추가 끝

                     } else {
                        //console.log("작을때  "+pop_h,win_h);
                         uniqueId.find('.pop-area').removeClass('scroll').css({
                         //uniqueId.find('.pop-area').css({
//                            'margin-top' : -pop_h / 2,
                            'margin-left' : -pop_w / 2
                         });
                     }
                }
            }).resize();

            // close [event]
            uniqueId.find('.as-pop-close').click(function(e) {
                e.preventDefault();
                KDATA.ini.popCloseFunc();
            });
        },
        close : function() {
            KDATA.ini.popCloseFunc();
        }
    },

    // modeless popup
    modeless : {
        open : function(ele, uniqueLess, load, type) {
            var uniqueIdLess = $('#' + uniqueLess), that = ele, myAbs = ele.closest(".lyr-wrap-rela").find(".lyr-wrap-abs");

            var half = $(window).width() / 2;
            var btnLft = that.offset().left;
            if (btnLft > half) {
                that.parents('.tooltip').addClass('right');
            }

            if (myAbs.length) {
                KDATA.modeless.close();
            } else {
                KDATA.modeless.close();
                $(".lyr-wrap-abs").remove();
                $(".lyr-wrap-rela").css("z-index", "");
                $(".layerActive").focus().removeClass("layerActive");
                ele.closest(".pos-rela").css("z-index", "200");
                ele.closest(".lyr-wrap-rela").css("z-index", "100").append('<div id="' + uniqueLess + '" class="lyr-wrap-abs"></div>'); // title="'+ele.text()+' 상세메뉴"
                if (load == "html") {
                    $("#" + uniqueLess).load("/resource/html/bpb/load-test.html?22 ." + uniqueLess, function(responseTxt, statusTxt, xhr) {
                        if (statusTxt == "error") {
                        } else if (statusTxt == "success") {
                        }
                    });
                } else {
                    var data = $("." + uniqueLess).html();
                    var wid = $("." + uniqueLess).width();
                    ele.closest(".lyr-wrap-rela").find(".lyr-wrap-abs").css('width', wid + 'px').append(data);
                }
                $(that).addClass("layerActive").next().attr('tabindex', '0').show().focus();
                $(document).on("focus", '.less-loop', function() {
                    $(this).closest(".lyr-wrap-abs").attr('tabindex', '0').fadeIn().focus();
                });
                if (type == "calType") {
                    var getRelPos = ele.closest(".pos-rela").offset().left;
                    var getAbsPos = ele.closest(".lyr-wrap-rela").find(".lyr-wrap-abs").offset().left;
                    $(that).next().css({
                        'left' : -(getAbsPos - getRelPos - 4),
                        'top' : "-15px"
                    });
                }
            }
        },

        close : function() {
            $(".lyr-wrap-abs").fadeOut("fast", function() {
                var getId = $(this).attr("id");
                $(this).find("." + getId + ".local-node").appendTo("body");
                $(".lyr-wrap-rela").css("z-index", "");
                $(".pos-rela").css("z-index", "15");

                $(this).remove();
            });
            $(".layerActive").focus().removeClass("layerActive");
        }
    },

    // 21.10.15 selectbox
    selectbox : {
        init : function() {
            $('.select_wrap').each(function(i, ele) {
                $(ele).find('.btn_select_list > li').each(function(i, ele) {
                    let boolean = $(ele).attr('aria-selected');
                    $btnSelect = $(ele).parents('.btn_select_list').siblings('.btn_select');
                    $name = $(ele).text();
                    if ( boolean === 'true' ) {
                        $btnSelect.find('.name').text($name);
                    }
                })
            });
        },
        action : function(ele) {
            if ( $(ele).hasClass('btn_select') ) {
                $this = $(ele);
                $list = $this.siblings('.btn_select_list');
                if($this.hasClass('on')) {
                    $this.removeClass('on');
                    $this.attr('aria-expanded', 'false');
                } else {
                    $this.addClass('on');
                    $this.attr('aria-expanded', 'true');
                    $list.find('li').click(function() {
                        $option = $(this);
                        $name = $option.text();
                        $select = $option.parents('.btn_select_list').siblings('.btn_select');
                        $option.siblings('li').attr('aria-selected','false');
                        $option.attr('aria-selected','true');
                        $select.find('.name').text($name);
                        $this.removeClass('on');
                        $this.attr('aria-expanded', 'false');
                    });
                }
            }
        }
    },

    // only dimmed layer [event]
    onlyDimmed : {
        open : function(flag) {
            if (!$(".only-dimmed").length) {
                $("body").append('<div class="only-dimmed"></div>')
                .css({'overflow' : 'hidden', 'height' : '100%'});
                if ( flag == "dark"){
                    console.log("dark");
                    $(".only-dimmed").css("opacity","0.7");
                }
            } else {
                //
            }
        },
        close : function() {
            $(".only-dimmed").remove();
            $("body").css("overflow", "");
        }
    },

    // loading...
    // loading : {
    //     open : function() {
    //         if (!$(".load-dimmed").length) {
    //             $("body").append('<div class="load-dimmed"><img src="/img/common/ico/loading_txt.gif" alt="로딩중"></div>');
    //         }
    //     },
    //     close : function() {
    //         $(".load-dimmed").remove();
    //     }
    // },

    //input clear btn
    clearInput : function() {
        var $inp_form = $('.ele-wrap'),
            $inp = $inp_form.find('input.has-clear'),
            isOpen = false;
        $inp.wrap('<div class="inp-wrap"></div>');
        $inp.after('<button type="button" class="btn_clear">내용 지우기</button>');
        var $btnDel = $('.btn_clear');
        $inp.on('propertychange change keyup paste input focusin', function (e) {
            var t = $(e.target),
                curVal = t.val(),
                oldVal;
            if (curVal !== oldVal && curVal !== '') {

                t.closest($inp_form).find($btnDel).addClass('active');
                isOpen = true;
                return;
            } else {

                $btnDel.removeClass('active');
                isOpen = false;
            }

            oldVal = curVal;
        });

        //포커스 잃었을때
        $(document).on('focusin click', function (e) {
            if ($inp_form) {
                if (!$inp_form.find(e.target).length) {
                    $btnDel.removeClass('active');
                }
            }
        });

        $btnDel.on('click', function (e) {
            if (isOpen == true) {
                var t = $(e.target);
                t.prev($inp).val('');
                $btnDel.removeClass('active');
                $btnDel.siblings('input').focus();
                isOpen = false;
            }
        });
    }
}// last

$(function() {
    KDATA.init(); // KDATA ini. call

    $('a[href^="#"]').not(".able-anchor").click(function(e) {
        e.preventDefault();
    });

    /* selec box focus */
    $('.ele-select select').focus(function() {
        //$(this).parents('.ele-select').css({'border-color':'#1a73e8'}).find('.select-indi').addClass('focus'); 2019-10-29 메인컬러변경
        $(this).parents('.ele-select').css({'border-color':'#00accd'}).find('.select-indi').addClass('focus');
    });
    $('.ele-select select').blur(function() {
        $(this).parents('.ele-select').css({'border-color':'#c5c5c5'}).find('.select-indi').removeClass('focus');
    });

    // select
    $('select.select').each(function() {
        var title = $(this).attr('title');
        if ($('option:selected', this).val() != '')
            title = $('option:selected', this).text();
        $(this)
        // .after($('option:selected',this).text() + '</span>')
        .change(function() {
            val = $('option:selected', this).text();
            $(this).next().text(val);
        });
    }); // $(this).css({'z-index':10,'opacity':0,'-khtml-appearance':'none'}).after('<span class="select-indi">' + $('option:selected',this).text() + '</span>')

    // 슬라이드 재생/멈춤 버튼 클릭시 포커스 이동
    // $(document).on('click', '.bx-controls-auto a', function() {
    //     if ($(this).hasClass('bx-start')) {
    //         $(this).closest('.bx-controls-auto').find('.bx-stop').focus();
    //     } else {
    //         $(this).closest('.bx-controls-auto').find('.bx-start').focus();
    //     }
    // });

    // 테이블 열고닫기 버튼
    $(document).on('click', '.tbl-wrap .tbl-headnote .btn-aco', function() {
        if ($(this).parents('.tbl-wrap').hasClass('on')) {
            $(this).parents('.tbl-wrap').removeClass('on').find('.tbl-tog').slideUp(100);
            $(this).html('추가정보 열기');
        } else {
            $(this).parents('.tbl-wrap').addClass('on').find('.tbl-tog').slideDown(200);
            $(this).html('추가정보 닫기');
        }
    });

    // 토글 공용버튼
    $(document).on('click', '.btn-toggle', function() {
        if (!$(this).hasClass('on')) {
            $(this).addClass('on').attr("title", "선택됨");
        } else {
            $(this).removeClass('on').removeAttr("title");
        }
    });

    $(document).on('click', '.lyr-wrap-rela .btn-close', function() {
        $(this).parents('.lyr-wrap-rela').find('.btn-detailView').focus().removeClass('layerActive');
        $(this).parents('.lyr-wrap-rela').find('.con-layer').css({
            'opacity' : '0'
        }).hide().removeAttr('tabindex');
        $('.pop_loop').remove();
    });

    /* tr 클릭 */
    // $(".tbl-list.data tbody tr").click(function () {
    //     alert("페이지 이동");
    // });

    // 스킵네비
    $(document).on('click', '#skip a', function() {
        //console.log("스킵네비");
        $(this).parents('body').find('#contents').attr('tabindex', '0').focus();
    });

    // 전체동의
    // 체크박스 전체 선택
    $(".checkbox_group").on("click", "#check_all", function () {
        $(this).parents(".checkbox_group").find('input').prop("checked", $(this).is(":checked"));
    });

    // 체크박스 개별 선택
    $(".checkbox_group").on("click", ".check_item", function() {
        var is_checked = true;

        $(".checkbox_group .check_item").each(function(){
            is_checked = is_checked && $(this).is(":checked");
        });

        $("#check_all").prop("checked", is_checked);
    });
});

//  웹접근성 탭
$(function(){
    var $gnb = $('.gnb > li');
    var $depth1 = $gnb.find(">a");
    var $logoA = $('.logo > a');
    var $gnb2A = $('.gnb2 > li > a');
    var $curi1 = $gnb.has('li.always').index();
    var $curi2;

    if ( $('.gnb li.always .inner-box > li').is('.always') ) {
        $('.gnb li.always .inner-box > li').map(function(i, el) {
            if ( $(el).hasClass('always') ) {
                $curi2 = i;
            }
        });
    }

    $(window).keyup(function(e){
        var tab = e.keyCode;
        var target = e.target;

        // 페이지 접속 시 처음 메뉴 상태
        function menuCurrent() {
            $depth1.parent('li').removeClass('always');
            //$depth1.siblings('.gnb-ext').removeClass('ev-tab');
            $($gnb).eq($curi1).addClass('always');
            $($gnb).eq($curi1).find('.inner-box > li').eq($curi2).addClass('always');
        }

        if ( tab === 9 ) {
            $depth1.focus(function() {
                $(this).parent('li').addClass('always');
                $(this).siblings('.gnb-ext').addClass('ev-tab');
                $('#header .all-sec').fadeIn();
                //$(this).siblings('.gnb-ext').find('.always').removeClass('always');
                $depth1.not(this).parent('li').removeClass('always');
                //$depth1.not(this).siblings('.gnb-ext').removeClass('ev-tab');
            });

            //$logoA.focus(function() { menuCurrent() });
            $gnb2A.focus(function() { menuCurrent() });

            var $jsFocus = $(".jsFocus > li > a");
            $jsFocus.on("focus", function() {
                $(this).addClass('jsFocus');
            });
            $jsFocus.on("blur", function() {
                $(this).removeClass('jsFocus');
            });

            // 메인 슬라이드
            if ( $(target).hasClass('tab_mainVisual') ) {
                var $visul_slide = $(target).parent('.swiper-slide');
                $('.visual_wrap .swiper-slide').each(function(i, ele) {
                    if ( $(ele).attr('id') === $visul_slide.attr('id') ) {
                        $('.visual_wrap .control_wrap .swiper-pagination-bullet').eq(i).trigger("click");
                    }
                })
            }

        }
    })

    // gnb 모든 메뉴 닫기 버튼
    $('#close-totalmenu').focus(function() {
        function closeTotalmenu(el) {
            $("#header .menu-toggle a").removeClass("active").html('모든 메뉴 열기');
            el.parents('.all-sec').fadeOut(100);
            el.attr('aria-expanded','false');
        }

        $(this).addClass('on');
        $(this).click(function() {
            closeTotalmenu($(this));
        });

        // $(this).keydown(function(e) {
        //     if ( e.keyCode === 9 ) closeTotalmenu($(this));
        // });
    });
    $('#close-totalmenu').blur(function() {
        $(this).removeClass('on');
    });

    $('#close-totalmenu').on("click", function() {
        $('.tab-closebtn').focus();
    })

    // 현재 슬라이드 인덱스에 맞게 그 슬라이드 값에 tabindex 부여


    // 메인 슬라이드 영역 - 탭 이동 시 자동 멈춤 구현하기 -2022 / 11 / 14 

    $('.visual_wrap .swiper-button-prev .swiper-button-next .swiper-pagination-bullet').keydown(function(){
        $('.btn_ctr2').addClass('play')
    })



    // 메인 비쥬얼영역 - 탭으로 이동 시 자동멈춤
    $('.visual_wrap .swiper-button-prev').focus(function() {
        var $btn = $('.visual_wrap .btn_ctr2');
        if ($btn.is('.play')) $btn.trigger('click');
    });

    $('.visual_wrap .swiper-pagination-bullet').focus(function() {
        var $btn = $('.visual_wrap .btn_ctr2');
        $(this).trigger('click');

        if ($btn.is('.play')) $btn.trigger('click');
    })

    $('.main-banner-wrap .swiper-button-prev').focus(function() {
        var $btn3 = $('.main-banner-wrap .btn_ctr3');
        if ($btn3.is('.play')) $btn3.trigger('click');
    });

    $('.main-banner-wrap .swiper-pagination-bullet').focus(function() {
        var $btn3 = $('.main-banner-wrap .btn_ctr3');
        $(this).trigger('click');
        if ($btn3.is('.play')) $btn3.trigger('click');
    })

    // 연관사이트 관련
    $(".ft-selbtn").on("click", function(e){
        e.preventDefault();

        var linkWr = $(this).parent("dt").siblings("dd");
        if($(this).hasClass("is-open")){
            $(this).removeClass("is-open").focus();
            $(this).attr('aria-expanded','false');
            $(linkWr).slideUp("fast");
        } else {
            $(this).addClass("is-open");
            $(this).attr('aria-expanded','true');
            $(linkWr).slideDown("fast");
        }
    });

    $(".ft-selbtn-close").click(function(){
        var $dd = $(this).parent();
        $dd.prev().find('.ft-selbtn').removeClass("is-open").focus();
        $dd.slideUp("fast");
    });

})

// 활용사례 목록, 상단버튼
$(function(){
    $('.tab-ele').each(function(i, ele) {
        $eleDisplay = $(ele).css('display');

        if ( $eleDisplay  === 'block' && $(ele).find('*').is('.intro-data.youtube') ) {
            $(ele).find('.intro-data.youtube').css('padding-bottom','0');
            $('#listbtn').removeClass('-bg-fff');
        }

    });

    $(".btn-list").on('click', function() {
        location.href= '/svc/page/intro/data_analysis_list.do';
    })

    $(".btn-toparrow").on('click', function() {
        $('html, body').animate({scrollTop: 0 }, 'slow');
    })

    function tabelePDResize() {
        $('.tab-ele').each(function(i, ele) {
            $eleDisplay = $(ele).css('display');
            if ($eleDisplay  === 'block' && $('html, body').width() < 1279 ) {
                $('#listbtn').find('.cont-wrap').addClass('-pr15');
            } else if ( $('html, body').width() > 1279 ) {
                $('#listbtn').find('.cont-wrap').removeClass('-pr15');
            }
        });
    }

    function listbtnHandle() {
        var scrollT = $(document).scrollTop();
        var scrollH = $(window).height();
        var contentH = $(document).height();

        var num = (scrollT / (contentH - scrollH)) * 100;

        if (num > 30) {
            $(".btn-list").addClass('-ts-mode');
            $(".btn-toparrow").removeClass('-off');
        } else {
            $(".btn-list").removeClass('-ts-mode');
            $(".btn-toparrow").addClass('-off');
        }

        if (num < 85 ) {
            $("#listbtn").addClass("-fixed");
        } else if ( 90 < num ) {
            $("#listbtn").removeClass("-fixed");
        }
    }

    $(window).resize(tabelePDResize);
    $(window).resize(listbtnHandle);
    $(window).scroll(listbtnHandle);

    tabelePDResize();
    listbtnHandle();
})

//퍼블확인용 (팝업)
// $(window).load(function() {
//     var winH = $(window).height();
//     var popH = $('.pop-area').outerHeight();

//     if (popH >= winH) {
//         $('.pop-area').addClass('scroll');
//     } else {
//         $('.pop-area').removeClass('scroll');
//     }
// });

// 21.11.24 포커스 이동
$(window).on("click", function(e) {
    let focus = e.target;

    if ( $(focus).is('.focus-btn1')) {
        $('.focus1_pop').find('.btns-wrap > .btns').on("click", function() {
            $(focus).focus();
        })
    }
})

// 키보드 엔터
$(window).on("keyup", function(e) {
    if ( e.keyCode  === 13 ) {
        let curr = e.target;

        if ( $(curr).is(".keyEnter") ) {
            $(curr).trigger("click");
        }
    }
});

// 화면변화감지
$( window ).resize(function() {
    $('.nav_list > li > ul').hide();
    $('.nav_list_bg').hide();
});

/* ESC 키 메뉴닫기*/
$(document).keydown(function(e){
    //keyCode 구 브라우저, which 현재 브라우저
    var code = e.keyCode || e.which;
    if (code == 27) { // 27은 ESC 키번호
        $("#header .menu-toggle a").removeClass("active").html('모든 메뉴 열기');
        $("#header .all-sec").fadeOut(200);
        $('body').removeClass('back_scroll_lock');
    }
});
/* 메뉴 이외 클릭 시 메뉴창 닫기*/
$(window).click(function(e){
    if($(e.target).parents('#header').length < 1){
        $("#header .menu-toggle a").removeClass("active").html('모든 메뉴 열기');
        $("#header .all-sec").fadeOut(200);
        $('body').removeClass('back_scroll_lock');
    }
});

