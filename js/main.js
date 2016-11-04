//1.修改div属性，通过遍历批量添加事件监听
// 定义修改样式的函数（难道这就是传说中的回调函数？）
// function changeStyle(obj, attr, value) {
// 	obj.style[attr] = value;
// }
// 获取元素，对样式进行修改
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

// 4.复选框实现全选/全不选/反选
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
// 	// getTimes(); 加这句话是为了避免1s的误差
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

// 6.鼠标移动改变图片路径
// window.onload = function () {
// 	var Img = document.getElementById('box').getElementsByTagName('img');
// 	var oDiv = document.getElementsByTagName('div')[0];
// 	for( var i = 0; i<Img.length; i++) {
// 		Img[i].onmouseover = function() {
// 			Img[0].src = this.src.replace(/small/,"big");
// 			oDiv.style.display = 'block';
// 			Img[0].complete ? oDiv.style.display = 'none':(Img[0].onload = function () {oDiv.style.display = 'none';})
// 		}
// 	}
// };

// 7.轮播图
// window.onload = function() {
// 	var oBox = document.getElementById('box');
// 	var aUI = document.getElementsByTagName('ul');
// 	var aImg = aUI[0].getElementsByTagName('li');
// 	var aNum = aUI[1].getElementsByTagName('li');
// 	var timer = play = null;
// 	var i = index = 0;

// 	// 切换按钮
// 	for(var i = 0; i<aNum.length; i++) {
// 		aNum[i].index = i;
// 		aNum[i].onmouseover = function() {
// 			show(this.index);
// 		}
// 	}

// 	// 鼠标滑过关闭定时器
// 	oBox.onmouseover = function() {
// 		clearInterval(play);
// 	}

// 	// 鼠标离开启动自动播放
// 	oBox.onmouseout = function() {
// 		autoPlay();
// 	}

// 	// 自动播放函数
// 	function autoPlay() {
// 		play = setInterval(function(){
// 			index++;
// 			index >= aImg.length && (index = 0);
// 			show(index);
// 		},2000);
// 	}
// 	autoPlay();  //应用

// 	// 图片切换，淡入淡出效果
	// function show(a) {
	// 	index = a;
	// 	var alpha = 0;
	// 	for(var i = 0; i<aNum.length; i++) {
	// 		aNum[i].className = '';
	// 	}
	// 	aNum[index].className = 'current';
	// 	clearInterval(timer);

	// 	for(var i = 0; i<aImg.length; i++) {
	// 		aImg[i].style.opacity = 0;
	// 		aImg[i].style.filter = 'alpha(opacity = 0)';
	// 	}

	// 	timer = setInterval(function() {
	// 		alpha += 2;
	// 		alpha > 100 && (alpha = 100);
	// 		aImg[index].style.opacity = alpha/100;
	// 		aImg[index].style.filter = 'alpha(opacity = "+alpha+")';
	// 		alpha == 100 && clearInterval(timer);
	// 	},20)
	// }

// 8.数组操作
// window.onload = function() {
//     var myArray = document.getElementById('array_box');
//     var thisArray = myArray.getElementsByClassName('array_example')[0];
//     var myInput = myArray.getElementsByTagName('input');
//     var str = thisArray.innerHTML;
//     var aTmp = str.split(',');
//     var originArray = ['圣女果','芒果','樱桃','榴莲','苹果','樱桃','牛油果','荔枝'];
//     myInput[0].onclick = function() {
//         aTmp = [];
//         for(var i in originArray) {aTmp.push(originArray[i]);}
//         thisArray.innerHTML = originArray.join();
//     }
//     myInput[1].onclick = function () {
//         aTmp.shift();
//         thisArray.innerHTML = aTmp.join();
//     }
//     myInput[2].onclick = function () {
//         aTmp.pop();
//         thisArray.innerHTML = aTmp.join();
//     }
//     myInput[3].onclick = function () {
//         aTmp.splice(0,3);
//         thisArray.innerHTML = aTmp.join();
//     }
//     myInput[4].onclick = function () {
//         aTmp.splice(1,2);
//         thisArray.innerHTML = aTmp.join();
//     }
//     myInput[5].onclick = function () {
//         aTmp.splice(2,0,'香蕉','橘子');
//         thisArray.innerHTML = aTmp.join();
//     }
//     myInput[6].onclick = function () {
//         aTmp.splice(1,2,'草莓');
//         thisArray.innerHTML = aTmp.join();
//     }
// }

// 9.事件绑定
// var EventRoot = {
//     addEvent: function(oElement,oEvent,handler) {
//         oElement.addEventListener ? oElement.addEventListener(oEvent,handler,false) : oElement.attachEvent('on'+oEvent,handler);
//     },
//     removeEvent: function(oElement,oEvent,handler) {
//         oElement.removeEventListener ? oElement.removeEventListener(oEvent,handler,false) : oElement.detachEvent('on'+oEvent,handler);
//     },
//     addLoadHandler: function(fnHandler) {
//         this.addEvent(window,'load',fnHandler);
//     }
// }
// EventRoot.addLoadHandler(function(){
//     var oInput = document.getElementsByTagName('input');
//     //为第一个按钮添加绑定事件
//     EventRoot.addEvent(oInput[1],'click',function(){
//         EventRoot.addEvent(oInput[0],'click',event_handler);
//         oInput[0].value = '我可以点击了';
//     });
//     //解除第一个按钮的绑定事件
//     EventRoot.addEvent(oInput[2],'click',function(){
//         EventRoot.removeEvent(oInput[0],'click',event_handler);
//         oInput[0].value = '毫无用处的按钮';
//     });
//     //事件处理函数
//     function event_handler() {
//         alert('事件绑定成功！');
//     }
// })

// 10.星级评分系统
// window.onload = function() {
//     var oStar = document.getElementById('star');
//     var oUl = oStar.getElementsByTagName('ul')[0];
//     var oLi = oStar.getElementsByTagName('li');
//     var oSpan = oStar.getElementsByTagName('span')[1];
//     var oP = oStar.getElementsByTagName('p')[0];
//     var i = iScore = iStar = 0;
//     var aMsg = [
//                 "很不满意|差得太离谱，与卖家描述的严重不符，非常不满",
//                 "不满意|部分有破损，与卖家描述的不符，不满意",
//                 "一般|质量一般，没有卖家描述的那么好",
//                 "满意|质量不错，与卖家描述的基本一致，还是挺满意的",
//                 "非常满意|质量非常好，与卖家描述的完全一致，非常满意"
//                 ]
//     for(var i = 0; i<oLi.length; i++) {
//         oLi[i].index = i+1;
//         //鼠标移至星星上方：点亮对应数量的星星、显示和定位提示框、更新提示框内容
//         oLi[i].onmouseover = function() {
//             //点亮星星
//             light(this.index);
//             //显示提示内容
//             oP.style.display = 'block';
//             //对提示内容进行定位
//             oP.style.left = oUl.offsetLeft + this.index * this.offsetWidth - 104 + 'px';
//             //匹配提示内容
//             oP.innerHTML = '<em><b>' + this.index + ' </b>分 ' + aMsg[this.index - 1].match(/(.+)\|/)[1] + '</em>' + aMsg[this.index - 1].match(/\|(.+)/)[1];
//         }
//         //鼠标点击星星：右侧出现消息框、更新消息框内容、给iStar一个值防止鼠标移出恢复原状
//         oLi[i].onclick = function () {
//             oSpan.style.display = 'block';
//             oSpan.innerHTML = '<strong>' + this.index + ' 分</strong> （' + aMsg[this.index - 1].match(/\|(.+)/)[1] + '）';
//             iStar = this.index;
//         }
//         //鼠标移出星星上方：恢复到上一个点击状态、提示框消失
//         oLi[i].onmouseout = function() {
//             light();
//             oP.style.display = 'none';
//         }
//     }
//     //定义点亮星星的函数
//     function light(iAvg) {
//         iScore = iAvg || iStar;
//         for(var i = 0; i < oLi.length; i++) {
//             oLi[i].className = (iScore > i ? 'on' : '');
//         }
//     }
// }

// 11.显示点击位置的坐标和按下键盘的keyCode
// window.onclick = function(event) {
// 	var event = event || window.event;
// 	alert('横坐标：' + event.clientX + '；' + '纵坐标：' + event.clientY);
// }
// window.onkeydown = function(event) {
// 	var key_code = document.getElementsByTagName('h1')[0];
// 	var event = event || window.event;
// 	key_code.innerHTML = event.keyCode;
// 	return false;
// }

// 12.阻止鼠标右击事件
// document.oncontextmenu = function() {
// 	return false;
// }

// 13.跟随鼠标移动
// window.onload = function () {
//     var aLi = document.getElementsByTagName("li");
//     var oBig = document.getElementById("big");
//     var oLoading = oBig.getElementsByTagName("div")[0];
//     var i = 0;
    
//     for(var i = 0; i < aLi.length; i++) {
//         aLi[i].index = i;
//         //鼠标滑过：显示大图、定位大图、改变自身样式
//         aLi[i].onmouseover = function () {
//             var oImg = document.createElement('img');
//             var img = new Image();
//             //给大图片添加src
//             img.src = oImg.src = aLi[this.index].getElementsByTagName('img')[0].src.replace(".jpg","_big.jpg");
//             //添加子元素
//             oBig.appendChild(oImg);
//             //改变DIV本身样式
//             this.className = 'active';
//             //控制提示框和加载图片显隐
//             oBig.style.display = oLoading.style.display = 'block';
//             //确保大图片加载完成，撤去加载图片
//             img.complete ? (oLoading.style.display = 'none') : (img.oload = function() {oLoading.style.display = 'none'});
//         }
//         //鼠标移动：定位大图
//         aLi[i].onmousemove = function (event) {
//         	event = event || window.event;
//             iWidth = document.documentElement.offsetWidth - event.clientX;
//             //计算出big的top和left
//             oBig.style.top = (event.clientY + 20) + 'px';
//             oBig.style.left = (oBig.offsetWidth + 20 < iWidth ? (event.clientX + 20) : (event.clientX - oBig.offsetWidth - 20)) + 'px'
//         }
//         //鼠标移出：关闭大图、删除对应子元素、去除自身样式
//         aLi[i].onmouseout = function() {
//         	oBig.style.display = 'none';
//         	this.className = '';
//         	//移除子元素
//             oBig.removeChild(oBig.lastChild);
//         }
//     }
// };

// 14.自定义鼠标右键
// window.onload = function () {
// 	var oMenu = document.getElementById("menu");
// 	var aLi = oMenu.getElementsByTagName("li");
// 	//加载后隐藏自定义右键菜单
// 	oMenu.style.display = "none";
// 	//菜单鼠标移入/移出样式
// 	for (i = 0; i < aLi.length; i++)
// 	{
// 		//鼠标移入样式
// 		aLi[i].onmouseover = function ()
// 		{
// 			this.className = "active"	
// 		};
// 		//鼠标移出样式
// 		aLi[i].onmouseout = function ()
// 		{
// 			this.className = ""	
// 		}
// 	}
// 	//自定义菜单
// 	document.oncontextmenu = function (event)
// 	{
// 		var event = event || window.event;
// 		var style = oMenu.style;
// 		style.display = "block";
// 		style.top = event.clientY + "px";
// 		style.left = event.clientX + "px";
// 		return false;
// 	};
// 	//页面点击后自定义菜单消失
// 	document.onclick = function ()
// 	{
// 		oMenu.style.display = "none"	
// 	}
// };

// 15.键盘控制DIV





































