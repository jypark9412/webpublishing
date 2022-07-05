$(document).ready(function(){
	
	setInterval(function(){

		$(".items li.item_01 .item_img_01").animate({"margin-left": "-3px"}, 150);
		$(".items li.item_01 .item_img_01").animate({"margin-left": "0"}, 150, function(){
			$(".items li.item_02 .item_img_02").animate({"margin-right": "-4px"}, 150);
			$(".items li.item_02 .item_img_02").animate({"margin-right": "0"}, 150, function(){
				$(".items li.item_03 .item_img_03").animate({"margin-left": "-2px"}, 150);
				$(".items li.item_03 .item_img_03").animate({"margin-left": "0px"}, 150, function(){
					$(".items li.item_04 .item_img_04").animate({"margin-left": "-4px"}, 150);
					$(".items li.item_04 .item_img_04").animate({"margin-left": "0px"}, 150, function(){
						$(".items li.item_05 .item_img_05").animate({"margin-right": "-5px"}, 150);
						$(".items li.item_05 .item_img_05").animate({"margin-right": "0px"}, 150);
					});
				});
			});
		});

	}, 1500);

});