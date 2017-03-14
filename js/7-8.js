// $('#wrapper a').click(function() {
//         if ($(this).attr('class') != $('#wrapper').attr('class') ) {
//             $('#wrapper').attr('class',$(this).attr('class'));
//         }
// });
$(document).ready(function () {
	
	//SES TOOLTIP
	function addToolTip(e){ //get attr title from this and add element span in DOM after it
		$(e).after('<span class="tooltip">' + $(e).attr('title') + '</span>');
	}
	
	//ADD REACTION ON FOCUS
	$('input').each(function(){
	//ADD ON FOCUS 
		$(this).bind("focus", function(){
			if ($(this).after() == 'span'){
				if($(this).after().is(':hiden')){
					$(this).next().show(300);
				}
			}else{
				addToolTip(this);
				$(this).next().show(300);
			}
		});
	//ADD ON BLUR
		$(this).bind("blur", function(){
			$(this).next().hide(300);
		});
	//ADD ON MOUSOVER
		$(this).bind("mouseover", function(){
			if ($(this).after() == 'span'){
				if(($(this).is(':focus'))){ //show tooltip if input have not focus
					return;
				}else{$(this).next().show(300);}
			}else{
				addToolTip(this);
				$(this).next().show(300);
			}
		});
	//ADD ON MOUSEOUT
		$(this).bind("mouseout", function(){
			$(this).next().hide(300);
		});	
	});
	
	// $('input').bind("blur", function(){
	// 	$(this).next().hide(500);
	// });

	// $('input').bind("mouseover", function(){
	// 	$(this).next().show(500);
	// });

	// $('input').bind("mouseout", function(){
	// 	$(this).next().hide(500);
	// });

	//TABS
	$('li').click(function(){
		if( $(this).hasClass('curent-tab') ){
			console.log('already curent');
		}
		else {
		curentTab = (this.classList[0]);
		console.log('curentTab = ' + curentTab);
			$(this).siblings().removeClass('curent-tab');
				console.log("remove curent");
			$(this).addClass('curent-tab');
				console.log("add curent");
			$('.tab__content').removeClass('curent-content');
			$('.' + curentTab + '.tab__content').addClass('curent-content');
		}
	});
});