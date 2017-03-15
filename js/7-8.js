$(document).ready(function () {
	
	//ADD TOOLTIP ELEMENT (HIDE) TO EACH INPUT
	$('input').each(function(){
		$(this).after('<span class="tooltip">' + $(this).attr('title') + '</span>');
		
		function showTooolTip(e){
			$(e).next().addClass('show').fadeIn(1000);
			// console.log('function show');
		}
		function hideToolTip(e){
			$(e).next().removeClass('show');
			// console.log('function hide');
		}
	
		var isInFocus = false;
		var isMouseover = false;
		
	//ADD REACTION ON FOCUS 
		$(this).focus(function(){
			if (!isMouseover){
				showTooolTip(this);
				// console.log('showToolTip_on_focus');
			}
			isInFocus = true; 
			// console.log('isInFocus = ' + isInFocus);
		});
	//ADD REACTION ON BLUR
		$(this).blur(function(){
			if(!isMouseover){
				hideToolTip(this);
				// console.log('hideToolTip_on_blur');
			}
			isInFocus = false;
			// console.log('isInFocus = ' + isInFocus);
		});
	
	//ADD REACTION ON MOUSOVER
		$(this).mouseover(function(){
			if (!isInFocus){
				showTooolTip(this);
				// console.log('showToolTip_on_mouseover');
			}
			isMouseover = true;
			// console.log('isMouseover = ' + isMouseover);
		});
	//ADD REACTION ON MOUSEOUT
		$(this).mouseout(function(){
			if(!isInFocus){
				hideToolTip(this);
				// console.log('hideToolTip_on_mouseout');
			}
			isMouseover = false;
			// console.log('isMouseover = ' + isMouseover);
		});	
	});
	
	//TABS
	$('li').click(function(){
		if( !($(this).hasClass('curent-tab')) ){
			// console.log('already curent');
		// }
		// else {
		curentTab = (this.classList[0]);
		// console.log('curentTab = ' + curentTab);
			$(this).siblings().removeClass('curent-tab');
				// console.log("remove curent");
			$(this).addClass('curent-tab');
				// console.log("add curent");
			$('.tab__content').removeClass('curent-content');
			$('.' + curentTab + '.tab__content').addClass('curent-content');
		}
	});
});