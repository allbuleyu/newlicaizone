$(function(){new Rotation($(".J_pics").find("li"),$(".J_links").find("li"));var $this=$(".J_newslist");var scrollTimer;$this.hover(function(){clearInterval(scrollTimer)},function(){scrollTimer=setInterval(function(){scrollNews($this)},2500)}).trigger("mouseleave");function scrollNews(obj){var $self=obj.find("ul");var lineHeight=$self.find("li:first").height();$self.animate({"marginTop":-lineHeight+"px"},600,function(){$self.css({marginTop:0}).find("li:first").appendTo($self)})}$("td").hover(function(){$(this).find("img").animate({"top":-10+"px"},400)},function(){$(this).find("img").animate({"top":5+"px"},400)});var anchor=[];$(window).load(function(){$(".J_anchor").each(function(){var anchorOffsettop=$(this).offset().top;anchor.push(anchorOffsettop)})});var ischange=false,isclick=false;$(window).scroll(function(){var scrolltop=$(window).scrollTop(),imgHeight=$(".header").find(".logo img").height();if(scrolltop>0&&imgHeight==62&&!(ischange)){ischange=true;$(".header").animate({"height":50+"px"},600);$(".header").addClass("shadow");$(".header").find(".logo img").animate({"height":32+"px"},600);$(".header").find(".nav li").animate({"top":-17+"px"},600)}else{if(scrolltop<=0&&imgHeight==32&&ischange){ischange=false;$(".header").animate({"height":90+"px"},600);$(".header").removeClass("shadow");$(".header").find(".logo img").animate({"height":62+"px"},600);$(".header").find(".nav li").animate({"top":0+"px"},600)}}if(!isclick){if(scrolltop>=anchor[0]&&scrolltop<anchor[1]){$(".nav li").eq(0).addClass("on").siblings("li").removeClass("on")}if(scrolltop>=anchor[1]&&scrolltop<anchor[2]){$(".nav li").eq(1).addClass("on").siblings("li").removeClass("on")}if(scrolltop>=anchor[2]&&scrolltop<anchor[3]-290){$(".nav li").eq(2).addClass("on").siblings("li").removeClass("on")}if(scrolltop>=anchor[3]-290){$(".nav li").eq(3).addClass("on").siblings("li").removeClass("on")}}});$(".J_toindex").click(function(){$.scrollTo("#index",1000)});$(".J_tonew").click(function(){$.scrollTo("#new",1000)});$(".J_tous").click(function(){$.scrollTo("#us",1000)});$(".J_tonum").click(function(){$.scrollTo("#num",1000)});$(".nav li").click(function(){isclick=true;$(this).addClass("on").siblings("li").removeClass("on");setTimeout(function(){isclick=false},1000)})});