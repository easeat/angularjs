;(function($){
	$.extend({
		FloatingHint:function(options){
			var options = $.extend({
				width:"",
				height:"",
				id:"FloatingHint",
				clazz:"floatingHint",
				closable:true,
				corner:3,
				type:"",
				title:"",
				text:"default text",
				holdTime:0,
				opacity:0.75
			},options);
			var $fh,$bg,$fhBody,$close,$title,$textContent,$text;
			var timeoutProcess;
			Initialization();
			show();
			function Initialization(){
				if(!options.id){
					return;
				}
				if(!options.text){
					return;
				}
				$fh=$("#"+options.id);
				if($fh.length<1){
					$fh=$('<div id="'+options.id+'" class="floatingHint"><div class="body"></div></div>');
					$fh.appendTo($("body"));
				}
				$bg=$("div.background",$fh);
				if($bg.length<1){
					$bg=$('<div class="background"></div>');
					$bg.appendTo($fh);
				}
				$fhBody=$(".body",$fh);
				if($fhBody.length<1){
					$fhBody=$('<div class="body"></div>');
					$fhBody.appendTo($fh);
				}
				/*<div class="floatingHint success">
					<div class="background"></div>
					<div class="body">
						<div class="title">这是标题</div><a class="close" href="">x</a>
						<span class="notiseIcon"></span>
						<div class="text">这是提示内容这是提示内容这是提！</div>
					</div>
				</div>*/
				if(options.title){
					$title=$("div.title",$fhBody);
					if($title.length<1){
						$title=$('<div class="title"></div>');
						$title.appendTo($fhBody);
					}
					$title.html(options.title);
				}
				if(options.type){
					var $notiseIcon=$("span.notiseIcon",$fhBody);
					if(options.type==="success"){
						if(!$notiseIcon.length){
							$notiseIcon=$('<span class="notiseIcon"></span>').appendTo($fhBody);
						}
						$fh.addClass("success");
					}
					if(options.type==="error"){
						if(!$notiseIcon.length){
							$notiseIcon=$('<span class="notiseIcon"></span>').appendTo($fhBody);
						}
						$fh.addClass("error");
					}
					if(options.type==="information"){
						if(!$notiseIcon.length){
							$notiseIcon=$('<span class="notiseIcon"></span>').appendTo($fhBody);
						}
						$fh.addClass("information");
					}
				}
				if(options.closable){
					$close=$("a.close",$fhBody);
					if($close.length<1){
						$close=$('<a class="close" href="">x</a>');
						$close.appendTo($fhBody);
					}
					if($title&&$title.length){
						$close.appendTo($title);
					}
					$close.click(function(e){
						e.preventDefault();
						hide();
					});
				}
				if(options.text){
					$textContent=$("div.text",$fhBody);
					if($textContent.length<1){
						$textContent=$('<div class="text"></div>');
						$textContent.appendTo($fhBody);
					}
					//$text=$("p",$textContent);
//					if($text.length<1){
//						$text=$('<p></p>');
//						$text.appendTo($textContent);
//					}
					$textContent.html(options.text);
				}
				if(options.corner){
					$bg.addClass("corner-"+options.corner);
					$fhBody.addClass("corner-"+options.corner);
					$textContent.addClass("corner-"+options.corner);
					if($title&&$title.length){
						$title.addClass("corner-tr-"+options.corner).addClass("corner-tl-"+options.corner);
					}
				}
				if(options.width){
					$fh.css("width",options.width);
				}
				if(options.opacity){
					$bg.fadeTo(0,0.25);
					$fhBody.fadeTo(100,options.opacity);
					//$fhBody.fadeTo(100,1);
				}else{
					$bg.fadeTo(0,0.25);
				}
				$(window).resize(function(){			
					InitializationPosition();
				});
				$fh.hover(
					function(){
						if(options.holdTime){
							clearTimeout(timeoutProcess);
						}
						$fhBody.fadeTo(100,1);
					},
					function(){
						if(options.holdTime){
							timeoutProcess=setTimeout(hide, options.holdTime);
						}
						if(options.opacity){$fhBody.fadeTo(100,options.opacity);}
					}
				);
				
			}
			function InitializationPosition(){
				var width=$fh.width();
				var height=$fh.height();
				var browserWidth=$(window).width();
				var browserHeight=$(window).height();
				//$fh.css("width",width);
				//alert("width:"+width+"\nheight:"+height+"\nbrowserWidth:"+browserWidth+"\nbrowserHeight:"+browserHeight);
				if(browserWidth>width){
					$fh.css("left",browserWidth/2-width/2);
				}
				if(browserHeight>height){
					//$fh.css("top",(browserHeight/2-height/2)*2/3);
					$fh.css("top","180px");
				}
			}
			
			function show(){
				InitializationPosition();
				$fh.fadeIn(300);
				if(options.holdTime){
					timeoutProcess=setTimeout(hide, options.holdTime);
				}
				
			}
			function hide(){
				if(options.holdTime){
					clearTimeout(timeoutProcess);
				}
				$fh.stop(true,true).fadeOut(300,function(){$(this).remove();});
			}
		}
	});
})(jQuery);