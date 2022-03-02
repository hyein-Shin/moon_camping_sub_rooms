/*네브제이쿼리*/
$(function(){
  $(".navbar_nav> li").hover(function(){
      $(this).toggleClass("show").siblings().removeClass("show");
  });    
});
/*네브클릭시백그라운드고정제이쿼리*/
$(function(){	
	$('.tabnav a').click(function () {	
		$('.tabnav a').removeClass('active');
		$(this).addClass('active');	
	})
  });
/*팝업제이쿼리*/
	$(function(){
    $(".tab02_button ul li:nth-child(1) a").click(function(){
        $(".tab02_popup").show();
    });
    $(".tab02_popup a").click(function(){
        $(".tab02_popup").hide();
    });
});

$(function(){
	$(".tab03_button ul li:nth-child(1) a").click(function(){
			$(".tab03_popup").show();
	});
	$(".tab03_popup a").click(function(){
			$(".tab03_popup").hide();
	});
});

$(function(){
	$(".package_event1 ul li:nth-child(1) a").click(function(){
			$(".hide").slideToggle();
	});
	$(".package_event2 ul li:nth-child(1) a").click(function(){
			$(".hide").slideUp();
	});
});

$(function(){
	$(".package_event2 ul li:nth-child(1) a").click(function(){
			$(".hide2").slideToggle();
	});
	$(".package_event1 ul li:nth-child(1) a").click(function(){
			$(".hide2").slideUp();
	});
});
