// $('#wrapper a').click(function() {
//         if ($(this).attr('class') != $('#wrapper').attr('class') ) {
//             $('#wrapper').attr('class',$(this).attr('class'));
//         }
// });
$(document).ready(function () {
	// var input = $('input');
	// console.log(input);
	// function getInputValue (){
	// 	return($(this).attr(title));
	// }
	function addToolTip(){
		$(this).after('<span class="tooltip">' + $(this).attr('title') + '</span>');
	}
	// var inputValue = $('input').attr("title");
	// $('input').after('<span class="tooltip">' + inputValue + '</span>');
	
	$('input').bind("focus", function(){
		addToolTip(this);
		$(this).next().show(500);
	});
	
	$('input').bind("blur", function(){
		$(this).next().hide(500);
	});

	$('input').bind("mouseover", function(){
		$(this).next().show(500);
	});

	$('input').bind("mouseout", function(){
		$(this).next().hide(500);
	});

	// $('input').bind("focus", function(){
	//  	var value = $(this).attr("title");
	//  	console.log(value);
	//  	$(this).after('<span class="tooltip">' + value + '</span>');
	//  });
	// $('input').bind("blur", function(){

	

	// .mouseenter(function() {
 //    $('#follow').css('display','block');
	// })
	// .mouseleave(function() {
 //    $('#follow').css('display','none');
	// })

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