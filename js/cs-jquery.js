jQuery(function(){
	var article = $('.qna-ul .qna-li');
	article.addClass('hide');
	article.find('qna-a').slideUp(0);
    
	$('.qna-ul .qna-li .qna-q').click(function(){
		var myArticle = $(this).parents('.qna-li:first');
		var heightA = myArticle.find('.qna-a').outerHeight(true);
        
		if(myArticle.hasClass('hide')){
			myArticle.removeClass('hide').addClass('show');
			myArticle.find('.qna-a').slideDown(200);
            $('.qna-bottom').height($('.qna-bottom').height() + heightA);
            $('.qna').height($('.qna').height() + heightA);
            $('.contents').height($('.contents').height() + heightA);
        } else {
			myArticle.removeClass('show').addClass('hide');
			myArticle.find('.qna-a').slideUp(200);
            $('.qna-bottom').height($('.qna-bottom').height() - heightA);
            $('.qna').height($('.qna').height() - heightA);
            $('.contents').height($('.contents').height() - heightA);
		};
    });

	$('.hide').find('.qna-a').css({'display':'none'});
	$('.show').find('.qna-a').css({'display':'block'});
});