$(document).ready(function () {
	
	//ADD TOOLTIP ELEMENT (HIDE) TO EACH INPUT
	$('input').each(function(){
		$(this).after('<span class="tooltip">' + $(this).attr('title') + '</span>');
		
		function showTooolTip(e){
			$(e).next().addClass('show').fadeIn(1000);
		}
		function hideToolTip(e){
			$(e).next().removeClass('show');
		}
	
		var isInFocus = false;
		var isMouseover = false;
		
	//ADD REACTION ON FOCUS 
		$(this).focus(function(){
			if (!isMouseover){
				showTooolTip(this);
			}
			isInFocus = true; 
		});
	//ADD REACTION ON BLUR
		$(this).blur(function(){
			if(!isMouseover){
				hideToolTip(this);
			}
			isInFocus = false;
		});
	
	//ADD REACTION ON MOUSOVER
		$(this).mouseover(function(){
			if (!isInFocus){
				showTooolTip(this);
			}
			isMouseover = true;
		});
	//ADD REACTION ON MOUSEOUT
		$(this).mouseout(function(){
			if(!isInFocus){
				hideToolTip(this);
			}
			isMouseover = false;
		});	
	});
	
	//TABS
	$('li').click(function(){
		if( !($(this).hasClass('curent-tab')) ){
		curentTab = (this.classList[0]);
			$(this).siblings().removeClass('curent-tab');
			$(this).addClass('curent-tab');
			$('.tab__content').removeClass('curent-content');
			$('.' + curentTab + '.tab__content').addClass('curent-content');
		}
	});
});