function popupOpen(o,i){$(".popup").removeClass("active").hide(),$(".header-menu").hasClass("active")||$("body").data("scroll",$(window).scrollTop()),isMobile.any()?setTimeout(function(){$("body").addClass("lock")},300):($("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock"),$(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()})),history.pushState("","","#"+o),""!=i&&null!=i&&$(".popup-"+o+" .popup-video__value").html('<iframe src="https://www.youtube.com/embed/'+i+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'),$(".popup-"+o).fadeIn(300).delay(300).addClass("active"),0<$(".popup-"+o).find(".slick-slider").length&&$(".popup-"+o).find(".slick-slider").slick("setPosition")}function openPopupById(o){$("#"+o).fadeIn(300).delay(300).addClass("active")}function popupClose(){$(".popup").removeClass("active").fadeOut(300),$(".header-menu").hasClass("active")||(isMobile.any()?($("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))):(setTimeout(function(){$("body").css({paddingRight:0}),$(".pdb").css({paddingRight:0})},200),setTimeout(function(){$("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))},200))),$(".popup-video__value").html(""),history.pushState("","",window.location.href.split("#")[0])}function ibg(){$.each($(".ibg"),function(o,i){0<$(this).find("img").length&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')})}function scrolloptions(){var o=100,i=50,e=!1;return isMobile.any()&&(o=10,i=1,e=!0),{cursorcolor:"#fff",cursorwidth:"4px",background:"",autohidemode:!0,cursoropacitymax:.4,bouncescroll:e,cursorborderradius:"0px",scrollspeed:o,mousescrollstep:i,directionlockdeadzone:0,cursorborder:"0px solid #fff"}}function scroll(){$(".scroll-body").niceScroll(".scroll-list",scrolloptions())}function tip(){$(".t,.tip").webuiPopover({placement:"top",trigger:"hover",backdrop:!1,animation:"fade",dismissible:!0,padding:!1,onShow:function(o){},onHide:function(o){}}).on("show.webui.popover hide.webui.popover",function(o){$(this).toggleClass("active")})}var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};if(isMobile.any(),location.hash){var hsh=location.hash.replace("#","");0<$(".popup-"+hsh).length?popupOpen(hsh):0<$("div."+hsh).length&&$("body,html").animate({scrollTop:$("div."+hsh).offset().top},500,function(){})}$(".wrapper").addClass("loaded");var act="click";if(isMobile.iOS())act="touchstart";$(".header-menu__icon").click(function(o){$(this).toggleClass("active"),$(".header-menu").toggleClass("active"),$(this).hasClass("active")&&$("body").data("scroll",$(window).scrollTop()),$(this).hasClass("active")||$("body,html").scrollTop(parseInt($("body").data("scroll")))}),0<$(".gallery").length&&baguetteBox.run(".gallery",{}),$(".pl").click(function(o){return popupOpen($(this).attr("href").replace("#",""),$(this).data("vid")),!1}),$(".popup-close,.popup__close").click(function(o){return popupClose(),!1}),$(".popup").click(function(o){if(!$(o.target).is(".popup>.popup-table>.cell *")||$(o.target).is(".popup-close")||$(o.target).is(".popup__close"))return popupClose(),!1}),$(document).on("keydown",function(o){27==o.which&&popupClose()}),$(".goto").click(function(){var o=$(this).attr("href").replace("#","");return $("body,html").animate({scrollTop:$("."+o).offset().top+0},500,function(){}),$(".header-menu").hasClass("active")&&($(".header-menu,.header-menu__icon").removeClass("active"),$("body").removeClass("lock")),!1}),ibg(),$(document).on("click touchstart",function(o){$(o.target).is(".select *")||$(".select").removeClass("active")}),$(window).scroll(function(){$(window).width();50<$(window).scrollTop()?$("#up").fadeIn(300):$("#up").fadeOut(300)}),$("#up").click(function(o){$("body,html").animate({scrollTop:0},300)}),$("body").on("click",".tab__navitem",function(o){var i=$(this).index();if($(this).hasClass("parent"))i=$(this).parent().index();$(this).hasClass("active")||($(this).closest(".tabs").find(".tab__navitem").removeClass("active"),$(this).addClass("active"),$(this).closest(".tabs").find(".tab__item").removeClass("active").eq(i).addClass("active"),0<$(this).closest(".tabs").find(".slick-slider").length&&$(this).closest(".tabs").find(".slick-slider").slick("setPosition"))}),$.each($(".spoller.active"),function(o,i){$(this).next().show()}),$("body").on("click",".spoller",function(o){return $(this).hasClass("mob")&&!isMobile.any()||($(this).hasClass("closeall")&&!$(this).hasClass("active")&&$.each($(this).closest(".spollers").find(".spoller"),function(o,i){$(this).removeClass("active"),$(this).next().slideUp(300)}),$(this).toggleClass("active").next().slideToggle(300,function(o,i){0<$(this).parent().find(".slick-slider").length&&$(this).parent().find(".slick-slider").slick("setPosition")})),!1}),-1!=navigator.appVersion.indexOf("Mac")||0<$(".scroll-body").length&&scroll(),0<$(".t,.tip").length&&tip();