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

//3.鼠标移入移出改变样式，用伪类:hover当然可以轻松实现，这里熟悉一下onmouseover和onmouseout事件
window.onload = function() {
	var oDiv = document.getElementById('div1');
	oDiv.onmouseover = function () {
		oDiv.className = 'hover';
	}
	oDiv.onmouseout = function () {
		oDiv.className = '';
	}
}

//4.







































