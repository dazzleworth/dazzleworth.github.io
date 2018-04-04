//adjust header/footer to accomodate English text

/*function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

var english = ["html_img/english/menu.png", "html_img/english/menu-1.png", "html_img/english/menu2-1.png", "html_img/english/menu2-2.png", "html_img/english/menu2-3.png", "html_img/english/menu2-4.png", "html_img/english/menu2-5.png", "html_img/english/menu2-6.png", "html_img/english/menu-2.png", "html_img/english/menu3-1.png", "html_img/english/menu3-2.png", "html_img/english/menu-3.png", "html_img/english/menu4-1.png","html_img/english/menu4-2.png", "html_img/english/menu4-3.png", "html_img/english/menu-4.png", "html_img/english/menu5-1.png", "html_img/english/menu5-2.png", "html_img/english/menu5-3.png", "html_img/english/menu-5.png", "html_img/english/menu6-1.png", "html_img/english/menu-6.png", "html_img/english/menu7-1.png", "html_img/english/menu7-2.png", "html_img/english/menu7-3.png", "html_img/english/menu7-4.png", "html_img/english/menu-7.png"];
*/

$( document ).ready(function() {
	var lang = $.cookie('langCookie');
	/*for(i = 0; i < english.length; ++i) { MM_preloadImages(english[i]); }
	adjustFooter(lang);*/
	if(lang === undefined)
		window.lang.change('en');
	
});

/*function toggleEnglish(){
	window.lang.change('en');
	adjustFooter('en');
	return false;
}

function toggleChinese() {
	window.lang.change('zh');
	menuChinese();
	adjustFooter('zh');
	return false;
}

function adjustFooter(lang) {
	if(typeof lang != 'undefined' && lang=='en')
	{
		menuEnglish();
		$("#footer .banner").css("width", "1280px");
		$("#footer .banner > .copyright").css("margin", "");
		$("#footer .banner > .footerCat").css("margin-left", "5%");
	}
	else if(typeof lang != 'undefined' && lang=='zh')
	{
		$("#footer .banner").css("width", "700px");
		$("#footer .banner > .copyright").css("margin", "0px -15%");
		$("#footer .banner > .footerCat").css("margin-left", "-11%");
	}
}

function menuEnglish() {
	for(i=0; i < english.length; i++)
	{ 
		var x = i + 1;
		MM_swapImage('MenuImage-'+x,'',english[i],x);
	}

	//$('.center-pg').css('width', '1355px');
	$('.nav-items').css('margin', '0px 7% 0px');
}

function menuChinese() {
	for(i=0; i < english.length; i++)
	{ 
		var x = i + 1;
		var def = english[i].replace('/english', '');
		MM_swapImage('MenuImage-'+x,'',def,x);
	}

	$('.nav-items').css('margin', '');
}*/