!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.d(t,"a",(function(){return l}));var s,r,a,l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.config=i({backscroll:!0,linkAttributeName:"data-hystmodal",closeOnOverlay:!0,closeOnEsc:!0,closeOnButton:!0,waitTransitions:!1,catchFocus:!0,fixedSelectors:"*[data-hystfixed]",beforeOpen:function(){},afterClose:function(){}},t),this.config.linkAttributeName&&this.init(),this._closeAfterTransition=this._closeAfterTransition.bind(this)}var t,n,s;return t=e,(n=[{key:"init",value:function(){this.isOpened=!1,this.openedWindow=!1,this.starter=!1,this._nextWindows=!1,this._scrollPosition=0,this._reopenTrigger=!1,this._overlayChecker=!1,this._isMoved=!1,this._focusElements=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],this._modalBlock=!1,e._shadow||(e._shadow=document.createElement("button"),e._shadow.classList.add("hystmodal__shadow"),document.body.appendChild(e._shadow)),this.eventsFeeler()}},{key:"eventsFeeler",value:function(){document.addEventListener("click",function(e){var t=e.target.closest("["+this.config.linkAttributeName+"]");if(!this._isMoved&&t){e.preventDefault(),this.starter=t;var n=this.starter.getAttribute(this.config.linkAttributeName);return this._nextWindows=document.querySelector(n),void this.open()}this.config.closeOnButton&&e.target.closest("[data-hystclose]")&&this.close()}.bind(this)),this.config.closeOnOverlay&&(document.addEventListener("mousedown",function(e){!this._isMoved&&e.target instanceof Element&&!e.target.classList.contains("hystmodal__wrap")||(this._overlayChecker=!0)}.bind(this)),document.addEventListener("mouseup",function(e){if(!this._isMoved&&e.target instanceof Element&&this._overlayChecker&&e.target.classList.contains("hystmodal__wrap"))return e.preventDefault(),this._overlayChecker,void this.close();this._overlayChecker=!1}.bind(this))),window.addEventListener("keydown",function(e){if(!this._isMoved&&this.config.closeOnEsc&&27==e.which&&this.isOpened)return e.preventDefault(),void this.close();!this._isMoved&&this.config.catchFocus&&9==e.which&&this.isOpened&&this.focusCatcher(e)}.bind(this))}},{key:"open",value:function(t){if(t&&(this._nextWindows="string"==typeof t?document.querySelector(t):t),this._nextWindows){if(this.isOpened)return this._reopenTrigger=!0,void this.close();this.openedWindow=this._nextWindows,this._modalBlock=this.openedWindow.querySelector(".hystmodal__window"),this.config.beforeOpen(this),this._bodyScrollControl(),e._shadow.classList.add("hystmodal__shadow--show"),this.openedWindow.classList.add("hystmodal--active"),this.openedWindow.setAttribute("aria-hidden","false"),this.config.catchFocus&&this.focusContol(),this.isOpened=!0}else console.log("Warinig: hustModal selector is not found")}},{key:"close",value:function(){this.isOpened&&(this.config.waitTransitions?(this.openedWindow.classList.add("hystmodal--moved"),this._isMoved=!0,this.openedWindow.addEventListener("transitionend",this._closeAfterTransition),this.openedWindow.classList.remove("hystmodal--active")):(this.openedWindow.classList.remove("hystmodal--active"),this._closeAfterTransition()))}},{key:"_closeAfterTransition",value:function(){this.openedWindow.classList.remove("hystmodal--moved"),this.openedWindow.removeEventListener("transitionend",this._closeAfterTransition),this._isMoved=!1,e._shadow.classList.remove("hystmodal__shadow--show"),this.openedWindow.setAttribute("aria-hidden","true"),this.config.catchFocus&&this.focusContol(),this._bodyScrollControl(),this.isOpened=!1,this.openedWindow.scrollTop=0,this.config.afterClose(this),this._reopenTrigger&&(this._reopenTrigger=!1,this.open())}},{key:"focusContol",value:function(){var e=this.openedWindow.querySelectorAll(this._focusElements);this.isOpened&&this.starter?this.starter.focus():e.length&&e[0].focus()}},{key:"focusCatcher",value:function(e){var t=this.openedWindow.querySelectorAll(this._focusElements),n=Array.prototype.slice.call(t);if(this.openedWindow.contains(document.activeElement)){var i=n.indexOf(document.activeElement);console.log(i),e.shiftKey&&0===i&&(n[n.length-1].focus(),e.preventDefault()),e.shiftKey||i!==n.length-1||(n[0].focus(),e.preventDefault())}else n[0].focus(),e.preventDefault()}},{key:"_bodyScrollControl",value:function(){if(this.config.backscroll){var e=Array.prototype.slice.call(document.querySelectorAll(this.config.fixedSelectors)),t=document.documentElement;if(!0===this.isOpened)return t.classList.remove("hystmodal__opened"),t.style.marginRight="",e.map((function(e){e.style.marginRight=""})),window.scrollTo(0,this._scrollPosition),void(t.style.top="");this._scrollPosition=window.pageYOffset;var n=window.innerWidth-t.clientWidth;t.style.top=-this._scrollPosition+"px",n&&(t.style.marginRight=n+"px",e.map((function(e){e.style.marginRight=parseInt(getComputedStyle(e).marginRight)+n+"px"}))),t.classList.add("hystmodal__opened")}}}])&&o(t.prototype,n),s&&o(t,s),e}();a=!1,(r="_shadow")in(s=l)?Object.defineProperty(s,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[r]=a},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0);n(3),n(4);e.HystModal=t.a}.call(this,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})},function(e,t,n){}]);
let lngSelect = document.querySelector('select');

let x, y, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom_select");
l = x.length;
for (y = 0; y < l; y++) {
  selElmnt = x[y].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select_selected");
  switch (localStorage.getItem("lang")) {
		case "en": 
			a.innerHTML = "ENGLISH";
			break;
		case "cn": 
			a.innerHTML = "简体中文";
			break;
		default :
			a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
			break;
  }
  x[y].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select_items select_hide");
  for (j = 0; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
	c.classList.remove("same_as_selected")
	switch (localStorage.getItem("lang")){
		case "en": 
			if (c.innerHTML == "ENGLISH") {
				c.classList.add("same_as_selected");
				break
			} else break;
		case "cn": 
			if (c.innerHTML == "简体中文") {
				c.classList.add("same_as_selected");
				break
			} else break;
	}
    c.addEventListener("click", function(e) {
        let y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
			switch (h.innerHTML) {
				case "ENGLISH": 
					lngSelect.value = "en";
					localStorage.setItem("lang", lngSelect.value)
					break;
				case "简体中文": 
					lngSelect.value = "cn"; 
					localStorage.setItem("lang", lngSelect.value) 
					break;
			}
            y = this.parentNode.getElementsByClassName("same_as_selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same_as_selected");
			location.reload();
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[y].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select_hide");
    this.classList.toggle("select_arrow_active");
  });
}

function closeAllSelect(elmnt) {
  let x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select_items");
  y = document.getElementsByClassName("select_selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select_arrow_active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select_hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);

const queryParams = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop) => searchParams.get(prop),
});

$(document).ready(function () {
	$('.menu-opener').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('burger')
	});

	$('.slider_item').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="left"></button>',
		nextArrow: '<button type="button" class="right"></button>',
		dots: true,
		infinite: false,
		centerMode: true,
		variableWidth: true,
		customPaging: function (slider, i) {
			return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '<i class="fa fa-sort-asc"></i></button>';
		},
	});

	$('.slider_item').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		document.querySelector('.slick-dots').scroll({
			left: nextSlide*$('.slick-active').width(),
			behavior: 'smooth'
		});
	});

	const baseUrl = "https://dev-web.dev.primex.network";
	const referalUrl = `${baseUrl}/referral?refId=${queryParams.refId}`;
	const typeFormUrl = `https://primexfinance.typeform.com/to/UDnZxL8x`;
});

const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
});

function findUtmInURL(url) {
	if (url.search.includes('utm_source=test_source&utm_medium=test_medium&utm_campaign=test_campaign')) {
		$('.hero_social_link')[3].href = "https://discord.gg/yzPydeXGNc"
	}
}

findUtmInURL(window.location)

function scrollAnim() {
	var wt = $(window).scrollTop();
	const wh = $(window).height();
	const etForm = $('.partners_form').offset().top;
	const ehForm = $('.partners_form').outerHeight();
	if (wt + wh >= etForm + 200 && ehForm + etForm > wt + 200) {
		$('.et_pb_section').addClass('color-active');
	} else {
		$('.et_pb_section').removeClass('color-active');
	}
	if (wt + wh >= etForm && ehForm / 2 + etForm > wt + wh / 2) {
		let x = 1 + (wt - (ehForm + etForm) + 1500) / 7000;

		$('.partners_form').css('transform', 'scale3d(' + x + ', ' + x + ',' + x + ')');
	} else if (wt + wh >= etForm + ehForm / 2 && ehForm / 2 + etForm < wt + wh / 2 && ehForm + etForm > wt) {
		let y = 1 + ((ehForm + etForm) - wt) / 7000;

		$('.partners_form').css('transform', 'scale3d(' + y + ', ' + y + ',' + y + ')');
	} else {
		$('.partners_form').css('transform', 'scale3d(1.000, 1.000, 1.000)');
	}


	const animItems = $('.animation_item');

	if (animItems.length > 0) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemH = animItem.offsetHeight;
			const animItemTop = getOffset(animItem).top;
			const animStart = 4;

			let animItemPoint = wh - animItemH / animStart;
			if (animItemH > wt) {
				animItemPoint = wh - wh / animStart;
			}

			if (wt > animItemTop - animItemPoint && wt < animItemTop + animItemH) {
				animItem.classList.add('active');
			}

		}
	}
	function getOffset(el) {
		const rect = el.getBoundingClientRect();
		return { left: rect.left + window.scrollX, top: rect.top + window.scrollY };
	}


	var top = window.pageYOffset;
	const layers = $(".parallax__layer");

	layers.each(function () {
		const layerH = $(this).offset().top;
		var speed = $(this).attr('data-speed');
		var yPos = ((top - layerH) * speed / 100);
		if (top + wh + 400 > layerH) {
			$(this).attr('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
		} else {
			$(this).attr('style', 'transform: translate3d(0px, 0pxpx, 0px)');
		}

	});

	function formCallback(event){
		event.preventDefault();
		$.ajax({
			url: "https://finance.us6.list-manage.com/subscribe/post-json?u=ecc938fcdb307093d763fee6f&amp;id=3ac98a7125&c=?",
			data: { EMAIL: event.target[0].value },
			success: ({ result }) => {
				if(result === "success") {
					$('#mc-embedded-subscribe-form1,#mc-embedded-subscribe-form').addClass('hidden')
					$('.subscribing-info').removeClass('hidden')
				}
				if(result === 'error') {
					event.target[0].classList.add('invalid_input')
				}
			},
			dataType: 'jsonp',
			error: () => {
				event.target[0].classList.add('invalid_input')
			}
		});
	}

	$('#mc-embedded-subscribe-form1').submit(formCallback);
	$('#mc-embedded-subscribe-form').submit(formCallback);

	const formInputs = $('.footer_form_item_input,.partners_form_item_input')

	formInputs.keypress(() => {
		formInputs.removeClass('invalid_input')
	})
}

scrollAnim();
$(window).on('scroll', scrollAnim);

let acc = document.getElementsByClassName("vac_btn");
let vac_card = document.getElementsByClassName("vacancy_card");
let i;
for (i = 0;i< acc.length;i++) {
	vac_card[i].addEventListener("click", function(){
		this.classList.toggle("vac_active");
	});
}
