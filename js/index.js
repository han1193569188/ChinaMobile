$(function () {
	//头部选项卡
	let t;
	$(".header-right-wenzi").children("li").hover(function () {
		let index=$(".header-right-wenzi").children("li").index(this);
		clearTimeout(t);
		t=setTimeout(function () {
			$(".libox").eq(index).show();
        },200)
    },function () {
        clearTimeout(t);
        $(".libox").hide();
    });
	//选项卡
	let t1;
	$(".nav-zuo2").hover(function () {
		let index=$(".nav-zuo2").index(this);
		clearTimeout(t1);
		t1=setTimeout(function () {
            $(".nav-push").eq(index-1).show();
        },200)
    },function () {
        clearTimeout(t1);
        $(".nav-push").hide();
    });
	//banner
	let t2;
	let now=next=0;
	let flag=true;
	let width=$(".banner-pic").eq(0).width();
	t2=setInterval(function () {
		flag=false;
		fn();
    },4000);
	$(".banner-box").hover(function () {
		clearInterval(t2);
    },function () {
        clearInterval(t2);
        t2=setInterval(function () {
            flag=false;
            fn();
        },4000);
    });
	function fn() {
		next++;
		if(next==$(".banner-pic").length){
			next=0;
		}
		$(".circle").children("li").css("background","#ccc");
        $(".banner-pic").eq(next).css("left",width);
        $(".circle").children("li").eq(next).css("background","#E50166");
        $(".banner-pic").eq(now).animate({left:-width},1000);
        $(".banner-pic").eq(next).animate({left:0},1000,function () {
			flag=true;
        });
        now=next;
    }
    function fn1() {
		next--;
		if(next==-1){
			next=$(".banner-pic").length-1;
		}
        $(".circle").children("li").css("background","#ccc");
        $(".banner-pic").eq(next).css("left",-width);
        $(".circle").children("li").eq(next).css("background","#E50166");
        $(".banner-pic").eq(now).animate({left:width},1000);
        $(".banner-pic").eq(next).animate({left:0},1000,function () {
            flag=true;
        });
        now=next;
    }
    $(".bashou-left").click(function () {
		if(!flag){
			return;
		}
		flag=false;
		fn1();
    });
    $(".bashou-right").click(function () {
        if(!flag){
            return;
        }
        flag=false;
        fn();
    });
	$(".circle").children("li").click(function () {
		let index=$(".circle").children("li").index(this);
		if(!flag){
			return;
		}
		if(index>now){
			flag=false;
            $(".circle").children("li").css("background","#ccc");
            $(".banner-pic").eq(index).css("left",width);
            $(".circle").children("li").eq(index).css("background","#E50166");
            $(".banner-pic").eq(now).animate({left:-width},1000);
            $(".banner-pic").eq(index).animate({left:0},1000,function () {
                flag=true;
            });
		}else if(index<now){
			flag=false;
            $(".circle").children("li").css("background","#ccc");
            $(".banner-pic").eq(index).css("left",-width);
            $(".circle").children("li").eq(index).css("background","#E50166");
            $(".banner-pic").eq(now).animate({left:width},1000);
            $(".banner-pic").eq(index).animate({left:0},1000,function () {
                flag=true;
            });
		}
		now=next=index;
    });

    //左右轮播
	let newwidth=$(".youhui").children("li").eq(0).width()+parseInt($(".youhui").children("li").eq(0).css("marginRight"));
	let t3;
	let num=0;
	let flag1=true;
	t3=setInterval(function () {
		flag1=false;
		fn2()
    },3000);
    $(".section3-left").hover(function () {
        clearInterval(t3);
    },function () {
        clearInterval(t3);
        t3=setInterval(function () {
            flag1=false;
            fn2()
        },3000);
    });
    $(".section3-right").hover(function () {
        clearInterval(t3);
    },function () {
        clearInterval(t3);
        t3=setInterval(function () {
            flag1=false;
            fn2()
        },3000);
    });
    $(".section3-left").click(function () {
    	if(!flag1){
    		return;
		}
		flag1=false;
        fn3();
    });
    $(".section3-right").click(function () {
        if(!flag1){
            return;
        }
        flag1=false;
        fn2();
    });
	function fn2() {
		num++;
		if(num==9){
            $(".youhui").css("left",0);
			num=1;
		}
        $(".youhui").animate({left:-num*newwidth},function () {
			flag1=true;
        })
    }
    function fn3() {
		if(num==0){
			num=8;
            $(".youhui").css("left",-8*newwidth);
		}
        num--;
        $(".youhui").animate({left:-num*newwidth},function () {
			flag1=true;
        })
    }
	//节点轮播
	let t4;
	let flag2=true;
	t4=setInterval(fn4,3000);
	$(".gong").hover(function () {
		clearInterval(t4);
    },function () {
        clearInterval(t4);
        t4=setInterval(fn4,3000);
    });
	$(".gong8").click(fn5);
    $(".gong9").click(fn4);
	function fn4() {
		let last=$(".row").children("li:last");
        $(last).prependTo(".row");
    }
    function fn5() {
        let last=$(".row").children("li:first");
        console.log(last);
        $(last).appendTo(".row");
    }
});

// window.onload=function(){
// 	let banner=document.getElementsByClassName("banner-box")[0];
// 	let lis=document.getElementsByClassName("banner-pic");
// 	let width=banner.offsetWidth;
// 	let after=document.getElementsByClassName("bashou-right")[0];
// 	let forward=document.getElementsByClassName("bashou-left")[0];
// 	let circle=document.getElementsByClassName("circle")[0];
// 	let circle_lis=circle.getElementsByTagName("li");
// 	let now=next=0;
// 	let t;
// 	let flag=true;
// 	banner.onmouseover=function(){
// 		clearInterval(t);
// 	};
// 	banner.onmouseout=function(){
//         clearInterval(t);
//         t=setInterval(function () {
//             flag=false;
//             fn();
//         },3000);
// 	};
// 	after.onclick=function(){
// 		if (flag) {
// 			fn();
// 			flag=false;
// 		}
// 	};
// 	forward.onclick=function(){
// 		if (flag) {
// 			fn1();
// 			flag=false;
// 		}
// 	}
// 	t=setInterval(function () {
//         flag=false;
//         fn();
//     },3000);
// 	for(let i=0;i<circle_lis.length;i++){
// 		circle_lis[i].onclick=function(){
// 			if (flag) {
// 			for(let j=0;j<circle_lis.length;j++){
// 				circle_lis[j].style.background="#ccc";
// 			}
// 			circle_lis[i].style.background="#E50166";
// 			if (i==now) {return;}
// 			else if (i<now) {
// 				lis[i].style.left=`-${width}px`;
// 				animate(lis[now],{left:width},2000);
// 				animate(lis[i],{left:0},2000,function(){
// 				flag=true;});
// 			}
// 			else if (i>now) {
// 				lis[i].style.left=`${width}px`;
// 				animate(lis[now],{left:-width},2000);
// 				animate(lis[i],{left:0},2000,function(){
// 				flag=true;});
// 			}
// 			now=next=i;
// 			}
// 			flag=false;
// 		}
// 	}
// 	function fn(){
// 		next++;
// 		if (next==lis.length) {
// 			next=0;
// 		}
// 		lis[next].style.left=`${width}px`;
// 		animate(lis[now],{left:-width},2000);
// 		animate(lis[next],{left:0},2000,function(){
// 			flag=true;});
// 		for(let i=0;i<circle_lis.length;i++){
// 			circle_lis[i].style.background="#ccc";
// 		}
// 		circle_lis[next].style.background="#E50166";
// 		now=next;
// 	}
// 	function fn1(){
// 		next--;
// 		if (next==-1) {
// 			next=lis.length-1;
// 		}
// 		lis[next].style.left=`-${width}px`;
// 		animate(lis[now],{left:width},2000);
// 		animate(lis[next],{left:0},2000,function(){
// 			flag=true;
// 		});
// 		for(let i=0;i<circle_lis.length;i++){
// 			circle_lis[i].style.background="#ccc";
// 		}
// 		circle_lis[next].style.background="#E50166";
// 		now=next;
// 	}
// 	//优惠轮播
// 	let section3=document.getElementsByClassName("section3")[0];
// 	let youhui=document.getElementsByClassName("youhui")[0];
// 	let youhui_lis=youhui.getElementsByTagName("li");
// 	let youhui_width=youhui_lis[0].offsetWidth+10;
// 	let section3_left=document.getElementsByClassName("section3-left")[0];
// 	let section3_right=document.getElementsByClassName("section3-right")[0];
// 	let t2;
// 	let nums=0;
// 	let flag1=true;
// 	section3.onmouseover=function(){
// 		clearInterval(t2);
// 	};
// 	section3.onmouseout=function(){
//         clearInterval(t2);
//         t2=setInterval(function () {
//             flag1=false;
//             fn2();
//         },3000);
// 	};
// 	t2=setInterval(function () {
// 	    flag1=false;
//         fn2();
//     },3000);
// 	section3_right.onclick=function () {
// 	    if(!flag1){
// 	        return;
//         }
//         flag1=false;
//         fn2();
//     };
// 	section3_left.onclick=function () {
//         if(!flag1){
//             return;
//         }
//         flag1=false;
//         fn3();
//     };
// 	function fn2(){
// 		nums++;
// 		if (nums<8) {
// 			animate(youhui,{left:-nums*youhui_width},2000,function () {
//                 flag1=true;
//             })
// 		}
// 		else if (nums==8) {
// 			animate(youhui,{left:-nums*youhui_width},2000,function(){
// 				youhui.style.left=0;
// 				nums=0;
// 				flag1=true;
// 			})
// 		}
// 	}
// 	function fn3(){
// 		if (nums==0) {
// 			nums=8;
// 			youhui.style.left=`-${nums*youhui_width}px`;
// 		}
// 		nums--;
// 		animate(youhui,{left:-nums*youhui_width},2000,function () {
//             flag1=true;
//         })
// 	}
// 	//nav选项卡
//     let nav=document.querySelectorAll(".nav-zuo2");
// 	let nav_push=document.querySelectorAll(".nav-push");
//     console.log(nav,nav_push);
// 	nav.forEach(function (val,index) {
//         val.onmouseenter=function () {
//             nav_push[index].style.display="block";
//         };
//         val.onmouseleave=function () {
//             nav_push[index].style.display="none";
//         }
//     });
//     nav_push.forEach(function (val,index) {
//         val.onmouseenter=function () {
//             nav_push[index].style.display="block";
//         };
//         val.onmouseleave=function () {
//             nav_push[index].style.display="none";
//         }
//     });
// 	//头部选项卡
// 	let header_li=document.querySelectorAll(".header-right-wenzi li");
// 	let header_push=document.querySelectorAll(".libox");
// 	for(let i=0;i<2;i++){
//         header_li[i].onmouseenter=function () {
//             header_push[i].style.display="block";
//         }
//         header_li[i].onmouseleave=function () {
//             header_push[i].style.display="none";
//         }
// 	}
// 	//公告
// 	let row=document.querySelector(".row");
// 	let row_lis=document.querySelectorAll(".row li");
// 	let row_left=document.querySelector(".gong8");
// 	let row_right=document.querySelector(".gong9");
// 	let gong=document.querySelector(".gong");
// 	function frow() {
//         let row_first=row.firstElementChild;
// 		row.appendChild(row_first);
//     }
//     function frow1() {
//         let row_last=row.lastElementChild;
//         let row_first=row.firstElementChild;
//         row.insertBefore(row_last,row_first);
//     }
//     let row_t=setInterval(frow,3000);
//     gong.onmouseenter=function () {
// 		clearInterval(row_t);
//     };
//     gong.onmouseleave=function () {
//         clearInterval(row_t);
//         row_t=setInterval(frow,3000);
//     };
//     row_right.onclick=function () {
//         frow();
//     };
//     row_left.onclick=function () {
// 		frow1();
//     }
// };