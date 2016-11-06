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
// window.onload = function () {
//     var oBox = document.getElementById('box');
//     var oLeft = oTop = oRight = oBottom = false;
//     //设置计时器
//     setInterval(function() {
//         if(oLeft) {
//             oBox.style.left = oBox.offsetLeft - 10 + 'px';
//         } else if(oRight) {
//             oBox.style.left = oBox.offsetLeft + 10 + 'px';
//         } else if(oTop) {
//             oBox.style.top = oBox.offsetTop - 10 + 'px';
//         } else if(oBottom) {
//             oBox.style.top = oBox.offsetTop + 10 + 'px';
//         }
//         limit();
//     },30)
//     //键盘按下事件
//     document.onkeydown = function() {
//         var event = event || window.event;
//         var iCtrl = event.ctrlKey;
//         switch (event.keyCode) {
//             case 37:
//                 oLeft = true;
//                 break;
//             case 38:
//                 if(!iCtrl) {
//                     oTop = true;
//                 } else {
//                     oBox.style.width = oBox.offsetWidth * 1.5 + 'px';
//                     oBox.style.height = oBox.offsetHeight * 1.5 + 'px';
//                     oBox.style.left = oBox.offsetLeft - oBox.offsetWidth * 0.25 + 'px';
//                     oBox.style.top = oBox.offsetTop - oBox.offsetHeight * 0.25 + 'px';
//                 }
//                 break;
//             case 39:
//                 oRight = true;
//                 break;
//             case 40:
//                 if(!iCtrl) {
//                     oBottom = true;
//                 } else {
//                     oBox.style.width = oBox.offsetWidth / 1.5 + 'px';
//                     oBox.style.height = oBox.offsetHeight / 1.5 + 'px';
//                     oBox.style.left = oBox.offsetLeft + oBox.offsetWidth * 0.25 + 'px';
//                     oBox.style.top = oBox.offsetTop + oBox.offsetHeight * 0.25 + 'px';
//                 }
//                 break;
//             case 49:
//                 iCtrl && (oBox.style.backgroundColor = 'green');
//                 break;
//             case 50:
//                 iCtrl && (oBox.style.backgroundColor = 'yellow');
//                 break;
//             case 51:
//                 iCtrl && (oBox.style.backgroundColor = 'blue');
//                 break;
//         }
//     }
//     //键盘抬起事件
//     document.onkeyup = function() {
//         var event = event || window.event;
//         switch (event.keyCode) {
//             case 37:
//                 oLeft = false;
//                 break;
//             case 38:
//                 oTop = false;
//                 break;
//             case 39:
//                 oRight = false;
//                 break;
//             case 40:
//                 oBottom = false;
//                 break;
//         }
//     }
//     //防止元素溢出函数
//     function limit() {
//         var doc = [document.documentElement.clientWidth,document.documentElement.clientHeight];
//         //防止左侧溢出
//         oBox.offsetLeft <=0 && (oBox.style.left = 0);
//         //防止上方溢出
//         oBox.offsetTop <=0 && (oBox.style.top = 0);
//         //防止右侧溢出
//         doc[0] - oBox.offsetLeft - oBox.offsetWidth <= 0 && (oBox.style.left = doc[0] - oBox.offsetWidth + 'px');
//         //防止底部溢出
//         doc[1] - oBox.offsetTop - oBox.offsetHeight <= 0 && (oBox.style.top = doc[1] - oBox.offsetHeight + 'px');
//     }
// }

// 16.计时器控制Div闪烁
// window.onload = function () {
//     var oBox = document.getElementById('box');
//     var timer = null;
//     oBox.onclick = function () {
//         var i  = 0;
//         clearInterval(timer);
//         timer = setInterval(function () {
//             oBox.style.display = i++ % 2 ? 'none' : 'block';
//             i > 6 && clearInterval(timer);
//         }, 100)
//     }
// }

// 17.完美拖拽
// window.onload = function () {
//     var oBox = document.getElementById('box');
//     var oH2 = oBox.getElementsByTagName('h2')[0];
//     var oA = oBox.getElementsByTagName('a')[0];
//     var aSpan = oBox.getElementsByTagName('span');
//     var disX = disY = 0;
//     var bDrag = false;
//     var aPos = [{x:oBox.offsetLeft, y:oBox.offsetTop}];

//     //鼠标按下，激活拖拽
//     oH2.onmousedown = function(event) {
//         var event = event || window.event;
//         bDrag = true;
//         disX = event.clientX - oBox.offsetLeft;
//         disY = event.clientY - oBox.offsetTop;

//         aPos.push({x:oBox.offsetLeft, y:oBox.offsetTop});

//         this.setCapture && this.setCapture();  //这句话什么意思？设置鼠标捕获？

//         return false;  //用来阻止执行默认的行为
//     };

//     //拖拽开始
//     document.onmousemove = function(event) {
//         if(!bDrag) return;  //这里可以用短路运算吗？不可以。这里用return false 也可以？
//         var event = event || window.event;
//         var iL = event.clientX - disX;
//         var iT = event.clientY - disY;
//         var maxL = document.documentElement.clientWidth - oBox.offsetWidth;
//         var maxT = document.documentElement.clientHeight - oBox.offsetHeight;

//         // 将元素限定在网页中，这里用if写也不错，三目运算不一定有多高明，就是看起来高端~
//         iL = iL < 0 ? 0 : iL;
//         iL  = iL > maxL ? maxL : iL;

//         iT = iT < 0 ? 0 : iT;
//         iT  = iT > maxT ? maxT : iT; 

//         // if(iL < 0) {
//         // 	iL = 0;
//         // } else if(iL > maxL) {
//         // 	iL = maxL;
//         // }

//         //通过监听鼠标位置，设置元素位置
//         oBox.style.marginTop = oBox.style.marginLeft = 0;  //因为居中用到margin的缘故，所以要把margin恢复
//         oBox.style.left = iL + 'px';
//         oBox.style.top = iT + 'px';

//         //将每次记录的位置保存成对象放置在全局数组aPos中
//         aPos.push({x:iL, y:iT});

//         //每次移动读取位置
//         status();

//         return false;   
//     };

//     //鼠标释放，结束拖拽
//     document.onmouseup = window.onblur = oH2.onlosecapture = function() {
//         bDrag = false;
//         oH2.releaseCapture && oH2.releaseCapture();  //没见过这方法，还有上面的setCapture.
//         status();
//     };

//     //回放拖动轨迹
//     oA.onclick = function() {
//         if(aPos.length == 1) return;
//         var timer = setInterval(function() {
//             var tmpPos = aPos.pop();  //pop()删除数组最后一个元素并将该元素返回给tmpPos
//             tmpPos ? (oBox.style.left = oPos.x + 'px', oBox.style.top = oPos.y + 'px', status()) : clearInterval(timer);
//         }, 30);

//         this.focus = false;  //去除链接虚线

//         return false;
//     }
//     //阻止冒泡
//     oA.onmousedown = function (event) {
//         (event || window.event).cancelBubble = true;
//     };

//     //监听状态函数
//     function status() {
//         aSpan[0].innerHTML = bDrag;
//         aSpan[1].innerHTML = oBox.offsetTop;
//         aSpan[2].innerHTML = oBox.offsetLeft;
//     }

//     //初始调用
//     status();
// }





































