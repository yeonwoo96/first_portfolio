$(function(){
					$("#button1").click(function(){
							$(".img1").fadeIn();
							$(".img2").fadeOut();
							$(".img3").fadeOut();
							$(".img4").fadeOut();
					});	
					$("#button2").click(function(){
							$(".img1").fadeOut();
							$(".img2").fadeIn();
							$(".img3").fadeOut();
							$(".img4").fadeOut();
					});
					$("#button3").click(function(){
							$(".img1").fadeOut();
							$(".img2").fadeOut();
							$(".img3").fadeIn();
							$(".img4").fadeOut();
					});
			});