/*! Thrive Leads - The ultimate Lead Capture solution for wordpress - 2021-03-25
* https://thrivethemes.com 
* Copyright (c) 2021 * Thrive Themes */

var TL_Front=TL_Front||{},ThriveGlobal=ThriveGlobal||{$j:jQuery.noConflict()};TL_Front.add_page_css=function(a){ThriveGlobal.$j.each(a,function(a,b){if(a+="-css",b=b.replace(/^http(s)?:\/\//,"//"),-1!==b.indexOf("thrive_flat")){var c=document.createElement("div");if(c.classList.add("tve-cb"),document.body.append(c),"both"===getComputedStyle(c).clear)return void c.remove();c.remove()}ThriveGlobal.$j("#"+a).length||ThriveGlobal.$j('link[href="http:'+b+'"]').length||ThriveGlobal.$j('link[href="https:'+b+'"]').length||ThriveGlobal.$j('<link rel="stylesheet" id="'+a+'" type="text/css" href="'+b+'"/>').prependTo("head")})},TL_Front.$document=ThriveGlobal.$j(document),TL_Front.document_write=function(a){ThriveGlobal.$j("body").append(a)},TL_Front.add_head_script=function(a,b,c){var d=document.createElement("script"),e=ThriveGlobal.$j("head")[0];d.async=!0,"function"==typeof c&&(d.onload=d.onreadystatechange=c),void 0!==b&&(d.id=b),d.src=a,e.insertBefore(d,e.firstChild)},TL_Front.add_page_js=function(a,b){function c(){if(0===d)return void b();setTimeout(c,50)}"function"!=typeof b&&(b=function(){});var d=0;ThriveGlobal.$j.each(a,function(a,b){if("tve_frontend"===a&&"undefined"!=typeof TCB_Front)return!0;if(a+="-js",b&&!ThriveGlobal.$j("#"+a).length&&!ThriveGlobal.$j('script[src="'+b+'"]').length){if(d++,-1!==b.indexOf("connect.facebook.net"))return TL_Front.add_head_script(b,a,function(){d--}),!0;ThriveGlobal.$j.getScript(b,function(){d--})}}),c()},TL_Front.do_impression=function(){var a=TL_Front.impressions_data;if(void 0===a)return void console.log("No form to register impression for !");var b={security:TL_Const.security,action:TL_Const.action_impression,tl_data:a,current_screen:TL_Const.current_screen};ThriveGlobal.$j.each(TL_Const.custom_post_data,function(a,c){b[a]=c}),window.TVE_Dash&&!TVE_Dash.ajax_sent?TVE_Dash.add_load_item("tl_impression",b):ThriveGlobal.$j.post(TL_Const.ajax_url,b)},ThriveGlobal.$j(function(){function a(){var a,b,c=-1;return"Microsoft Internet Explorer"==navigator.appName?(a=navigator.userAgent,b=new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})"),null!==b.exec(a)&&(c=parseFloat(RegExp.$1))):"Netscape"==navigator.appName&&(a=navigator.userAgent,b=new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})"),null!==b.exec(a)&&(c=parseFloat(RegExp.$1))),c}function b(){function a(a){if(a.find('[data-validation="email"]').length)return a.find('[data-validation="email"]').val();var b="";return a.find("input").each(function(){if(this.name&&this.name.match(/email/i))return b=this.value,!1}),b}function b(a){var b=a.attr("id"),c=window.fluentFormVars,d=!1;return c&&c.forms&&(d=c.forms.some(function(a){return a.form_id_selector===b})),d}if(!TL_Const.forms)return!1;ThriveGlobal.$j("body").on("submit",".tve-leads-conversion-object form",function(c){var d=ThriveGlobal.$j(this),e=d.parents(".tve-leads-conversion-object").first().attr("data-tl-type"),f={};if(d.data("tve-force-submit")||d.closest(".thrv_custom_html_shortcode").length||d.data("tl-do-submit")||!e||!TL_Const.forms[e]||b(d))return!0;d.tve_form_loading(),d.find("input").each(function(){var a=ThriveGlobal.$j(this),b=a.attr("name");void 0!==b&&-1===TL_Const.ignored_fields.indexOf(b)&&(f[a.attr("name")]=a.val())});var g={security:TL_Const.security,action:TL_Const.action_conversion,type:e,tl_data:TL_Const.forms[e],custom_fields:f,email:a(d),current_screen:TL_Const.current_screen};return ThriveGlobal.$j.each(TL_Const.custom_post_data,function(a,b){g[a]=b}),ThriveGlobal.$j.ajax({url:TL_Const.ajax_url,data:g,type:"post",xhrFields:{withCredentials:!0}}).always(function(){void 0===d.attr("action")?location.reload():d.data("tve-force-submit",!0).submit()}),!1}),ThriveGlobal.$j("body").on("form_conversion.tcb",".tve-leads-conversion-object form",function(a){var b=ThriveGlobal.$j(this),c=b.parents(".tve-leads-conversion-object").first().attr("data-tl-type");if(!c||!TL_Const.hasOwnProperty("forms")||!TL_Const.forms[c])return!0;var d={type:c,tl_data:TL_Const.forms[c],current_screen:TL_Const.current_screen};ThriveGlobal.$j.each(TL_Const.custom_post_data,function(a,b){d[a]=b}),a.post_data=a.post_data||{},a.post_data.thrive_leads=d}).on("lead_conversion_success.tcb",".tve_lead_lock_shortcode form, .tve_post_lightbox form",function(a){var b=ThriveGlobal.$j(this),c=b.parents(".tve_content_lock");if(b.closest(".tve_post_lightbox").length){var d=b.closest(".tve-leads-conversion-object").attr("data-tl-type");TL_Front.parent_state&&TL_Front.parent_state.parent().hasClass("tve-leads-track-"+d)&&(c=TL_Front.parent_state.closest(".tve_content_lock"))}c.length&&c.hasClass("tve_content_lock")&&(c.removeClass("tve_lead_lock").find(".tve_lead_lock_shortcode").remove(),c.find(".tve_lead_locked_overlay").remove(),a.content_unlocked=!0)}).on("leads_states.tcb",".tve-leads-conversion-object form",function(a,b){var c=ThriveGlobal.$j(this);switch(c.find("#_form_type").val()){case"ribbon":var d=c.parents(".tve-leads-ribbon");c.parents(".tve_shortcode_editor").empty().html(b),TL_Front.open_ribbon(d);break;case"lightbox":case"tve_lead_2s_lightbox":c.parents(".tve_p_lb_control").empty().html(b);break;case"widget":case"in-content":case"post-footer":case"php-insert":c.parents(".tve_shortcode_editor").empty().html(b);break;case"slide-in":var e=c.parents(".tve-leads-slide-in");c.parents(".tve_shortcode_editor").empty().html(b),TL_Front.open_slide_in(e);break;case"screen-filler-lightbox":var f=c.parents(".tve-leads-screen-filler");c.parents(".tve_shortcode_editor").empty().html(b),TL_Front.open_screen_filler(f);break;case"scroll-mat":var d=c.parents(".tve-leads-greedy_ribbon");c.parents(".tve_shortcode_editor").empty().html(b),TL_Front.open_ribbon(d);break;case"tve_lead_shortcode":c.parents(".tve-leads-shortcode").empty().html(b);break;case"lead_generation":default:a.change_states=!1}a.change_states=!0}).on("leads_messages.tcb",".tve-leads-conversion-object form",function(a){var b=ThriveGlobal.$j(this);switch(b.find("#_form_type").val()){case"tve_lead_shortcode":a.lightbox_state&&b.parents(".tve-leads-shortcode").hide();break;case"ribbon":b.parents(".thrv-ribbon").find(".tve-ribbon-close").click();break;case"lightbox":case"tve_lead_2s_lightbox":b.parents(".tve_p_lb_content").find(".tve_p_lb_close").click(),b.parents(".tve-leads-screen-filler").find(".tve-screen-filler-close").click();break;case"slide-in":b.parents(".thrv-leads-slide-in").find(".tve-leads-close").click();break;case"screen-filler-lightbox":b.parents(".tve-leads-screen-filler").find(".tve-screen-filler-close").click();break;case"scroll-mat":b.parents(".thrv-greedy-ribbon").find(".tve_et_click").click();break;case"widget":case"in-content":case"post-footer":case"php-insert":default:b.find("input:not(:hidden)").val("")}b.parents(".tve-leads-conversion-object").find(".tve_ea_thrive_leads_form_close").click(),TL_Front.parent_state&&TL_Front.close_form(TL_Front.parent_state)}),TL_Front.$document.on("switchstate",function(a,b){b.find("script.tcb-lazyload-template").each(function(){ThriveGlobal.$j(this).replaceWith(this.innerHTML)})})}if("undefined"!=typeof TL_Const){if(ThriveGlobal.$j(".tve-leads-screen-filler iframe, .tve-leads-ribbon iframe").not(".thrv_social_default iframe").not(".tcb-dr-done").each(function(){var a=ThriveGlobal.$j(this).addClass("tcb-dr-done");a.attr("src")&&a.attr("data-src",a.attr("src")),a.attr("src","")}),"undefined"!=typeof TCB_Front&&ThriveGlobal.$j(TCB_Front).on("content_loaded.thrive",function(a,b){b.find(".tve-tl-anim").each(function(){var a=ThriveGlobal.$j(this);ThriveGlobal.$j(TL_Front).trigger("showform.thriveleads",{$target:a})})}),ThriveGlobal.$j(TL_Front).on("showform.thriveleads",function(a,b){var c,d=b.$target?b.$target:ThriveGlobal.$j("."+b.form_id);d.length&&(b.TargetEvent&&"exit"===b.TargetEvent.tve_trigger&&d.data("shown-on-exit")||(b.first&&(d=d.first()),d.attr("data-s-state")&&(d=d.closest(".tl-states-root").find('[data-state="'+d.attr("data-s-state")+'"] .tl-lb-target')),b&&b.$parentStateEl&&d.closest(".tl-style").first().data("parentStateEl",b.$parentStateEl),c=d.hasClass("tve-tl-anim")?d:d.find(".tve-tl-anim"),d.css("display",""),setTimeout(function(){c.addClass("tve-leads-triggered"),TL_Front.handle_typefocus(c,"start"),TCB_Front.postGridLayout()},0),"function"==typeof TL_Front["open_"+b.form_type]?TL_Front["open_"+b.form_type](d,b.TargetEvent):d.show(),TCB_Front.resizePageSection(),d.on("switchstate",function(a,b){b.offset().top-ThriveGlobal.$j(window).scrollTop()+b.outerHeight()<0&&ThriveGlobal.$j("html, body").animate({scrollTop:b.offset().top+"px"},50),TCB_Front.resizePageSection()}),setTimeout(function(){d.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src")&&a.attr("src",a.attr("data-src"))})},200)))}),ThriveGlobal.$j("body").on("click",".tve-ribbon-close",function(){var a=ThriveGlobal.$j(this).closest(".tve-leads-ribbon"),b=a.data("position");a.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src",a.attr("src")),a.attr("src","")}),a.removeClass("tve-leads-triggered"),"top"===b?ThriveGlobal.$j("body").animate({marginTop:0},200,function(){document.body.style.removeProperty("margin-top")}):"bottom"===b&&ThriveGlobal.$j("body").animate({marginBottom:"0px"},200,function(){document.body.style.removeProperty("margin-bottom")}),TL_Front.handle_typefocus(a,"pause"),setTimeout(function(){a.css(b,"")},400),ThriveGlobal.$j("#tve-lg-error-container").hide()}),TL_Const.ajax_load||TL_Front.do_impression(),TL_Front.ajax_load_callback=function(d){function e(a){var b=a.replace("two_step_","");ThriveGlobal.$j(".tl-2step-trigger-"+b).show()}function f(){if(!c)return void setTimeout(f,50);TCB_Front.event_triggers(ThriveGlobal.$j("body")),TCB_Front.onDOMReady(),b(),ThriveGlobal.$j(TCB_Front).trigger("tl-ajax-loaded"),TCB_Front.add_scroll_callback(function(){var a=ThriveGlobal.$j('.tve-leads-ribbon[data-position="top"]'),b=a.find(".tve_shortcode_editor"),c=a.is(":visible")&&Number(a.css("opacity")),d=c?Math.max(a.outerHeight(),b.outerHeight()):0,e=ThriveGlobal.$j('[data-elementor-type="header"] .elementor-top-section.elementor-sticky.elementor-sticky--active');e.length||(e=ThriveGlobal.$j(".she-header")),e.length&&e[0].style.setProperty("margin-top",d+"px","important")})}if(d&&d.res&&d.js&&d.html){if(TL_Front.add_page_css(d.res.css),TL_Front.add_page_css(d.res.fonts),d.html&&(d.html.widget||ThriveGlobal.$j(".tl-widget-container").remove(),ThriveGlobal.$j.each(d.html,function(a,b){if(!b)return!0;if("in_content"===a){var c="after",f=ThriveGlobal.$j(".tve-tl-cnt-wrap");f.length||(f=ThriveGlobal.$j("#tve_editor.tar-main-content"));var g=f.find("p").filter(":visible").filter(":not(.thrv_table *, form *, .tcb-post-list *)");if(0===g.length&&0==d.in_content_pos)ThriveGlobal.$j(".tve-tl-cnt-wrap").prepend(b);else{0===parseInt(d.in_content_pos)&&(d.in_content_pos=1,c="before");var h=g.eq(parseInt(d.in_content_pos)-1),i=h.closest(".thrv_text_element");i.length&&(h=i),h[c](b)}}else{var j=ThriveGlobal.$j(".tl-placeholder-f-type-"+a);if(d.js[a]&&d.js[a].content_locking){var k=j.parents(".tve_content_lock").first();if(d.js[a].has_conversion)return k.removeClass("tve_lock_hide"),!0;"tve_lock_blur"==d.js[a].lock&&k.removeClass("tve_lock_hide").addClass(d.js[a].lock)}j.replaceWith(b),"widget"===a&&ThriveGlobal.$j(".tl-widget-container").children().unwrap(),0===a.indexOf("two_step")&&e(a)}}),a()>0&&setTimeout(function(){var a="";ThriveGlobal.$j("body style.tve_custom_style").each(function(){a=this.innerText,this.innerText=a})})),d.body_end){var g=ThriveGlobal.$j(d.body_end);g.find(".tve_wistia_popover").each(function(){ThriveGlobal.$j("#"+this.id).length&&this.parentNode.removeChild(this)}),g.filter("link[href]").each(function(){ThriveGlobal.$j('link[href="'+this.getAttribute("href")+'"]').length&&(g=g.not(this))}),g.filter("script[src]").each(function(){ThriveGlobal.$j('script[src="'+this.getAttribute("src")+'"]').length&&(g=g.not(this))});try{ThriveGlobal.$j("body").append(g)}catch(a){console.log("Body append: "+a)}}void 0!==d.js.TVO_Form&&(TVO_Form=d.js.TVO_Form),TL_Front.add_page_js(d.res.js,function(){c=!0}),setTimeout(f,50),TL_Const.forms=d.js}},TL_Const.ajax_load){var c=!1,d=(ThriveGlobal.$j(".tve-leads-two-step-trigger").hide(),{tcb_js:"undefined"!=typeof TCB_Front?1:0,main_group_id:TL_Const.main_group_id,shortcode_ids:TL_Const.shortcode_ids,two_step_ids:TL_Const.two_step_ids,action:"tve_leads_ajax_load_forms",security:TL_Const.security,display_options:TL_Const.display_options,current_screen:TL_Const.current_screen});return ThriveGlobal.$j.each(TL_Const.custom_post_data,function(a,b){d[a]=b}),void(window.TVE_Dash&&!TVE_Dash.ajax_sent?ThriveGlobal.$j(document).on("tve-dash.load",function(a){TVE_Dash.add_load_item("tl_lazy_load",d,TL_Front.ajax_load_callback)}):ThriveGlobal.$j.ajax({url:TL_Const.ajax_url,type:"post",dataType:"json",data:d,xhrFields:{withCredentials:!0}}).done(TL_Front.ajax_load_callback))}b()}}),TL_Front.switch_lightbox_state=function(a,b){return a.find(".tve_p_lb_overlay").css("opacity","0.8"),a.find(".tve_p_lb_content").css("top",b.find(".tve_p_lb_content").css("top")).addClass("tve-leads-triggered"),window.tve_lb_switch_state=!0,TL_Front.open_lightbox(a.find(".tl-lb-target"))},TL_Front.close_lightbox=function(){var a=ThriveGlobal.$j("body"),b=ThriveGlobal.$j("html"),c=arguments[0]||a.data("tl-open-lightbox");c&&c.length&&(c.find(".tve-tl-anim").removeClass("tve-leads-triggered"),window.tve_lb_switch_state||(1===ThriveGlobal.$j(".tve_lb_open").length&&(a.removeClass("tve-o-hidden tve-l-open tve-hide-overflow").css("padding-right",""),b.removeClass("tve-o-hidden tve-l-open tve-hide-overflow"),c.data("doc-scroll-top")?(document.documentElement.scrollTop=c.data("doc-scroll-top"),c.data("doc-scroll-top","")):c.data("bdy-scroll-top")&&(document.body.scrollTop=c.data("bdy-scroll-top"),c.data("bdy-scroll-top",""))),b.removeClass(b.data("tl-anim-class"))),window.tve_lb_switch_state=!1,setTimeout(function(){c.addClass("tve_lb_closing"),c.removeClass("tve_lb_open tve_lb_opening tve_lb_closing tve_p_lb_background").css("display","none").find("tve_p_lb_content").trigger("tve.lightbox-close")},200),c.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src",a.attr("src")),a.attr("src","")}),TL_Front.handle_typefocus(c,"pause"),ThriveGlobal.$j("#tve-lg-error-container").hide())},TL_Front.open_lightbox=function(a,b){if(!a.hasClass("tve_lb_open")&&!a.hasClass("tve_lb_opening")){var c=window.tve_lb_switch_state;ThriveGlobal.$j.fn.thrive_iphone_placeholder&&a.find("input[placeholder]").thrive_iphone_placeholder(),TL_Front.close_lightbox(ThriveGlobal.$j(".tve_p_lb_background.tve_lb_open")),a.css({visibility:"",position:"",left:"",display:""}).parents(".tl-style").css({visibility:"",position:"",left:"",display:""});var d=ThriveGlobal.$j("body"),e=ThriveGlobal.$j("html"),f=function(){var a=ThriveGlobal.$j,b={border:"none",height:"200px",margin:"0",padding:"0",width:"200px"},c=a("<div>").css(a.extend({},b)),d=a("<div>").css(a.extend({left:"-1000px",overflow:"scroll",position:"absolute",top:"-1000px"},b)).append(c).appendTo("body").scrollLeft(1e3).scrollTop(1e3),e={height:d.offset().top-c.offset().top||0,width:d.offset().left-c.offset().left||0};return d.remove(),e}().width,g=parseInt(d.css("paddingRight")),h=ThriveGlobal.$j(".tve_p_lb_background.tve_lb_open").length;isNaN(g)&&(g=0),a.find(".tve_p_lb_close").off().on("click",function(){return TL_Front.close_lightbox(),!1}),d.off("keyup.tve_lb_close").on("keyup.tve_lb_close",function(a){if(27==a.which)return TL_Front.close_lightbox(),!1}),a.find(".tve_p_lb_overlay").off("click.tve_lb_close").on("click.tve_lb_close",function(){return TL_Front.close_lightbox(),!1}),d.data("tl-open-lightbox",a),a.addClass("tve_p_lb_background"),a.data("doc-scroll-top",document.documentElement.scrollTop),a.data("bdy-scroll-top",document.body.scrollTop),d.addClass("tve-o-hidden tve-l-open tve-hide-overflow"),e.addClass("tve-o-hidden tve-l-open tve-hide-overflow");var i=ThriveGlobal.$j(window).height(),j=i<ThriveGlobal.$j(document).height();!c&&j&&d.css("padding-right",g+f+"px"),a.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=jQuery(this);a.attr("data-src")&&a.attr("src",a.attr("data-src"))}),a.find(".thrv_responsive_video").each(function(){var a=ThriveGlobal.$j(this);TCB_Front.makeAutoplayVideo(a)});var k="";ThriveGlobal.$j.each(a.parents(".tl-states-root").attr("class").split(" "),function(a,b){if(0===b.indexOf("tl-anim"))return k=b,!1}),e.addClass(k).data("tl-anim-class",k),setTimeout(function(){function b(){var b=a.find(".tve_p_lb_content").outerHeight(!0)+2*parseInt(a.css("padding-top")),c=a.find(".tve_p_lb_content"),d=ThriveGlobal.$j(window).height(),e=(d-b)/2;a.find(".tve_p_lb_overlay").css({height:b+80+"px","min-height":d+"px"}),h?c.animate({top:e<40?40:e},100):c.css("top",(e<40?40:e)+"px"),b+40>d&&a.addClass("tve-scroll")}setTimeout(function(){a.addClass("tve_lb_opening")},0),a.find("iframe").not(".thrv_social_default iframe").each(function(){var a=ThriveGlobal.$j(this);!a.data("tve_ifr_loaded")&&a.attr("data-src")&&a.data("tve_ifr_loaded",1).attr("src",a.attr("data-src"))}),TCB_Front.resizePageSection(),b(),ThriveGlobal.$j(window).on("resize",b)},20),setTimeout(function(){a.removeClass("tve_lb_opening").addClass("tve_lb_open").find(".tve_p_lb_content").trigger("tve.lightbox-open"),ThriveGlobal.$j(window).trigger("scroll")},300),b&&b.preventDefault&&(b.preventDefault(),b.stopPropagation()),a.parents(".tl-states-root").off("switchstate").on("switchstate",function(a,b){var c=Array.prototype.slice.call(arguments,1);TL_Front.switch_lightbox_state.apply(TL_Front,c)}),b&&"exit"===b.tve_trigger&&a.data("shown-on-exit",!0)}},TL_Front.open_two_step_lightbox=TL_Front.open_lightbox,TL_Front.open_ribbon=function(a){function b(){a.addClass("tve-leads-triggered");var b=a.find(".tve_shortcode_editor"),c=b.length?b.outerHeight():0,d=a.attr("data-position")||"top";"top"===d?a.css("top",ThriveGlobal.$j("#wpadminbar").length?"32px":"0px"):"bottom"===d&&(a.css("bottom","0px"),a.css("top","auto"));var e=0,f=Math.max(a.outerHeight(),c),g=setInterval(function(){e++;var b=Math.max(a.outerHeight(),c);b==f&&10!=e||clearInterval(g),"top"===d?(ThriveGlobal.$j("body").animate({"margin-top":b+"px"},200,function(){document.body.style.setProperty("margin-top",b+"px","important")}),TCB_Front&&TCB_Front.$window&&TCB_Front.$window.trigger("scroll")):"bottom"===d&&ThriveGlobal.$j("body").animate({"margin-bottom":b+"px"},200)},100);a.off("switchstate").on("switchstate",function(a,b){var c=Array.prototype.slice.call(arguments,1);TL_Front.switch_ribbon_state.apply(TL_Front,c)})}TL_Const.forms.greedy_ribbon?(TL_Const.close_callbacks=TL_Const.close_callbacks||{},TL_Const.close_callbacks.greedy_ribbon=[b]):b()},TL_Front.switch_ribbon_state=function(a){var b=a.outerHeight(!0),c="top"===a.parent().attr("data-position")?"margin-top":"margin-bottom",d={};d[c]=b+"px",a.find(".tve-tl-anim").removeClass(function(a,b){return(b.match(/(^|\s)tl-anim-\S+/g)||[]).join(" ")}).removeClass("tve-tl-anim"),ThriveGlobal.$j("body").animate(d,200)},TL_Front.open_greedy_ribbon=function(a){var b=ThriveGlobal.$j("body"),c=ThriveGlobal.$j(window),d=b.css("position");c.scrollTop(0),b.css("position","static"),b.addClass("tve-tl-gr-anim"),a.css("top",ThriveGlobal.$j("#wpadminbar").length?"32px":"0px");var e=a.outerHeight();b[0].style.setProperty("margin-top",e+"px","important");var f=1;setTimeout(function(){ThriveGlobal.$j('.tve-leads-ribbon[data-position="top"]').removeClass("tve-leads-triggered")},50),c.scroll(function(){var g=b.hasClass("tve-tl-gr-anim");if(1===f&&g){var h=c.scrollTop();if(h>e){(a.find(".tve_ea_thrive_wistia").length||a.find(".tve_with_wistia_popover"))&&ThriveGlobal.$j(".wistia_placebo_close_button").trigger("click"),b.removeClass("tve-tl-gr-anim"),a.addClass("tve-no-animation");var i=h-e;a.removeClass("tve-leads-triggered"),a.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src",a.attr("src")),a.attr("src","")}),b.css("margin-top",""),b.css("position",d),c.scrollTop(i),a.removeClass("tve-no-animation"),f=0,TL_Front.form_closed("greedy_ribbon"),TL_Const.forms.greedy_ribbon.allow_callbacks=!1}}}),a.off("switchstate").on("switchstate",function(a,b){})},TL_Front.open_screen_filler=function(a,b){function c(a){a.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src",a.attr("src")),a.attr("src","")}),a.removeClass("tve-leads-triggered"),TL_Front.handle_typefocus(a,"pause"),ThriveGlobal.$j(document).off("keyup.close-screenfiller"),0==ThriveGlobal.$j.find(".tve-leads-ribbon").length&&ThriveGlobal.$j("body").animate({"margin-top":"0px"},200),e.removeClass(d),f.removeClass(f.data("tl-s-anim-class")),setTimeout(function(){a.css("top","").hide(),"none"===a.css("display")&&(e.removeClass(d),a.removeClass("tve-leads-triggered"))},400),a.data("doc-scroll-top")?(document.documentElement.scrollTop=a.data("doc-scroll-top"),a.data("doc-scroll-top","")):a.data("bdy-scroll-top")&&(document.body.scrollTop=a.data("bdy-scroll-top"),a.data("bdy-scroll-top","")),ThriveGlobal.$j("#tve-lg-error-container").hide()}var d="tve-so-hidden tve-sl-open tve-s-hide-overflow",e=ThriveGlobal.$j("html,body"),f=ThriveGlobal.$j("html");if(ThriveGlobal.$j.fn.thrive_iphone_placeholder&&a.find("input[placeholder]").thrive_iphone_placeholder(),a.css("top",ThriveGlobal.$j("#wpadminbar").length?"32px":"0px").css("visibility",""),!0===a.hasClass("stl-anim-slip_from_top")){var g=ThriveGlobal.$j(window).scrollTop();a.css("top",g).css("visibility","")}a.find(".tve-screen-filler-close").on("click",function(){c(a)}),a.data("doc-scroll-top",document.documentElement.scrollTop),a.data("bdy-scroll-top",document.body.scrollTop),"none"!==a.find(".thrv-leads-screen-filler.thrv_wrapper ").css("display")&&e.addClass(d);var h="";ThriveGlobal.$j.each(a.attr("class").split(" "),function(a,b){if(0===b.indexOf("stl-anim"))return h=b,!1}),f.addClass(h).data("tl-s-anim-class",h);var i=a.find("> .tl-style").hide(),j=a.find('> .tl-style[data-form-state="already_subscribed"]');j.length?j.show():i.first().show(),TL_Front.close_screen_filler=c,b&&b.preventDefault&&(b.preventDefault(),b.stopPropagation()),ThriveGlobal.$j(document).off("keyup.close-screenfiller").on("keyup.close-screenfiller",function(b){27==b.which&&c(a)}),a.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=jQuery(this);a.attr("data-src")&&a.attr("src",a.attr("data-src"))})},TL_Front.switch_slide_in_state=function(a){a.find(".tve-tl-anim").removeClass(function(a,b){return(b.match(/(^|\s)tl-anim-\S+/g)||[]).join(" ")}).removeClass("tve-tl-anim"),TL_Front.slide_in_position(a.find(".thrv-leads-slide-in"))},TL_Front.slide_in_position=function(a){var b=ThriveGlobal.$j(window),c=a.outerHeight();if(b.width()<=782||b.height()<c){a.parents(".tve-leads-slide-in").addClass("tve-lb");var d=b.height();setTimeout(function(){var b=(d-c)/2;a.closest(".tve-leads-slide-in").data("doc-scroll-top",document.documentElement.scrollTop).data("bdy-scroll-top",document.body.scrollTop),a.parents(".tve-leads-conversion-object").first().css({height:c+80+"px","min-height":d+"px"}),a.css("top",(b<40?40:b)+"px"),c+40>d&&a.parents(".tve-leads-slide-in").css("overflow-y","scroll")},0)}},TL_Front.open_slide_in=function(a,b){function c(b){b.removeClass("tve-leads-triggered"),TL_Front.handle_typefocus(b,"pause"),ThriveGlobal.$j(document).off("keyup.close-slidein"),ThriveGlobal.$j(".tve_lb_open").length||(e.removeClass(d),f.removeClass(d)),b.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src",a.attr("src")),a.attr("src","")}),ThriveGlobal.$j("#tve-lg-error-container").hide(),a.data("doc-scroll-top")?(document.documentElement.scrollTop=a.data("doc-scroll-top"),a.data("doc-scroll-top","")):a.data("bdy-scroll-top")&&(document.body.scrollTop=a.data("bdy-scroll-top"),a.data("bdy-scroll-top",""))}var d="tve-o-hidden tve-l-open tve-hide-overflow",e=ThriveGlobal.$j("body"),f=ThriveGlobal.$j("html");ThriveGlobal.$j.fn.thrive_iphone_placeholder&&a.find("input[placeholder]").thrive_iphone_placeholder(),TL_Front.slide_in_position(a.find(".thrv-leads-slide-in").filter(":visible")),a.off().on("click",".tve-leads-close",function(){c(a)}),a.find(".tve_ea_thrive_leads_form_close").on("click",function(){c(a)}),a.on("switchstate",function(a,b){var c=Array.prototype.slice.call(arguments,1);TL_Front.switch_slide_in_state.apply(TL_Front,c)}),ThriveGlobal.$j(document).off("keyup.close-slidein").on("keyup.close-slidein",function(b){27==b.which&&c(a)}),b&&b.preventDefault&&(b.preventDefault(),b.stopPropagation())},TL_Front.close_form=function(a,b,c,d){var e=ThriveGlobal.$j(a),f=e.parents(".tve-leads-triggered"),g=f.attr("data-tl-type");if(void 0===g&&f.hasClass("tve-leads-widget"))g="widget";else if(void 0===g&&f.hasClass("tve-leads-post-footer"))g="post-footer";else if(void 0===g&&f.hasClass("tve-leads-slide-in"))g="slide-in";else if(void 0===g&&f.hasClass("tve-leads-in-content"))g="in-content";else if(void 0===g&&f.hasClass("tve-leads-shortcode"))g="shortcode";else if(void 0===g&&f.hasClass("tve-leads-greedy_ribbon"))g="greedy_ribbon";else{if(void 0===g&&f.hasClass("tve_p_lb_content"))return TL_Front.close_lightbox(),!1;if(void 0===g&&f.hasClass("tve-leads-screen-filler"))return TL_Front.close_screen_filler(f),!1}switch(f.removeClass("tve-leads-triggered"),TL_Front.handle_typefocus(f,"pause"),g){case"ribbon":var h=f.find(".tve-ribbon-close");h.length||(h=jQuery('<span class="tve-ribbon-close" style="display: none"></span>').appendTo(f)),h.trigger("click"),TCB_Front&&TCB_Front.$window&&TCB_Front.$window.trigger("scroll");break;case"slide-in":f.find(".tve_ea_thrive_leads_form_close").trigger("click"),f.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src",a.attr("src")),a.attr("src","")});break;case"post-footer":case"in-content":case"shortcode":f.fadeOut(200,function(){TL_Front.form_closed(g)});break;case"widget":f.parent().slideUp(200);break;case"greedy_ribbon":var i=ThriveGlobal.$j("body"),j=ThriveGlobal.$j(window),k=i.css("margin-top");i[0].style.removeProperty("margin-top"),f.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src",a.attr("src")),a.attr("src","")}),i.css("margin-top",k),j.scrollTop(0),i.animate({"margin-top":"0px"},300,"linear",function(){TL_Front.form_closed(g)}).removeClass("tve-tl-gr-anim")}},TL_Front.form_closed=function(a){TL_Const.close_callbacks&&TL_Const.close_callbacks[a]&&ThriveGlobal.$j.each(TL_Const.close_callbacks[a],function(a,b){ThriveGlobal.$j.isFunction(b)&&b()})},TL_Front.handle_typefocus=function(a,b){a.find(".tve_typefocus").each(function(){jQuery(this).attr("data-typefocus",b)})};