
function gnb(event){
	var $hWrap = $("#header_wrap")
	var $header = $hWrap.children("#header")
	var $gnb = $(event);
	var gnbH = $gnb.height(); //351
	var hDep1 = $gnb.children().children("a:first").outerHeight(51); //47 1뎁스a
	var $depth2 = $gnb.children().children("ul");
	var speed = 300;
	$depth2.outerHeight( gnbH - hDep1 ); // 2뎁스 ul 높이 설정
	function gnbOpen(){
		$hWrap.addClass("open");
		//$header.height(gnbH);
		$header.stop().animate({ height : gnbH }, speed);
	}

	function gnbClose(){
		$hWrap.removeClass("open");
		//$header.height(hDep1);
		$header.stop().animate({ height : hDep1 }, speed);
	}
	$gnb.find("a").bind("focus", function(){
		gnbOpen();
	});
	$gnb.find("a:last").bind("blur", function(){
		gnbClose();
	});
	$gnb.bind("mouseover", function(){
		gnbOpen();
	});
	$gnb.bind("mouseout", function(){
		gnbClose();
	});
}

// font-size
var fSize = 13;
function FontScale(n){
	fSize = fSize + n;
		var objcon1 = document.getElementById( "contents" );
		objcon1.style.fontSize = fSize + "px";
}

function fDefault(){
	var fDefault = 12;
	var objcon2 = document.getElementById( "contents" );
	objcon2.style.fontSize = fDefault + "px";
};


// print
var initBody;
function beforePrint(){
	initBody = document.body.innerHTML;
	document.body.innerHTML = '<div id="contents">'+document.getElementById('contents').innerHTML+'</div>';
}

function afterPrint(){
	document.body.innerHTML = initBody;
}

function PagePrint(){
	window.onbeforeprint = beforePrint;
	window.onafterprint = afterPrint;
	window.print();
}

function mRollBnr(event, speed, slideSpeed){
	var $e = $(event);
	if ($e.size() == 0) return;
	var $btnToggle = $e.find(".btn_toggle a");
	var $bnrWrap = $e.find("ul");
	var $bnr = $bnrWrap.find("li");
	//var $thumOn = $bnr.children("a.on")
	var $img = $bnr.find("p")

	var bnrSize = $bnr.size();
	var frameW = $e.width();
	var speed;
	var slideSpeed;
	var onClass = "on";
	var count = 0;
	var playSrc ="../images/main/btn_play.gif";
	var stopSrc ="../images/main/btn_stop.gif";

	function init(){
		for (var i=1; i<bnrSize ; i++ ){
			$img.eq(i).css("left", frameW+"px")
		}
	}
	init();

	var play = true;
	function autoBnr(){
		play = false;

		var activeNum = $bnrWrap.find("."+onClass).index();
		count = activeNum;

		$img.eq(count).parent().removeClass(onClass).end().stop().animate({"left" : -frameW+"px"}, slideSpeed, function(){
			$(this).css({"left" : frameW})
		});

		if (count < bnrSize-1){
			count += 1;
		}else{
			count = 0;
		}
		$img.eq(count).parent().addClass(onClass).end().stop().animate({"left" : 0}, slideSpeed)

		if (!play){
			clearInterval(theAuto);
			theAuto = setInterval(autoBnr, speed);
			play = true;
		}
	}//autoBnr()

	var theAuto = setInterval(autoBnr, speed)


	var isAnimating=0;
	$bnr.children("a").click(function(){
		if(isAnimating == 1) return;
		isAnimating=1;

		if(theAuto) clearInterval(theAuto);
		$bnr.filter("."+onClass).removeClass(onClass).children("p").stop().animate({"left" : -frameW+"px"}, slideSpeed, function(){
			$(this).css("left", frameW+"px");
			isAnimating=0;
		})
		//$bnr.removeClass(onClass).find("p").css("left", frameW);
		$(this).parent().addClass(onClass).end().next().stop().animate({"left" : 0}, slideSpeed, function(){
			isAnimating=0;
		})


		$btnToggle.removeClass("stop").addClass("play");
		$btnToggle.find("img").attr({
			"src" : playSrc,
			"alt" : "play"
		})
	})

	$btnToggle.click(function(){
		if ( $(this).hasClass("stop") ){
			$(this).removeClass("stop").addClass("play");
			$(this).find("img").attr({
				"src" : playSrc,
				"alt" : "play"
			})
			if(theAuto) clearInterval(theAuto);
		}else if ( $(this).hasClass("play") ){
			$(this).removeClass("play").addClass("stop");
			$(this).find("img").attr({
				"src" : stopSrc,
				"alt" : "stop"
			})
			if(theAuto) clearInterval(theAuto);
			theAuto=setInterval(autoBnr, speed)

		}
	})
}

function mBoard(event){
	$event = $(event)
	if ($event.size() == 0) return;

	var $tabA = $event.find("h3").children("a");
	function initBoard(){
		$tabA.eq(0).parent("h3").parent("li").addClass()
			.siblings().children("ul").hide()
	}
	initBoard();
	$tabA.click(function(){
		$(this).parent("h3").parent("li").addClass("on")
			.siblings().removeClass("on")
			.children("ul").hide()
			.end().end().children("ul").show();
	})
}

function galleryView(event){
	var $gallery = $(event);
	if ( $gallery.size() == 0) return;

	var $thum = $gallery.children().children("a");

	function init(){
		$thum.next("p").hide();
		$gallery.children("li:first-child").children("a").next("p").show();
	};
	init();
	$thum.click(function(){
		$(this).parent().siblings().children("p").hide();
		$(this).next("p").show();
		return false;
	});
}

function chageFile(event){
	$event = $(event);
	if ($event.size() == 0) return;

	$event.children(".file_box").find("input:file").css("opacity","0");
	$event.children(".file_box").find("input:file").change(function(){
		var fileVal = $(this).val();
		$(this).parent().prev().val( fileVal )
	})
}

function tabList(event){
	$event = $(event);
	if ($event.size() == 0) return;

	$event.children().children("a").click(function(){
		$(this).addClass("active").parent().siblings().children("a").removeClass("active");
	})
}

function linkPage(){
	var pageUrl = document.getElementById("linkUrl");
	if (pageUrl.value == "") {
		pageUrl.focus();
	}else{
		window.parent.location.assign(pageUrl.value)
	}
}

$(document).ready(function(){
	gnb("#gnb");
	mRollBnr(".m_popzone", 4000, 800);
	mBoard(".m_board");
	galleryView(".gallery_view");
	chageFile(".file_customize");
	tabList(".l_tab");

	$("#atcSearchForm").submit(function() {
	    if ($("#q_atcSearchVal").val() == "") {
	        alert("검색어를 입력해주세요.");
	        return false;
	    }
	});

    $.ajax({
        url : "/atc/ND_visitCount.do",
        type : "POST",
        dataType: "json",
        success: function(response){
            $(".visitor").text("전체방문자 : " + response);
        },
        error : function(e){

        }
    });
})



function FaqToggleDetail (id){
	var latestToggleObj = null;
	var oObj = document.getElementById( id );

	if( this.latestToggleObj != null ){
		this.latestToggleObj.className = (this.latestToggleObj.className + "none");
	}
	if( this.latestToggleObj == oObj ){
		this.latestToggleObj = null;
		return;
	}
	this.latestToggleObj = null;

	if( oObj.className.indexOf( "none" ) != -1 ){
		oObj.className = oObj.className.replace( "none", "" );
	}else{
		oObj.className = (oObj.className + "none");
	}
	this.latestToggleObj = oObj;
}


  //-------------------------------------------------------------------------------------------------------------------//
 //----------------------------------------- Program Common JavaScript Start ----------------------------------------//
//-------------------------------------------------------------------------------------------------------------------//
function goLogout() {
	var iframe = document.createElement("iframe");
	iframe.id = "tempFrame";
	iframe.name = "tempFrame";
	iframe.title = "Temp Frame";
	iframe.style.width = "100%";
	iframe.style.height = "200px";
	iframe.style.display = "none";

	document.body.appendChild(iframe);

	window.frames["tempFrame"].name = "tempFrame";

	var form = document.createElement("form");
	form.name = "tempFrm";
	form.method="post";
	form.target = "tempFrame";
	form.action = "/administrator_room/action/member_action.asp";

	var fieldset = document.createElement("fieldset");

	var legend = document.createElement("legend");
	legend.innerHTML = "Temp Form";

	fieldset.appendChild(legend);

	var hidden = document.createElement("input");
	hidden.type = "hidden";
	hidden.name = "act";
	hidden.value = "Logout";

	fieldset.appendChild(hidden);
	form.appendChild(fieldset);
	document.body.appendChild(form);

	form.submit();
}

function goListAjax(_url, _no) {
	if(f && f.pageNo) {
		f.pageNo.value = _no;

		if(typeof(getList) == "function") getList();
	}
}

function goTwitter(title){
	 window.open("http://twitter.com/home?status="+encodeURIComponent(title) +" "+encodeURIComponent(location.href),'','');
}

function goFacebook(title){
	window.open("http://www.facebook.com/sharer.php?s=100&p[url]="+ encodeURIComponent((location.href),'','')+"&p[title]="+encodeURIComponent((title),'',''));
}

//gnb
function gnb() {
    $('.gnb').bind('mouseleave focusout', function(e) {
        $('.gnb > ul > li.active').removeClass('active');

    });

    $('.gnb > ul > li').bind('mouseover focusin', function(e) {
        $(this).addClass('active').siblings().removeClass('active').find('li.active').removeClass('active');
    }).bind('mouseleave focusout', function(e) {
    });
}

//zoom
function zoom(){
    var nowZoom = 100;
    var Browser = { a:navigator.userAgent.toLowerCase() };
        Browser = {
            ie : /*@cc_on true || @*/ false,
            ie6 : Browser.a.indexOf('msie 6') != -1,
            ie7 : Browser.a.indexOf('msie 7') != -1,
            ie8 : Browser.a.indexOf('msie 8') != -1,
            opera : !!window.opera,
            safari : Browser.a.indexOf('safari') != -1,
            safari3 : Browser.a.indexOf('applewebkit/5') != -1,
            mac : Browser.a.indexOf('mac') != -1,
            chrome : Browser.a.indexOf('chrome') != -1,
            firefox : Browser.a.indexOf('firefox') != -1
    }

    $(".js-zoomin").click(function(){
        zoomIn();
    });
    $(".js-zoomout").click(function(){
        zoomOut();
    });
    function zooms(){
        if (Browser.firefox) {
            var nowffZoom = 1 + ((nowZoom * .01)-1);
            $("body").css('-moz-transform','scale(' + nowffZoom +')');
            $("body").css('transform-origin','0 0');
        }
        else{
            document.body.style.zoom = nowZoom + '%';
        }
        if(nowZoom==70){
            alert ("30%축소 되었습니다. 더 이상 축소할 수 없습니다.");
        }

        if(nowZoom==500){
            alert ("500%확대 되었습니다. 더 이상 확대할 수 없습니다.");
        }
    }

    function zoomOut(){
        nowZoom-=10;
        if(nowZoom<70){
            alert("더이상 축소할 수 없습니다.");
            nowZoom=70;
        }
        zooms();
    }
    function zoomIn(){
        nowZoom+=10;
        if(nowZoom>150){
            alert("더이상 확대할 수 없습니다.");
            nowZoom=150;
        }
        zooms();
    }
}

jQuery(function($) {
    gnb();
    zoom();
})
  //--------------------------------------------------------------------------------------------------------------------//
 //----------------------------------------- Program Common JavaScript End ------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------//
