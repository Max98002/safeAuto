"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');


const dist = "./dist/";
// const dist = "/Applications/MAMP/htdocs/test"; // Ссылка на вашу папку на сервере

gulp.task("build-js", () => {
  return gulp.src("./src/js/main.js")
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'script.js'
      },
      watch: false,
      devtool: "source-map",
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  debug: true,
                  corejs: 3,
                  useBuiltIns: "usage"
                }]
              ]
            }
          }
        }]
      }
    }))
    .pipe(gulp.dest(dist))
    .on("end", browsersync.reload);
});

gulp.task("build-prod-js", () => {
  return gulp.src("./src/js/main.js")
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'script.js'
      },
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  corejs: 3,
                  useBuiltIns: "usage"
                }]
              ]
            }
          }
        }]
      }
    }))
    .pipe(gulp.dest(dist));
});

gulp.task('icons', function () {
  return gulp.src("src/assets/icons/**/*")
    .pipe(gulp.dest(dist + "/assets/icons"))
    .pipe(browsersync.stream());
});

gulp.task('images', function () {
  return gulp.src("src/assets/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest(dist + "/assets/img"))
    .pipe(browsersync.stream());
});

gulp.task('fonts', function () {
  return gulp.src('src/assets/font/**/*')
    .pipe(gulp.dest(dist + "/assets/fonts"))
    .pipe(browsersync.stream());
});

gulp.task("copy-html", () => {
  return gulp.src("src/*.html")
    // .pipe(htmlmin({
    //   collapseWhitespace: true
    // }))
    .pipe(gulp.dest(dist))
    .pipe(browsersync.stream());
});

gulp.task('styles', function () {
  return gulp.src("src/assets/sass/**/*.+(scss|sass)")
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(rename({
      suffix: '.min',
      prefix: ''
    }))
    .pipe(autoprefixer())
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest(dist + "assets/css"))
    .pipe(browsersync.stream());
});

gulp.task("watch", () => {
  browsersync.init({
    server: {
      baseDir: "./dist/",
      serveStaticOptions: {
        extensions: ["html"]
      }
    },
    port: 4000,
    notify: true
  });

  gulp.watch("./src/*.html", gulp.parallel("copy-html"));
  gulp.watch("./src/assets/icons/**/*").on('all', gulp.parallel('icons'));
  gulp.watch("./src/assets/img/**/*").on('all', gulp.parallel('images'));
  gulp.watch("./src/assets/fonts/**/*").on('all', gulp.parallel('fonts'));
  gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
  gulp.watch("./src/assets/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
});

gulp.task("build", gulp.parallel("copy-html", "icons", "images", "fonts", "build-js", "styles"));

gulp.task("default", gulp.parallel("watch", "build"));