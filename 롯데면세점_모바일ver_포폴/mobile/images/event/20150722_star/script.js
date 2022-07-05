$(document).ready(function(){
	/* 슬라이드 */
	function mvLeft(){
		var $_idx = $(".pThumbList ul li.end").index();
		if($_idx == 5){
			$(".pThumbList ul ").stop();
				$(".pThumbList ul ").animate({left:'-100px'},100,function(){
					$obj=$(".pThumbList ul li").eq(0).clone(true);
					$(".pThumbList ul li").eq(0).remove();
					$(".pThumbList ul").append($obj);
					$(".pThumbList ul").css('left',0);
				});
			}
	}

	function mvRight(){
		var $f_idx = $(".pThumbList ul li.first").index();
		if($f_idx > 4){
			$obj =$(".pThumbList ul li:last").clone(true);
			$(".pThumbList ul").css('left',"-100px")
			$(".pThumbList ul li:last").remove();
			$(".pThumbList ul").prepend($obj);

			$(".pThumbList ul").stop();
			$(".pThumbList ul").animate({left:'0'},100);
		}
	}

	var $idx = $(".pThumbList ul li").index(this);

	$("a.next").click(function(){
		mvLeft();
	})

	$("a.prev").click(function(){
		mvRight();
	})
});
