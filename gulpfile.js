let gulp = require('gulp');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');
let babel = require('gulp-babel');


//启动监听 gutl为WWW下的文件夹，即可以即时预览
gulp.task("watchall",async ()=>{
	//监听html，并复制
	gulp.watch("*.html",async ()=>{
		//拷贝
		gulp.src("*.html")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\jting"));
	});
	
	//监听js，并复制  所有后缀名为.js的文件
	gulp.watch("js/*.js",async ()=>{
		//拷贝
		gulp.src("js/*.js")
//		将es6转为低版本
		.pipe(babel({
			presets:['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\jting\\js"));
	});
	
	//监听img，并复制
	gulp.watch("img/**/*",async ()=>{
		//拷贝
		gulp.src("img/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\jting\\img"));
	});
	
	//监听css，并复制
	gulp.watch("css/**/*",async ()=>{
		//拷贝
		gulp.src("css/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\jting\\img"));
	});
	
	//监听font，并复制
	gulp.watch("font/**/*",async ()=>{
		//拷贝
		gulp.src("font/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\jting\\font"));
	});
	
	//php,复制
	gulp.watch("*.php",async ()=>{
		gulp.src("*.php")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\jting"));
	});
	
	
	//sass,编译并复制
	gulp.watch("sass/**/*",async ()=>{
		gulp.src("sass/**/*")
		.pipe(sass())
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\jting\\css"));
	});
	
	
})