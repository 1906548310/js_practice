// //1.修改div属性，批量添加事件监听
// // 定义修改样式的函数（难道这就是传说中的回调函数？）
// function changeStyle(obj, attr, value) {
// 	obj.style[attr] = value;
// }
// // 获取元素，对样式进行修改
// window.onload = function() {
// 	var obj = document.getElementById('div1');
// 	var inp = document.getElementsByTagName('input');
// 	var oAtt = ['width','height','background-color','display','display'];
// 	var oVal = ['200px','200px','red','none','block'];
// 	//下面这个循环是用来给每个input元素添加事件监听的，所以onclick事件中不可以再用变量i
// 	for(var i = 0,len = inp.length; i < len; i++) {
// 		inp[i].index = i;
// 		inp[i].onclick = function () {
// 			this.index == 4 && (obj.style.cssText = '');
// 			changeStyle(obj, oAtt[this.index], oVal[this.index]);
// 			// console.log(i);
// 			// i == 4 && (obj.style.cssText = '');
// 		}
// 	}
// }

//2.网页换肤
// window.onload = function() {
// 	//获取link元素和skin里的li元素
// 	var oLink = document.getElementsByTagName('link')[2];
// 	var oSkin = document.getElementById('skin').getElementsByTagName('li');
// 	//通过遍历的方式给每个li元素添加click事件
// 	for(var i = 0; i < oSkin.length; i++) {
// 		oSkin[i].onclick = function () {
// 			for(var p in oSkin) {
// 				oSkin[p].className = '';
// 			}
// 			this.className = 'current';
// 			oLink['href'] = 'css/' + this.id + '.css';
// 		}
// 	}
// }

// 3.鼠标移入移出改变样式，用伪类:hover当然可以轻松实现，这里熟悉一下onmouseover和onmouseout事件
// window.onload = function() {
// 	var oDiv = document.getElementById('div1');
// 	oDiv.onmouseover = function () {
// 		oDiv.className = 'hover';
// 	}
// 	oDiv.onmouseout = function () {
// 		oDiv.className = '';
// 	}
// }

//4.复选框实现全选/全不选/反选
// window.onload = function() {
// 	var mya = document.getElementsByTagName('a')[0];
// 	var myInput = document.getElementsByTagName('input');
// 	var myLabel = document.getElementsByTagName('label')[0];
// 	function isCheckAll() {
// 		for(var i=1, n=0; i<myInput.length; i++) {
// 			myInput[i].checked && n++;
// 		}
// 		myInput[0].checked = (n == myInput.length - 1);
// 		myLabel.innerHTML = (myInput[0].checked?"全不选":"全选")
// 	};
// 	// 全选/全不选
// 	myInput[0].onclick = function() {
// 		for(var i=1;i<myInput.length;i++) {
// 			myInput[i].checked = this.checked;
// 		}
// 		isCheckAll();
// 	};
// 	//反选
// 	mya.onclick = function() {
// 		for(var i=1;i<myInput.length;i++) {
// 			myInput[i].checked = !myInput[i].checked;
// 		}
// 		isCheckAll();
// 	};
// 	//根据复选个数更新全选框状态
// 	for(var i=1;i<myInput.length;i++) {
// 		myInput[i].onclick = function() {
// 			isCheckAll();
// 		};
// 	}
// }

// 5.简易网页时钟
// window.onload = function() {
// 	var myClock = document.getElementById('clock');
// 	var iSpan = myClock.getElementsByTagName('span');
// 	setInterval(getTime,1000);
// 	// getTimes(); 加这句话有什么好处？
// 	function getTime() {
// 		var timer = new Date();
// 		timeNow = [timer.getHours(),timer.getMinutes(),timer.getSeconds()];
// 		for (var i in timeNow) {
// 			iSpan[i].innerHTML = format(timeNow[i]);
// 		}
// 	}
// 	function format(a) {
// 		return a.toString().replace(/^(\d)$/, "0$1");	
// 	}
// }

// 6.轮播图
window.onload = function() {
	var oBox = document.getElementById('box');
	var aUI = document.getElementsByTagName('ul');
	var aImg = aUI[0].getElementsByTagName('li');
	var aNum = aUI[1].getElementsByTagName('li');
	var timer = play = null;
	var i = index = 0;

	// 切换按钮
	for(var i = 0; i<aNum.length; i++) {
		aNum[i].index = i;
		aNum[i].onmouseover = function() {
			show(this.index);
		}
	}

	// 鼠标滑过关闭定时器
	oBox.onmouseover = function() {
		clearInterval(play);
	}

	// 鼠标离开启动自动播放
	oBox.onmouseout = function() {
		autoPlay();
	}

	// 自动播放函数
	function autoPlay() {
		play = setInterval(function(){
			index++;
			index >= aImg.length && (index = 0);
			show(index);
		},3000);
	}
	autoPlay();  //应用

	// 图片切换，淡入淡出效果
	function show(a) {
		index = a;
		var alpha = 0;
		for(var i = 0; i<aNum.length; i++) {
			aNum[i].className = '';
		}
		aNum[index].className = 'current';
		clearInterval(timer);

		for(var i = 0; i<aImg.length; i++) {
			aImg[i].style.opacity = 0;
			aImg[i].style.filter = 'alpha(opacity = 0)';
		}

		timer = setInterval(function() {
			alpha += 2;
			alpha > 100 && (alpha = 100);
			aImg[index].style.opacity = alpha/100;
			aImg[index].style.filter = 'alpha(opacity = "+alpha+")';
			alpha == 100 && clearInterval(timer);
		})
	}
}






































