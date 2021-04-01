function oWDL(objeto){window.open(objeto.attr('data-piolink'));}
jQuery('[data-piolink]').click(function(event){oWDL(jQuery(this));event.preventDefault();});function getSelectionText(){var text="";if(window.getSelection){text=window.getSelection().toString();}else if(document.selection&&document.selection.type!="Control"){text=document.selection.createRange().text;}
return text;}
jQuery(document).ready(function(e){if(!(typeof activate_selector==='undefined')){jQuery('[id*="post-"], [class*="post-"]').mouseup(function(e){texto=getSelectionText();if(texto!='')
{creaPioton(e,texto);}});jQuery('[id*="post-"], [class*="post-"]').mousedown(function(e){if(window.getSelection){if(window.getSelection().empty){window.getSelection().empty();}else if(window.getSelection().removeAllRanges){window.getSelection().removeAllRanges();}}else if(document.selection){document.selection.empty();}
pioboton=document.getElementById('pioton');if(pioboton)pioboton.remove();});}});function creaPioton(e,texto)
{var coords=getSelectionCoords();var x=eval(coords.x+30)+'px';var y=eval(coords.y-50)+'px';var div=document.createElement('div');div.id='pioton';div.style.position='fixed';div.style.left=x;div.style.top=y;div.innerHTML=TuitLink(texto)+'&nbsp;'+FaceLink(texto);document.body.appendChild(div);}
function TuitLink(texto){dispo=270-pioselector_via.length-26;if(texto.length>dispo)
{texto=texto.substring(0,dispo-4)+'...';}
texto='"'+texto+'" '+pioselector_via+' '+window.location.href;link='<a href="http://www.twitter.com/intent/tweet/?text='+encodeURIComponent(texto)+'" target="_blank"><i class="fa fa-twitter"></i></a>';return link;}
function FaceLink(texto){link='<a href="https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(window.location.href)+'&quote='+encodeURIComponent(texto)+'" target="_blank"><i class="fa fa-facebook"></i></a>';return link;}
if('true'==get_url_parameter('analycome')){if(typeof(ga)!=="undefined"){ga('send','event','User Interact','Comment sent',get_url_comment_id(),1,{'nonInteraction':1});}
if(typeof(_gaq)!=="undefined"){_gaq.push(['_trackEvent','User Interact','Comment sent',get_url_comment_id(),1,true]);}}
function get_url_comment_id()
{var url=window.location+" ";var posicion=url.indexOf('#comment');var commentid=url.substring(posicion,url.length);return commentid;}
function get_url_parameter(param_name){var page_url=window.location.search.substring(1);var url_variables=page_url.split('&');for(var i=0;i<url_variables.length;i++){var curr_param_name=url_variables[i].split('=');if(curr_param_name[0]==param_name){return curr_param_name[1];}}}
function getSelectionCoords(win){win=win||window;var doc=win.document;var sel=doc.selection,range,rects,rect;var x=0,y=0;if(sel){if(sel.type!="Control"){range=sel.createRange();range.collapse(true);x=range.boundingLeft;y=range.boundingTop;}}else if(win.getSelection){sel=win.getSelection();if(sel.rangeCount){range=sel.getRangeAt(0).cloneRange();if(range.getClientRects){range.collapse(true);rects=range.getClientRects();if(rects.length>0){rect=rects[0];}
x=rect.left;y=rect.top;}
if(x==0&&y==0){var span=doc.createElement("span");if(span.getClientRects){span.appendChild(doc.createTextNode("\u200b"));range.insertNode(span);rect=span.getClientRects()[0];x=rect.left;y=rect.top;var spanParent=span.parentNode;spanParent.removeChild(span);spanParent.normalize();}}}}
return{x:x,y:y};}