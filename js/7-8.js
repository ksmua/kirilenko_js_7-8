// $('#wrapper a').click(function() {
//         if ($(this).attr('class') != $('#wrapper').attr('class') ) {
//             $('#wrapper').attr('class',$(this).attr('class'));
//         }
// });
$(document).ready(function () {
	console.log("ready");
	// $('.curent').show();
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