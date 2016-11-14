![Gulp官网图标](http://upload-images.jianshu.io/upload_images/1256687-749d225f2ad81e62.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

前段时间一直忙于日常事务，疏于学习新知识，适逢周末，室外天气正好，阴+雾霾，私想陋室充电为佳，特此记之。    --2016.11.13

#目录
- 1.Gulp是什么？
- 2.Gulp能做什么？
- 3.如何使用Gulp？
- 4.Gulp与同类工具相比优势/劣势
- 5.一点小tips

___
#1.Gulp是什么？
gulp，全名gulp.js，是一款基于流的自动化工具。

**gulp是前端开发过程中对代码进行自动化构建的利器。它不仅能对资源进行优化，而且在开发过程中能够通过配置自动完成很多重复的任务，让我们可以专注于代码，提高工作效率。**

___
#2.Gulp能做什么？
+  压缩静态资源（HTML, CSS, JS等）
+  变更静态资源
+  给静态资源添加 md5（文件指纹）
+  修改预处理样式后自动编译（SASS，Less）
+  合并雪碧图（CSS Sprites）
+  自动刷新浏览器
+  组件化头部底部（include html）
……

这类工作还可以列举很多，在前端工作流出现之前，这些工作都由人力完成，而这些工作往往比写业务本身更加费时，而交给了 Gulp 这类工具，则可以释放这些人力。

Gulp 这类工具的原理很简单，都是提供文件的输入、输出操作，本身功能很少。但之所以能帮忙开发者解决问题，是因为 Gulp 背后有大量已经写好的插件，开发者只需引用这些插件，写少量的代码则可以解决问题。例如需要合并项目中所有 JavaScript 库，可以这样处理：
<pre>var concat = require('gulp-concat'); 
gulp.task('scripts', function() { 
    return gulp.src('./lib/*.js') 
    .pipe(concat('all.js')) 
    .pipe(gulp.dest('./dist/'));
});</pre>

___
#3.如何使用Gulp？

##3.1安装Gulp
先安装Node，安装完后自带npm，打开终端：
1.使用npm全局安装:
<code>npm install -g gulp</code>
2.再在项目中本地安装一次（必须，具体原因待考察）:
<code>npm install gulp --save-dev</code>

##3.2Gulp语法
Gulp语法很简单，一共就5句，分别是：
- `gulp.dest(path[, options]) - 定义输出文件地址`
- `gulp.src(globs[, options]) - 定义输入文件地址`
- `gulp.task(name [, deps, fn]) - 定义任务处理函数`
- `gulp.watch(glob[, opts, cb]) - 定义要监听改动的文件`
- `gulp.watch(glob[, opts], tasks) - 功能同上`

示例：
<pre>var concat = require('gulp-concat');   //声明要调用的模块
gulp.task('scripts', function() {   //定义一个任务task，命名为'script'
    return gulp.src('./lib/*.js')   //先找到要处理的代码文件，给一个path
    .pipe(concat('all.js'))   //采用上面引入的模块，处理好的文件叫做'all.js'
    .pipe(gulp.dest('./dist/'));  //设置处理后的文件的存放位置
});</pre>

___
#4.Gulp与同类工具相比优势/劣势（以grunt为例）

![Grunt VS Gulp](http://upload-images.jianshu.io/upload_images/1256687-21edf3abddbbdfec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

原文链接：[gulp VS grunt](https://zhuanlan.zhihu.com/p/20309820)
作者结论：Gulp更佳，回调语法+插件使用方式比较统一
___
#5.一点小tips

>####1.下载缓慢/卡住：

由于众所周知的原因，国内到 [npm](http://www.sheyilin.com/tag/npm/) 服务器的连接很不稳定，如果你有V了个PN大可不必担心，也可通过设置 npm 代理服务器的方式访问：**
#########设置与删除 npm 代理
<pre>
// 设置代理
npm config set proxy="[http://127.0.0.1:1080](http://127.0.0.1:1080/)"
// 删除代理
npm config delete proxy
</pre>
推荐一个简单的方案：**[使用淘宝 npm 镜像](http://npm.taobao.org/) **
**“这是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。” **—— 为淘宝团队点赞
<pre>更换 npm 为淘宝源
npm config set registry="[https://registry.npm.taobao.org](https://registry.npm.taobao.org/)"
npm config set disturl [https://npm.taobao.org/dist](https://npm.taobao.org/dist)</pre>

>####2.定义区分：

- node , 是javascript语言的环境和平台，
- npm , bower 是一类，包管理，
- webpack , browserify , 是一类，javascript预编译模块的方案，
- requirejs , seajs , 是一类, 基于commonjs，amd，cmd，umd 之类的模块类包加载方案的框架，
- grunt , gulp , 前端工具，合并、压缩、编译 sass/less，browser 自动载入资源，
- react , angular , vue , backbone , 是一类，mvc , mvvm , mvp 之类的前端框架，
- jquery , zepto , prototype , 是一类，前端 DOM , BOM 类库 ，
- ext , yui , kissy , dojo , 是一类，前端应用组件，
- underscore , 函数式编程库。

本分类来源于知乎用户[春江一条小鱼](https://www.zhihu.com/people/kermit-hsiang)的回答：[前端构建工具 Gulp / browserify/ webpack / npm ?](https://www.zhihu.com/question/37694275)