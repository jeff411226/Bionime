var eipBaseOkText = 'OK';
var eipBaseCancelText = 'Cancel';
var eipBaseCloseText = 'Close';
var eipBaseDataNotComplete = 'Incomplete Data';
var eipShowUserDetailInfoTitle = 'Member Info'; 

/**
 * 
 * refer all params' key from toastr -> https://github.com/CodeSeven/toastr
 * Flowring extra key - message : message = '$string'
 * Flowring extra key - type of method : method = 'info', 'success', 'warning', 'error'
 * Flowring extra key - title : title = '$string'
 *  
 * @param param
 * 
 * @key message
 * @key method
 * @key title
 * 
 * @returns
 * 
 * simple usage ex: 
 * 		eipToast('HELLO TOAST');
 * usage with options ex:
 * 		eipToast({
 * 			message: 'HELLO TOAST',
 * 			method: 'success',
 * 			title: 'IM TITLE'
 * 		});
 * 
 */
function eipToast(param) {
	
	var id = 'fr_toast_' + new Date().getTime();
	
	var defOptions = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        timeOut: 3000,
        onShown: function() {},
        
		id: id,
		message: '',
		title: '',
		method: 'error',
		antiColor: false,
		customStyle: null,
		showConfirmButton: false,
		showCloseButton: false,
		confirmButtonIcon: 'fa-check',
		closeButtonIcon: 'fa-times',
		confirmButtonClass: 'btn-primary',
		closeButtonClass: 'btn-default',
		confirmButtonText: eipBaseOkText,
		closeButtonText: eipBaseCloseText,
		confirmButtonCallback: function() {},
		closeButtonCallback: function() {}
    };
	
	if (defOptions.method == 'normal') {
		defOptions.method = defMethod;
		isNormal = true;
	}
	
	if (typeof param === 'string' || param instanceof String) {
		eval('toastr.' + defOptions.method + '(param, defOptions.title, defOptions)');
		return;
	}
	
	defOptions = $.extend(defOptions, param);
	
	var htmlBox = '';
	if (defOptions.showConfirmButton || defOptions.showCloseButton) {
		var toastButtonView = ''
			+ '<div>'
				+ '<div class="row">'
					+ '<div class="col-md-12">'
						+ '<button type="button" style="margin-left:5px;" class="btn btn-sm pull-right toastCloseBtn">'
							+ '<i class="fa"></i>'
							+ '<span class="hidden-xs">'
								+ '<span> </span>'
								+ '<span class="btnText"></span>'
							+ '</span>'
						+ '</button>'
						+ '<button type="button" class="btn btn-sm pull-right toastConfirmBtn">'
							+ '<i class="fa"></i>'
							+ '<span class="hidden-xs">'
								+ '<span> </span>'
								+ '<span class="btnText"></span>'
							+ '</span>'
						+ '</button>'
					+ '</div>'
				+ '</div>'
			+ '</div>';
		
		var $toastButtonView = $(toastButtonView);
		$('.row', $toastButtonView).attr('id', defOptions.id);
		
		if (defOptions.showConfirmButton) {
			$('.toastConfirmBtn', $toastButtonView).addClass(defOptions.confirmButtonClass);
			$('.toastConfirmBtn i', $toastButtonView).addClass(defOptions.confirmButtonIcon);
			$('.toastConfirmBtn .btnText', $toastButtonView).html(defOptions.confirmButtonText);
		} else {
			$('.toastConfirmBtn', $toastButtonView).addClass('hide');
		}
		
		if (defOptions.showCloseButton) {
			$('.toastCloseBtn', $toastButtonView).addClass(defOptions.closeButtonClass);
			$('.toastCloseBtn i', $toastButtonView).addClass(defOptions.closeButtonIcon);
			$('.toastCloseBtn .btnText', $toastButtonView).html(defOptions.closeButtonText);
		} else {
			$('.toastCloseBtn', $toastButtonView).addClass('hide');
		}
		
		htmlBox = $toastButtonView.html();
		defOptions.message += htmlBox;
	}
	
	defOptions.onShown = function() {
		if (defOptions.showConfirmButton) {
			$('#' + defOptions.id + ' .toastConfirmBtn').on('click', function() {
				defOptions.confirmButtonCallback.call(this);
			});
		}
		
		if (defOptions.showCloseButton) {
			$('#' + defOptions.id + ' .toastCloseBtn').on('click', function() {
				defOptions.closeButtonCallback.call(this);
			});
		}
	};
	
    eval('toastr.' + defOptions.method + '(defOptions.message, defOptions.title, defOptions)');
    
    if (defOptions.antiColor) {
    	$('#' + defOptions.id).parents('.toast').addClass('fr_antiColor_toast');
    }
    if(defOptions.customStyle != null){
    	$('#' + defOptions.id).parents('.toast').addClass(defOptions.customStyle);
    }
}

/**
 * refer all params' key from sweetalert2 -> https://limonte.github.io/sweetalert2/
 * Flowring extra key - confirm function : confirmButtonCallback
 * Flowring extra key - cancel function : cancelButtonCallback
 * 
 * @param param
 * 
 * simple usage ex: 
 * 		eipAlert('HELLO SWAL');
 * usage with options ex:
 * 		eipAlert({
 * 			text: 'HELLO SWAL',
 * 			title: 'IM TITLE',
 * 			confirmButtonCallback : function() {
 * 				eipAlert('HELLO SWAL');
 * 			}
 * 		});
 */
function eipAlert(param) {
	var defOptions = {
		type: 'info',
		showButton1: false,
		showButton2: false,
		showButton3: false,
		confirmButtonIcon: 'fa-check',
		closeButtonIcon: 'fa-times',
		button1Icon: 'fa-edit',
		button2Icon: 'fa-edit',
		button3Icon: 'fa-edit',
		buttonsStyling: false,
		confirmButtonClass: 'btn btn-primary m-l-xs', 
		cancelButtonClass: 'btn btn-default m-l-xs',
		button1Class: 'btn btn-default m-l-xs',
		button2Class: 'btn btn-default m-l-xs',
		button3Class: 'btn btn-default m-l-xs',
		confirmButtonText: eipBaseOkText,
		cancelButtonText: eipBaseCancelText,
		button1Text: eipBaseOkText,
		button2Text: eipBaseOkText,
		button3Text: eipBaseOkText,
		confirmButtonCallback: function() {},
		cancelButtonCallback: function() {},
		button1Callback: function() {},
		button2Callback: function() {},
		button3Callback: function() {}
	};
	
	var confirmIconHtml = '<i class="fa ' + defOptions.confirmButtonIcon + '"></i><span class="hidden-xs"><span> </span><span>';
	var cancelIconHtml = '<i class="fa ' + defOptions.closeButtonIcon + '"></i><span class="hidden-xs"><span> </span><span>';
	var iconHtmlEnd = '</span></span>';
	
	if (typeof param === 'string' || param instanceof String) {
		defOptions.text = param;
		
		defOptions.confirmButtonText = confirmIconHtml + eipBaseOkText + iconHtmlEnd;
		
		//remove first to avoid a waning from sweetalert2
		eipAlertRemoveExtraParam(defOptions);
		
		swal(defOptions);
		return;
	}
	
	defOptions = $.extend(defOptions, param);
	
	//declar from GlobalImport.jsp again
	defOptions.confirmButtonText = confirmIconHtml + defOptions.confirmButtonText + iconHtmlEnd;
	defOptions.cancelButtonText = cancelIconHtml + defOptions.cancelButtonText + iconHtmlEnd;
	
	var buttonHtmlEnd = '</button>';
	
	var btn1IconHtml = '<button type="button" class="alertBtn alertBtn1 ' + defOptions.button1Class + (defOptions.showButton1 ? '' : ' hide') + '"><i class="fa ' + defOptions.button1Icon + '"></i><span class="hidden-xs"><span> </span><span>';
	var btn2IconHtml = '<button type="button" class="alertBtn alertBtn2 ' + defOptions.button2Class + (defOptions.showButton2 ? '' : ' hide') + '"><i class="fa ' + defOptions.button2Icon + '"></i><span class="hidden-xs"><span> </span><span>';
	var btn3IconHtml = '<button type="button" class="alertBtn alertBtn3 ' + defOptions.button2Class + (defOptions.showButton3 ? '' : ' hide') + '"><i class="fa ' + defOptions.button3Icon + '"></i><span class="hidden-xs"><span> </span><span>';
	
	var btn1html = btn1IconHtml + defOptions.button1Text + iconHtmlEnd + buttonHtmlEnd;
	var btn2html = btn2IconHtml + defOptions.button2Text + iconHtmlEnd + buttonHtmlEnd;
	var btn3html = btn3IconHtml + defOptions.button3Text + iconHtmlEnd + buttonHtmlEnd;
	
	defOptions.onOpen = function(swal) {
		$('button.alertBtn').remove();
		
		$('button.swal2-confirm').before(btn3html);
		$('button.swal2-confirm').before(btn2html);
		$('button.swal2-confirm').before(btn1html);
		
		$('.alertBtn1').off().on('click', function() {
			defOptions.button1Callback.call(this);
		});
		$('.alertBtn2').off().on('click', function() {
			defOptions.button2Callback.call(this);
		});
		$('.alertBtn3').off().on('click', function() {
			defOptions.button3Callback.call(this);
		});
	}
	
	var confirmButtonCallback = defOptions.confirmButtonCallback;
	var cancelButtonCallback = defOptions.cancelButtonCallback;
	
	//remove first to avoid a waning from sweetalert2
	eipAlertRemoveExtraParam(defOptions);
	
	swal(defOptions).then(function() {
		//confirm
		if (confirmButtonCallback != null) {
			confirmButtonCallback.call(this);
		}
	}, function(dismiss) {
		// dismiss can be 'cancel', 'overlay', 'close', and 'timer'
		//if (dismiss === 'cancel') { //do something }
		
		if (cancelButtonCallback != null) {
			cancelButtonCallback.call(this);
		}
	});
}

function eipAlertRemoveExtraParam(defOptions) {
	delete defOptions.showButton1;
	delete defOptions.showButton2;
	delete defOptions.showButton3;
	delete defOptions.confirmButtonIcon;
	delete defOptions.closeButtonIcon;
	delete defOptions.button1Icon;
	delete defOptions.button2Icon;
	delete defOptions.button3Icon;
	delete defOptions.button1Class;
	delete defOptions.button2Class;
	delete defOptions.button3Class;
	delete defOptions.button1Text;
	delete defOptions.button2Text;
	delete defOptions.button3Text;
	delete defOptions.confirmButtonCallback;
	delete defOptions.cancelButtonCallback;
	delete defOptions.button1Callback;
	delete defOptions.button2Callback;
	delete defOptions.button3Callback;
}

/**
 * @param param
 * 
 * @returns id of modal
 * 
 * usage with options ex:
 * 		$('#about').on('click', function() {
 * 			eipModal({
 * 				id: 'aboutModal',
 * 				title: 'IM TITLE',
 * 				url: 'EIP2016/login/about.jsp'
 * 			});
 * 		});
 * 
 * html sample ex:
 * 	<button class="btn btn-sm btn-link" id="about">Click</button>
 * 
 */
function eipModal(param) {
	//var clickModalButton = false;
	var id = 'fr_modal_' + new Date().getTime();
	
	var defOptions = {
		id: id,
		modalClass: '',
		modalBackdrop: true,//true\false(means no background)\"static";default is true
		sizeClass: '',
		animateClass: 'bounceInRight', // https://daneden.github.io/animate.css
		title: '',
		showTitle: true,
		showFooter: true,
		text: null,
		url: null,
		urlData: {},
		showConfirmButton: false,
		showCancelButton: true,
		showButton1: false,
		showButton2: false,
		showButton3: false,
		showButton4: false,
		showButton5: false,
		confirmButtonDismiss: true,
		closeButtonDismiss: true,
		button1Dismiss: true,
		button2Dismiss: true,
		button3Dismiss: true,
		button4Dismiss: true,
		button5Dismiss: true,
		confirmButtonIcon: 'fa-check',
		closeButtonIcon: 'fa-times',
		button1Icon: 'fa-edit',
		button2Icon: 'fa-edit',
		button3Icon: 'fa-edit',
		button4Icon: 'fa-edit',
		button5Icon: 'fa-edit',
		confirmButtonClass: 'btn-primary',
		closeButtonClass: 'btn-default',
		button1Class: 'btn-default',
		button2Class: 'btn-default',
		button3Class: 'btn-default',
		button4Class: 'btn-default',
		button5Class: 'btn-default',
		confirmButtonText: eipBaseOkText,
		closeButtonText: eipBaseCloseText,
		button1Text: eipBaseOkText,
		button2Text: eipBaseOkText,
		button3Text: eipBaseOkText,
		button4Text: eipBaseOkText,
		button5Text: eipBaseOkText,
		confirmButtonCallback: function() {},
		closeButtonCallback: function() {},
		shownModalCallback: function() {},
		closeModalCallback: function() {},
		button1Callback: function() {},
		button2Callback: function() {},
		button3Callback: function() {},
		button4Callback: function() {},
		button5Callback: function() {},
		destroy: false
	};
	
	defOptions = $.extend(defOptions, param);
	//if exist, keep modal the element, speed up the performance after secondary invoking.
	if ($('#' + defOptions.id).length) {
		$('#' + defOptions.id).modal();
		return defOptions.id;
	}
	
	var modalView = ''
		+ '<div>'
			+ '<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">'
				+ '<div class="modal-dialog">'
					+ '<div class="modal-content animated">'
						+ '<div class="modal-header">'
							+ '<button type="button" class="close" data-dismiss="modal">'
								+ '<span aria-hidden="true">&times;</span>'
								+ '<span class="sr-only"></span></button>'
							+ '</button>'
							+ '<span class="h3 modalText"></span>'
						+ '</div>'
						+ '<div class="modal-body">'
							+ '<div class="row modalTextRow">'
								+ '<div class="col-md-12">'
									+ '<div class="modalText">'
									+ '</div>'
								+ '</div>'
							+ '</div>'
							+ '<div class="row modalUrlRow">'
								+ '<div class="col-md-12">'
									+ '<div class="modalUrl">'
									+ '</div>'
								+ '</div>'
							+ '</div>'
						+ '</div>'
						+ '<div class="modal-footer">'
							+ '<button type="button" class="btn modalBtn5 hide" data-dismiss="modal">'
								+ '<i class="fa"></i>'
								+ '<span class="hidden-xs">'
									+ '<span> </span>'
									+ '<span class="btnText"></span>'
								+ '</span>'
							+ '</button>'
							+ '<button type="button" class="btn modalBtn4 hide" data-dismiss="modal">'
								+ '<i class="fa"></i>'
								+ '<span class="hidden-xs">'
									+ '<span> </span>'
									+ '<span class="btnText"></span>'
								+ '</span>'
							+ '</button>'
							+ '<button type="button" class="btn modalBtn3 hide" data-dismiss="modal">'
								+ '<i class="fa"></i>'
								+ '<span class="hidden-xs">'
									+ '<span> </span>'
									+ '<span class="btnText"></span>'
								+ '</span>'
							+ '</button>'
							+ '<button type="button" class="btn modalBtn2 hide" data-dismiss="modal">'
								+ '<i class="fa"></i>'
								+ '<span class="hidden-xs">'
									+ '<span> </span>'
									+ '<span class="btnText"></span>'
								+ '</span>'
							+ '</button>'
							+ '<button type="button" class="btn modalBtn1 hide" data-dismiss="modal">'
								+ '<i class="fa"></i>'
								+ '<span class="hidden-xs">'
									+ '<span> </span>'
									+ '<span class="btnText"></span>'
								+ '</span>'
							+ '</button>'
							+ '<button type="button" class="btn modalConfirmBtn hide" data-dismiss="modal">'
								+ '<i class="fa"></i>'
								+ '<span class="hidden-xs">'
									+ '<span> </span>'
									+ '<span class="btnText"></span>'
								+ '</span>'
							+ '</button>'
							+ '<button type="button" class="btn modalCloseBtn hide" data-dismiss="modal">'
								+ '<i class="fa"></i>'
								+ '<span class="hidden-xs">'
									+ '<span> </span>'
									+ '<span class="btnText"></span>'
								+ '</span>'
							+ '</button>'
						+ '</div>'
					+ '</div>'
				+ '</div>'
			+ '</div>'
		+ '</div>';
		
	var $modalView = $(modalView);
	$('.modal', $modalView).attr('id', defOptions.id);
	$('.modal', $modalView).addClass(defOptions.modalClass);
	$('.modal-dialog', $modalView).addClass(defOptions.sizeClass);
	
	//solve IOS call iframe in modal, view exceeds modal's width 
	if (isIOSDevice) {
		$('.modalText', $modalView).addClass("fr_ios_iframe_container");
	}
	//modify by zjr UP-1330
	if (isIOSDevice && defOptions.text != null && (jQuery.isFunction(defOptions.text) && defOptions.text.indexOf("iframe") >= 0)) {
		defOptions.animateClass = "";
	}
	
	$('.modal-content', $modalView).addClass(defOptions.animateClass);
	
	if(defOptions.showTitle) {
		$('.modal-header .modalText', $modalView).html(defOptions.title);
	} else {
		$('.modal-header', $modalView).addClass('hide');
	}
	
	if(defOptions.showFooter) {
		
		eipModalInitExtraBtn({
			modalView: $modalView,
			show: defOptions.showButton1,
			dismiss: defOptions.button1Dismiss,
			name: 'modalBtn1',
			btnClass: defOptions.button1Class,
			btnIcon: defOptions.button1Icon,
			btnText: defOptions.button1Text,
			btnCallback: defOptions.button1Callback
		});
		
		eipModalInitExtraBtn({
			modalView: $modalView,
			show: defOptions.showButton2,
			dismiss: defOptions.button2Dismiss,
			name: 'modalBtn2',
			btnClass: defOptions.button2Class,
			btnIcon: defOptions.button2Icon,
			btnText: defOptions.button2Text,
			btnCallback: defOptions.button2Callback
		});
		
		eipModalInitExtraBtn({
			modalView: $modalView,
			show: defOptions.showButton3,
			dismiss: defOptions.button3Dismiss,
			name: 'modalBtn3',
			btnClass: defOptions.button3Class,
			btnIcon: defOptions.button3Icon,
			btnText: defOptions.button3Text,
			btnCallback: defOptions.button3Callback
		});
		
		eipModalInitExtraBtn({
			modalView: $modalView,
			show: defOptions.showButton4,
			dismiss: defOptions.button4Dismiss,
			name: 'modalBtn4',
			btnClass: defOptions.button4Class,
			btnIcon: defOptions.button4Icon,
			btnText: defOptions.button4Text,
			btnCallback: defOptions.button4Callback
		});
		
		eipModalInitExtraBtn({
			modalView: $modalView,
			show: defOptions.showButton5,
			dismiss: defOptions.button5Dismiss,
			name: 'modalBtn5',
			btnClass: defOptions.button5Class,
			btnIcon: defOptions.button5Icon,
			btnText: defOptions.button5Text,
			btnCallback: defOptions.button5Callback
		});
		
		eipModalInitExtraBtn({
			modalView: $modalView,
			show: defOptions.showConfirmButton,
			dismiss: defOptions.confirmButtonDismiss,
			name: 'modalConfirmBtn',
			btnClass: defOptions.confirmButtonClass,
			btnIcon: defOptions.confirmButtonIcon,
			btnText: defOptions.confirmButtonText,
			btnCallback: defOptions.confirmButtonCallback
		});
		
		eipModalInitExtraBtn({
			modalView: $modalView,
			show: defOptions.showCancelButton,
			dismiss: defOptions.closeButtonDismiss,
			name: 'modalCloseBtn',
			btnClass: defOptions.closeButtonClass,
			btnIcon: defOptions.closeButtonIcon,
			btnText: defOptions.closeButtonText,
			btnCallback: defOptions.closeButtonCallback
		});
		
	} else {
		$('.modal-footer', $modalView).addClass('hide');
	}
	
	$('body').append($modalView);
	
	$('#' + defOptions.id).on('hidden.bs.modal', function () {
		defOptions.closeModalCallback.call(this);
		
		//check if any modal is open, fix the problem of multi modal scrolling
		if ($('.modal:visible').length) {
			$('body').addClass('modal-open');//add class to body
		}
		
		if(defOptions.destroy) {
			$('#' + defOptions.id).remove();
		}
	});
	
	$('#' + defOptions.id).on('shown.bs.modal', function () {
		defOptions.shownModalCallback.call(this);
	});
	
	//modal first
	$('#' + defOptions.id).modal({'backdrop':defOptions.modalBackdrop});
	//show content later, because it causes a bug of Tabdrop initialize while calling jQuery ajax with async which value is false .
	if (defOptions.url != null) {
		//replace the $.load because of IE cache problem
		$.ajax({
		    url: defOptions.url,
		    data: defOptions.urlData,
		    cache: false,
		    dataType: "html",
		    async: false,
		    success: function(data) {
		    	$('#' + defOptions.id + ' .modal-body .modalUrl').html(data);
		    }
		});
	} else {
		$('#' + defOptions.id + ' .modal-body .modalUrlRow').remove();
	}
	
	if (defOptions.text != null) {
		$('#' + defOptions.id + ' .modal-body .modalText').prepend(defOptions.text);
	} else {
		$('#' + defOptions.id + ' .modal-body .modalTextRow').remove();
	}
	
	return defOptions.id;
}

function eipModalInitExtraBtn(param) {
	
	var defOptions = {
			modalView: null,
			show: false,
			dismiss: true,
			name: '',
			btnClass: 'btn-default',
			btnIcon: 'fa-edit',
			btnText: eipBaseOkText,
			btnCallback: function() {}
		};
	
	defOptions = $.extend(defOptions, param);
	
	$('.' + defOptions.name, defOptions.modalView).attr('class', defOptions.name + ' btn ' + defOptions.btnClass);
	$('.' + defOptions.name + ' i', defOptions.modalView).attr('class', 'fa ' + defOptions.btnIcon);
	$('.' + defOptions.name + ' .btnText', defOptions.modalView).text(defOptions.btnText);
	
	$('.' + defOptions.name, defOptions.modalView).off('click');
	$('.' + defOptions.name, defOptions.modalView).on('click', function() {
		defOptions.btnCallback.call(this);
	});
	if (!defOptions.dismiss) {
		$('.' + defOptions.name, defOptions.modalView).removeAttr('data-dismiss');
	}
	
	if (defOptions.show) {
		$('.' + defOptions.name, defOptions.modalView).removeClass('hide');
	} else {
		$('.' + defOptions.name, defOptions.modalView).addClass('hide');
	}
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return "";
}

function ajaxPromise(url, type, data) {
	return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: type,
            dataType: "json",
            data: data == null ? '' : JSON.stringify(data),
            async: true,
            contentType: "application/json",
            success: function (resp) {
                resolve(resp);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                reject(XMLHttpRequest);
            }
        });
    });
}
