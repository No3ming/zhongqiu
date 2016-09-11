$(function(){
	var mySwiper = new Swiper('.swiper-container',{
		direction : 'vertical',
		onSlideChangeEnd: function(swiper){
			var yue=$('.yue').eq(0);
			yue.addClass('fad-out');
			/*文本动画*/
			var txt=$('.text').eq(0);
			var pList=txt.find('p');
			var _self=this;
     		 if(mySwiper.activeIndex==1){
     		 	var i=0;
     		 	addcls(i);
     		 	_self.timer=setInterval(function(){
     		 		i++;
     		 		addcls.call(this,i);
     		 		if(i>=4){
     		 			clearInterval(_self.timer);
     		 			txt.addClass('text-animation');
     		 		}
     		 	},2000);
     		 }
     		 function addcls(i){
     		 	pList.eq(i).addClass('move-in1');
     		 }
   		 }
	});
	var zhongqiu=$('.zhongqiu').eq(0);
	zhongqiu.bind("webkitAnimationEnd", function() {
   		 zhongqiu.removeClass("animation1");
   		 zhongqiu.addClass("animation2");
	});
})