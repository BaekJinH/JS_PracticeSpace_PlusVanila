(function($){
	$.fn.enter = function(handler){
		return this.bind("keyup",function(e){
			if(e.which == 13 && !e.shiftKey && !e.ctrlKey) {
				e.preventDefault();
				if(handler){
					$(this).bind("enter", handler);
					$(this).trigger("enter");
					$(this).unbind("enter");
				}
			}
		});
	};

	$.isMobile = function() {
		var UserAgent = navigator.userAgent;

	    if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
			return true;
		} else {
			return false;
		}
	}

	$.isBlank = function(str) {
		if (str == undefined) {
			return true;
		}
		return (!str || $.trim(str) === "");
	};

	$.isNotBlank = function(str) {
		return !$.isBlank(str);
	}

})(jQuery);



String.prototype.trim = function(str) {
    str = this != window ? this : str;
    return str.replace(/^\s+/g, '').replace(/\s+$/g, '');
};

String.prototype.byteLength = function(str) {
    str = this != window ? this : str;
    var size = 0;
    for ( var i = 0; i < str.length; i++) {
        size++;
        if (44032 <= str.charCodeAt(i) && str.charCodeAt(i) <= 55203) {
            size++;
        }
        if (12593 <= str.charCodeAt(i) && str.charCodeAt(i) <= 12686) {
            size++;
        }
    }
    return size;
};

String.prototype.replaceAll = function(str1, str2) {
    var temp_str = "";
    var temp_trim = this.replace(/(^\s*)|(\s*$)/g, "");
    if (temp_trim && str1 != str2) {
        temp_str = temp_trim;
        while (temp_str.indexOf(str1) > -1)
            temp_str = temp_str.replace(str1, str2);
    }
    return temp_str;
};

String.prototype.hasFinalConsonant = function(str) {
    if (str == null || str == "")
        return false;
    str = this != window ? this : str;
    var strTemp = str.substr(str.length - 1);
    return ((strTemp.charCodeAt(0) - 16) % 28 != 0);
};

String.prototype.lpad = function() {
    var args = arguments;
    var len = args[0];

    if (args.length == 1)
        padStr = " ";
    else
        padStr = args[1];
    var returnString = "";
    var padCnt = Number(len) - String(this).length;
    for ( var i = 0; i < padCnt; i++)
        returnString += String(padStr);
    returnString += this;
    return returnString.substring(returnString.length - len);
};

String.prototype.rpad = function() {
    var args = arguments;
    var totalLength = args[0];

    if (args.length == 1)
        paddingChar = " ";
    else
        paddingChar = args[1];
    var returnString = "";
    var padCnt = Number(totalLength) - String(this).length;
    for ( var i = 0; i < padCnt; i++)
        returnString += String(paddingChar);
    returnString = this + returnString;
    return returnString.substring(0, totalLength);
};

String.prototype.convertQuotes = function() {

    var str = String(this);
    if (str) {
        str = str.replaceAll("`", "&#39;");
        str = str.replaceAll("\'", "&#39;");
        str = str.replaceAll("\"", "&#34;");
    }
    return str;
};

Number.prototype.zpad = function(len) {
	return this.toString().lpad(len, "0");
}

Array.prototype.containsValue = function(compareValue) {
    for ( var i = 0; i < this.length; i++) {
        if (this[i] == compareValue)
            return true;
    }
    return false;
};

/**
 * var d = new Date();
 * alert(d.format("yyyy/MM/dd HH:mm:ss a/p (E)"));
 *
 * @param fmt
 * @returns
 */
Date.prototype.format = function(fmt) {
	if (!this.valueOf()) return "";

	var weekName = ["일","월","화","수","목","금","토"];
	var d = this;
	var h = 0;
	return fmt.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p|A\/P)/gi,function($1){
		switch($1) {
		case "yyyy": return d.getFullYear();
		case "yy": return (d.getFullYear() % 1000).zpad(2);
		case "MM": return (d.getMonth()+1).zpad(2);
		case "dd": return d.getDate().zpad(2);
		case "E": return weekName[d.getDay()];
		case "HH": return d.getHours().zpad(2);
		case "hh": return ((h = d.getHours() % 12) ? h : 12).zpad(2);
		case "mm": return d.getMinutes().zpad(2);
		case "ss": return d.getSeconds().zpad(2);
		case "a/p": return d.getHours() < 12 ? "am" : "pm";
		case "A/P": return d.getHours() < 12 ? "AM" : "PM";
		default: return $1;
		}
	});
}

//----------------------------------------------------------------------------------------------------------------------
// Window Onload 처리
//----------------------------------------------------------------------------------------------------------------------
$(window).ready(function(){

    /**
     * Ajax 기본설정
     */
    $.ajaxSetup({
        headers: {
            'ClientInfo': 'PATRICK'
        },
        // Added by yym
        error: function(xhr, textStatus){
        	cfn_ajaxResponseCheck(xhr, true);
        },
        // Added by yym. jquery.fileupload.js 때문에 생긴 ...
		converters: {
			'iframe json':function(iframe){
				var result = iframe && $.parseJSON($(iframe[0].body).text());
				if (result.httpStatus && result.httpStatus != 200) {
					throw result;
				}
				else if ($.isArray(result) && result.length > 0 && result[0].httpStatus && result[0].httpStatus != 200) {
					var message = [];
                    $.each(result, function(i) {
                        if(this.serviceMessage) {
                            message.push(this.serviceMessage);
                        }
                    });
                    var msg = message.join('\n');
                    var status = result[0].httpStatus;
                    throw {serviceMessage: msg, httpStatus: status};
				}
				return result;
			}
		}
    });

    $.extend(true, $.ajaxOptions, {
        arrValJoin: false,
        validParam: {
            com: function(param) {
                return true;
            },
            biz: function(param) {
                return true;
            }
        },
        beforeEvent: {
            com: function(xhr, settings) {
            },
            biz: function(xhr, settings) {
            }
        },
        completeEvent: {
            com: function(xhr, settings, messages) {
            },
            biz: function(xhr, settings, messages) {
            }
        }
    });

    /* <number 타입기본설정>
     * format
     *  - #: 값이 0일때 빈값으로 설정
     *  - 0: 값이 0일때 0으로 설정
     * negative
     *  - true/false: 음수입력여부
     */
    $.extend(true, $.numberOptions, {
        number: {
            type: 'number',
            format: '#,##0.###',
            negative: false,
            select: true
        },
        integer: {
            type: 'integer',
            format: '#,###',
            negative: true,
            select: true
        },
        decimal: {
            type: 'decimal',
            format: '#,###.##',
            negative: true,
            select: true
        },
        currency: {
            type: 'currency',
            format: '#,##0',
            negative: true,
            select: true
        }
    });
});


var component = {};

component.submit = function(options){
	var opt = $.extend({
		id: '__myform',
		target: null,
		url: '',
		method: 'post',
		data : {}
	}, options);

	var data = component.removeEmptyJsonKey(opt.data);
	opt.param = data;
	opt.action = opt.url;
	options = opt;

    var formId = options.id;
    var form = $('form[id=' + formId + ']');

    if (form.length == 0) {
        form = $(document.createElement('form'))
            .attr('id', formId)
            .attr('name', formId)
            .attr('action', options.action)
            .attr('method', options.method)
            .attr('target', options.target)
            .hide();
        $('body').append(form);
    } else {
        form.attr('action', options.action)
            .attr('method', options.method)
            .attr('target', options.target);
    }

    form.empty();

    var param = options.param;
    if($.isArray(param)) {
        $.each(param, function() {
            $('<input>').attr({type:'hidden', name:this.name, value:this.value}).appendTo(form);
        });
    }
    else {
        for(var name in param) {
            $('<input>').attr({type:'hidden', name:name, value:param[name]}).appendTo(form);
        }
    }

    form.submit();
}


component.removeEmptyJsonKey = function(jsonObj) {
	var obj = $.extend({},jsonObj);
	return $.each(obj, function(key, value){
		if (value === "" || value === null) {
			delete obj[key];
		}
		else if (Object.prototype.toString.call(value) === '[object Object]') {
			component.removeEmptyJsonKey(value);
		}
		else if (Array.isArray(value)) {
			value.forEach(function(el){
				component.removeEmptyJsonKey(el);
			});
		}
	});
};

component.log = function() {
	if (console) {
		if (console.log.apply) {
			console.log.apply(console, arguments);
		} else {
			for (var i = 0; i < arguments.length; i++) {
				console.log(arguments[i]);
			}
		}
	}
};

var blockUI_cnt = 0;
component.blockUI = function() {
	blockUI_cnt++;
	if(blockUI_cnt <= 0) {
		blockUI_cnt = 1;
	}
	$.blockUI({ message: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>' });
	//component.log("blockUI_cnt=" + blockUI_cnt);
}

component.unblockUI = function() {
	blockUI_cnt--;
	if (blockUI_cnt <= 0) {
		blockUI_cnt = 0;
		$.unblockUI();
	}
	//component.log("blockUI_cnt=" + blockUI_cnt);
}

component.toJson = function($outline) {
    var o = {};
    var a = $("*", $outline).serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });

    var selectboxes = $("select", $outline);
    $.each(selectboxes, function(idx, item){
    	var name = $(item).attr("name");
    	var values = component.select.selectedData($(item));
    	o[name] = values;
    });
    return o;
};

component.toFormData = function($outline) {

}

component.param = function($outline) {
	return $.param(component.toJson($outline), true);
}

component.get = function($outline, options){
	if (arguments.length == 1) {
		options = $outline;
		$outline = $();
	}

	var opt = $.extend({
		addedData: {},
		data: {},
		url: "",
		cache: false,
		success: function(data, status, xhr) {
		}
	}, options);

	var data = component.toJson($outline);
	data = $.extend(data, opt.addedData);
	data = $.extend(data, opt.data);
	data = component.removeEmptyJsonKey(data);
	opt.data = $.param(data,true);
	opt = $.extend( opt, {
		type: "get",
        beforeSend: function(xhr, settings) {
        	$(".dev-error").removeClass("on");
        	component.blockUI();
        },
        complete: function(xhr, status) {
        	component.unblockUI();
        },
        error: function(xhr, status) {
        	component.checkAjaxError(xhr, status);
        }
	});
    $.ajax(opt);
};

/**
 * $outline 내부의 값을 post submit을 한다.
 */
component.post = function($outline, options){
	if (arguments.length == 1) {
		options = $outline;
		$outline = $();
	}

	var opt = $.extend({
		addedData: {},
		data: {},
		url: "",
		cache: false,
		success: function(data, status, xhr) {
		}
	}, options);

	var data = component.toJson($outline);
	data = $.extend(data, opt.addedData);
	data = $.extend(data, opt.data);
	data = component.removeEmptyJsonKey(data);
	opt.data = $.param(data,true);
	opt = $.extend( opt, {
		type: "post",
        beforeSend: function(xhr, settings) {
        	$(".dev-error").removeClass("on");
        	component.blockUI();
        },
        complete: function(xhr, status) {
        	component.unblockUI();
        },
        error: function(xhr, status) {
        	component.checkAjaxError(xhr, status);
        }
	});
    $.ajax(opt);
};

component.checkAjaxError = function(xhr, status) {
	var jsonData = null;
	try {
		jsonData = $.parseJSON(xhr.responseText);
	} catch (e) {
		return;
	}

	if ($.isArray(jsonData)) {
		for (var i = 0; i < jsonData.length; i++) {
			if ($.isBlank(jsonData[i].messagePositionCode)) {
				$("." + jsonData[i].serviceMessage).addClass("on");
			}
			else {
				$("." + jsonData[i].messagePositionCode).text(jsonData[i].serviceMessage);
				$("." + jsonData[i].messagePositionCode).addClass("on");
			}
		}
	}
	else {
		cfn_ajaxResponseCheck(xhr, true);
	}
}

/**
 * $outline 내부의 값을 JSON으로 전송한다.
 */
component.postJson = function($outline, options){
	if (arguments.length == 1) {
		options = $outline;
		$outline = $();
	}

	var opt = $.extend({
		addedData: {},
		url: "",
		cache: false,
		success: function(data, status, xhr) {
		}
	}, options);

	var data = component.toJson($outline);
	data = $.extend(data, opt.addedData);
	data = $.extend(data, opt.data);
	data = component.removeEmptyJsonKey(data);
	opt.data = JSON.stringify(data);
	opt = $.extend( opt, {
		type: "post",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
        beforeSend: function(xhr, settings) {
        	$(".dev-error").removeClass("on");
        	component.blockUI();
        },
        complete: function(xhr, status) {
        	component.unblockUI();
        },
        error: function(xhr, status) {
        	component.checkAjaxError(xhr, status);
        }
	});
    $.ajax(opt);
};

component.getTimer = function(obj) {

	var duration = obj.duration;
	var timer, minutes, seconds, interval, endFlag;

	return {
		init : function() {
			endFlag = false;
			clearInterval(interval);
			timer = duration;
		},
		start : function() {

			this.init();

			interval = setInterval(function() {
				minutes = parseInt(timer / 60 % 60, 10);
				seconds = parseInt(timer % 60, 10);

				minutes = minutes < 10 ? "0" + minutes : minutes;
				seconds = seconds < 10 ? "0" + seconds : seconds;

				if (timer >= 0) {
					$(obj.selector).text(minutes + ":" + seconds).show();
				}

				if (timer-- < 0) {
					endFlag = true;
					timer = 0;
					clearInterval(interval);

					if (obj.endCallBack) {
						obj.endCallBack();
					}
				}

			}, 1000);
		},
		isEnd : function() {
			return endFlag;
		},
		isStart : function() {
			if('undefined' === typeof interval) {
				return false;
			} else {
				return true;
			}
		},
		destroy : function() {
			clearInterval(interval);
			$(obj.selector).hide();
		}
	}
}

component.setJsonToHtml = function(json, $outline) {
	$("[v-model], input, select, textarea", $outline).each(function(){
		var tag = this.tagName;
		var key = $(this).attr("v-model");
		if (key == null || key == "") {
			if (tag == "INPUT" || tag == "SELECT" || tag == "TEXTAREA") {
				key = $(this).attr("name");
			}
		}
		var val = json[key];
		if (tag == "INPUT") {
			var type = $(this).attr("type");
			if (type == "checkbox" || type == "radio") {
				if ($(this).val() == val)
					$(this).attr("checked", true);
				else
					$(this).attr("checked", false);
			}
			else {
				var edittype = $(this).attr("edittype");
				if (edittype == "currency" || edittype == "number") {
					$(this).val(component.numberFormat(val));
				}
				else if (val == null) {
					$(this).val("");
				}
				else {
					$(this).val(val);
				}
			}
		}
		else if (tag == "SELECT") {
			$(this).val(val);
			$(this).multiselectData(val);
		}
		else if (tag == "TEXTAREA") {
			$(this).val(val);
		}
		else {
			var type = $(this).attr("json-type");
			if (type == undefined || type.length == 0) {
				type = $(this).attr("edittype");
			}
			if (type == "currency" || type == "number") {
				$(this).text(component.numberFormat(val));
			}
			else {
				if (val == null)
					$(this).text("");
				else
					$(this).text(val);
			}
		}
	});
};

component.postMultipart = function(options){
	var opt = $.extend({
		url: "",
		data:{},
		success: function(data, status, xhr) {
		}
	}, options);

	var formData = new FormData();
	var data = $.extend({}, opt.data);
	$.each(data, function(key, value){
		if (value === "" || value === null) {
		}
		else {
			formData.append(key, value);
		}
	});
	$.ajax({
		url: opt.url,
		cache: false,
		data: formData,
		processData: false,
		contentType: false,
		type: "post",
        beforeSend: function(xhr, settings) {
        	component.blockUI();
        },
        complete: function(xhr, status) {
        	component.unblockUI();
        },
		success: function(data, status, xhr) {
			if ($.isFunction(opt.success)) {
				opt.success(data, status, xhr);
			}
		}
	});
};

component.pagination = {
	set: function($outline, options) {
		var opts = $.extend({
			page: 1,
			totalCount: 1,
			pageSize: 10,
			pageClick: function($target){
				console.log($target);
			}
		}, options);

		var pageWidth = 10;
		if (opts.pageSize == null || opts.pageSize < 1)
			opts.pageSize = 10;
		var lastPage = Math.floor(opts.totalCount / opts.pageSize);
		if (opts.totalCount % opts.pageSize > 0)
			lastPage++;
		if (opts.page > lastPage)
			opts.page = lastPage;
		else if (opts.page < 1)
			opts.page = 1;
		var beginPage = Math.floor((opts.page-1) / pageWidth) * pageWidth + 1; // 표시 시작페이지
		endPage = beginPage + 10 - 1;
		if (endPage > lastPage)
			endPage = lastPage;
		prevPage = beginPage - 1;
		if (prevPage < 1)
			prevPage = 1;
		nextPage = endPage + 1;
		if (nextPage > lastPage)
			nextPage = lastPage;

		var $pageNumber = $('<a href="javascript:;"></a>');
		var pageNavigator = "";
		var $movePage;

		for (var i = beginPage; i <= endPage; i++) {
			$movePage = $pageNumber.clone();
			if (i == opts.page) {
				$movePage.removeAttr("href");
				$outline.append($movePage.attr({"data-value": i, "title":i + "페이지(현재페이지)", "aria-disabled":"true"}).addClass("on disabled").html(i));
			}
			else {
				$outline.append($movePage.attr({"data-value": i, "title":i + "페이지", "aria-disabled":"false", "href":"javascript:;"}).html(i));
			}
		}

		//만일 페이지 단위로 이전 이후 버튼이 움직이면 아래를 푼다.
		if (opts.page > 1) {
			$outline.prepend($pageNumber.clone().attr("data-value", opts.page-1).attr("data-mobile_value", opts.page-1).addClass('navi-prev').html('이전'));
		} else {
			$outline.prepend($pageNumber.clone().addClass("disabled").addClass('navi-prev').html('이전'));
		}
		if (opts.page < lastPage) {
			$outline.append($pageNumber.clone().attr("data-value", opts.page+1).attr("data-mobile_value", opts.page+1).addClass('navi-next').html('다음'));
		} else {
			$outline.append($pageNumber.clone().addClass("disabled").addClass('navi-next').html('다음'));
		}

		//만일 10페이지 단위로 이전 이후 버튼이 움직이면 아래를 푼다.
//		if ($.isMobile()) {
//			// 이전
//			if (opts.page > 1) {
//				$outline.prepend($pageNumber.clone().attr("data-value", prevPage).attr("data-mobile_value", opts.page-1).addClass('navi-prev'));
//			} else {
//				$outline.prepend($pageNumber.clone().addClass("disabled").addClass('navi-prev'));
//			}
//		} else {
//			// 이전
//			if (prevPage > 1) {
//				$outline.prepend($pageNumber.clone().attr("data-value", prevPage).addClass('navi-prev'));
//			} else {
//				$outline.prepend($pageNumber.clone().addClass("disabled").addClass('navi-prev'));
//			}
//		}
//
//		if ($.isMobile()) {
//			// 다음
//			if (opts.page < lastPage) {
//				$outline.append($pageNumber.clone().attr("data-value", nextPage).attr("data-mobile_value", opts.page+1).addClass('navi-next'));
//			} else {
//				$outline.append($pageNumber.clone().addClass("disabled").addClass('navi-next'));
//			}
//		} else {
//			// 다음
//			if (endPage < lastPage) {
//				$outline.append($pageNumber.clone().attr("data-value", nextPage).addClass('navi-next'));
//			} else {
//				$outline.append($pageNumber.clone().addClass("disabled").addClass('navi-next'));
//			}
//		}

		// 처음
		if (opts.page == 1) {
			$outline.prepend($pageNumber.clone().addClass("disabled").addClass('navi-first').html('처음'));
		} else {
			$outline.prepend($pageNumber.clone().attr("data-value", 1).addClass('navi-first').html('처음'));
		}

		// 마지막
		if (opts.page == lastPage) {
			$outline.append($pageNumber.clone().addClass("disabled").addClass('navi-last').html('마지막'));
		} else {
			$outline.append($pageNumber.clone().attr("data-value", lastPage).addClass('navi-last').html('마지막'));
		}

		$outline.off();

		$outline.on("click",'a' ,function() {
			if ($.isFunction(opts.pageClick))
				opts.pageClick($(this));
		});

	}
};

function cfn_ajaxResponseCheck(xhr, showMsg) {

    if (xhr == null || xhr == undefined) return;

    if (xhr.readyState == 4) {
        var msgs = null;
        var errs = null;
        var xhrs = xhr.status;

        if (xhrs == 200) {
            return;
        } else if (xhrs == 400) {
        	msgs = xhr.responseText;
        } else if(xhrs == 401) {
            msgs = xhr.responseText;
            errs = null;
        } else if(xhrs == 403) {
            msgs = xhr.responseText;
            errs = '접근이 거부되었습니다.';
        } else if(xhrs == 404) {
            msgs = xhr.responseText;
            errs = '지원하지 않는 기능입니다.';
        } else if(xhrs == 500) {
            msgs = xhr.responseText;
            errs = '시스템 오류로 작업을 중단하였습니다.';
        } else if(xhrs == 502) {
            msgs = xhr.responseText;
            errs = '네트워크오류 발생';
        } else if(xhrs == 503) {
        	msgs = xhr.responseText;
            errs = 'Service Unavailable';
        } else if(xhrs >= 400) {
            msgs = xhr.responseText;
            errs = 'HttpStatus[' + xhrs + ']: 오류';
        }

        var message = [];
        var jsonData = {};
        var popupMessage = null;
        var isMoveHome = false;

        if (msgs != null && typeof msgs == 'string') {
            try {
                jsonData = $.parseJSON(msgs);

                if(typeof jsonData == 'object') {
                    if($.isArray(jsonData)) {
                        $.each(jsonData, function(i) {
                            if(this.serviceMessage) {
                                message.push(this.serviceMessage);
                            }
                        });
                    }
                    else {

                        if(jsonData.serviceMessage) {
                            // 시스템오류 메세지
                            if (errs != null) {
                                jsonData.serviceMessage = errs;
                            }

                            // 페이지메세지
                            if (jsonData.serviceMessage == "fail.common.sessionExpired") {
                            	message.push("세션이 만료되었습니다. 다시 로그인하십시오.");
                            	isMoveHome = true;
                            }
                            else if (jsonData.status == 'fatal') {
                            	message.push("시스템 오류로 작업을 중단하였습니다.");
                            }
                            else {
                                message.push(jsonData.serviceMessage);
                            }
                        }
                    }
                }

            } catch(_ex) {
	            if (xhrs == 400) {
	            	message.push("올바르지 않은 사용법 입니다.");
	            } else if(xhrs == 403) {
	            	message.push("권한이 없습니다.");
	            } else if(xhrs == 404) {
	            	message.push("지원하지 않는 기능입니다.");
	            } else if(xhrs == 500) {
	            	message.push("오류가 발생하여 작업을 중단하였습니다.");
	            }
            } finally {
                msgs = null;
                jsonData = null;
            }
        }

        if (message.length > 0) {
            if(showMsg) {
            	alert(message.join('\n'));
            	if (isMoveHome) {
            		if ($.isMobile()) {
            			setTimeout(function() {
            				document.location = "/component/login/login.do";
            			}, 5000);
                	} else {
                		document.location = "/component/login/login.do";
            		}
            	}
            }
            message = null;
        }
    }
    else {
        // 예외메시지
        if (xhr.statusText == 'timeout') {
            //alert('네트워크를 연결할 수 없습니다. \n잠시 후 다시 시도해주세요.(timeout)');
        	alert('네트워크를 연결할 수 없습니다.\n잠시 후 다시 시도해주세요.(timeout)');
        }
    }
}
