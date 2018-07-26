$(function(){
	
	
	$('.header .menuItem').mouseover(function(){
					$('.header nav menu .range').animate({
						left:$(this).position().left + 25,
						width:$(this).innerWidth()
					},100)
					
					$(this).find('.drop-down').show().stop().animate({
						top:60
					},200)
				}).mouseleave(function(){
					$(this).find('.drop-down').hide().css({
						top:80
					},200)
				})
//				console.log($('.header .menuItem').first().position())
				// 滑块第一次的位置
				$('.header nav menu .range').css({
					left:$('.header .menuItem').first().position().left+25,
					width:$('.header .menuItem').first().innerWidth()
				})
//				以上是导航			
			
			
			
			 var $boximg=$('.box-img'),
			 	 $syz=$('.syz'),
			 	 $xyz=$('.xyz');
			 var $firstimg = $boximg.find('li').first(),
			 	 $lastimg  = $boximg.find('li').last()
			 var sum=0;	 
			 var imglength=$boximg.children().length

			 	 $boximg.append($firstimg.clone())
			 	 $boximg.prepend($lastimg.clone())
			 $boximg.width($firstimg.width()*$boximg.children().length)
				function next(){				
					$boximg.animate({
						left:'-=1518px'
					},function(){
						sum++
						if(sum ===imglength){
							$boximg.css({left:'-1518px'})
							sum=0
						}
					})					
				change()
				}
				function prev(){
					
					$boximg.animate({
						left:'+=1518px'
					},function(){
						sum--
						if(sum <0){
							$boximg.css({left:"-4554px"})
							sum=imglength-1;
						}
					})
				
					change()
				}
				function change(){
					$('.list').find('li').removeClass('active')
				                     	 .eq(sum).addClass('active')
				}
				setInterval(next,3000)
//	以上是banner轮播
	
			$(window).scroll(function() {
				if($(this).scrollTop() >= 200) { 
						$('.list-a').animate({
							marginTop:60
						},1000).show()
				}
				if($(this).scrollTop() >= 200) { 
						$('.list-b').animate({
							marginTop:60
						},1070).show()
				}
				if($(this).scrollTop() >= 200) { 
						$('.list-c').animate({
							marginTop:60
						},1140).show()
				}
				if($(this).scrollTop() >= 200) { 
						$('.list-d').animate({
							marginTop:60
						},1210).show()
				}
				if($(this).scrollTop() >= 750) { 
						$('.who-txt').animate({
							marginTop:-80
						},1000).show()
				}
				if($(this).scrollTop() >= 750) { 
						$('.right-txt').animate({
							marginTop:50
						},920).show()
				}
				if($(this).scrollTop() >= 1100) { 
						$('.news-left').animate({
							marginTop:40
						},920).show()
				}
				if($(this).scrollTop() >=1100) { 
						$('.new-right').animate({
							marginTop: 90
						}, 1000).show()
				}
				if($(this).scrollTop() >=1350) { 
						$('.img-ul-1').animate({
							marginTop: -50
						}, 920).show()
				}
				if($(this).scrollTop() >=1970) { 
						$('.anli-box-txt').animate({
							marginTop: -60
						}, 690).show()
				}
				if($(this).scrollTop() >=2600) { 
						$('.server-left').animate({
							marginTop: -5
						}, 690).show()
				}
				if($(this).scrollTop() >=2600) { 
						$('.server-ul-li-a').animate({
							marginTop: -100
						}, 690).show()
				}
				if($(this).scrollTop() >=2600) { 
						$('.server-ul-li-b').animate({
							marginTop: -100
						}, 790).show()
				}
				if($(this).scrollTop() >=2600) { 
						$('.server-ul-li-c').animate({
							marginTop: -100
						}, 890).show()
				}
				if($(this).scrollTop() >=2200) { 
						$('.clearfix-1').animate({
							marginTop: 10
						}, 900).show()
				}
				if($(this).scrollTop() >=2200) { 
						$('.clearfix-2').animate({
							marginTop: -10
						}, 1000).show()
				}
				if($(this).scrollTop() >=2200) { 
						$('.clearfix-3').animate({
							marginTop: -10
						}, 1100).show()
				}
			});
//			以上是判断									
				$('.img-ct .img-ct-cont .img-ul-1 li').hover(function() {
					$('.img-txt', this).stop().animate({
						height: '257px'
					});
				}, function() {
					$('.img-txt', this).stop().animate({
						height: '0'
					});
				});	
				
//		以上是图片的覆盖		
				var index = 0;	
	$('.news .list').eq(index).show()
	function ani(){
		$('.news .list')
			.eq(index)
			.show()
			.siblings()
			.hide()						
		$('.news .list').eq(index).find('.item').eq(1).css({
			marginTop:10,
			opacity:0.5
		})
		$('.news .list').eq(index).find('.item').eq(2).css({
			marginTop:10,
			opacity:0.5
		})
		
		$('.news .list').css({
			top:100
		}).stop().animate({
			top:0,
		},function(){
			$(this).find('.item').eq(1).animate({
				marginTop:0,
				opacity:1
			})
			var _this = this;
			setTimeout(function(){
				$(_this).find('.item').eq(2).animate({
					marginTop:0,
					opacity:1
				})
			},100)
		})								
	}	
	$('.news .btn-list span').mouseover(function(){
		$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		
		index = $(this).index();
		$('.news .btn')
			.eq(index)
			.addClass('active')
			.siblings()
			.removeClass('active')
		ani()
	})	
	$('.news .btn').mouseover(function(){
		$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		
		index = $(this).index();

		$('.news .btn-list span')
			.eq(index)
			.addClass('active')
			.siblings()
			.removeClass('active')
		ani()
	})
//卡片的切换
	
	
	
})
	
	
	

