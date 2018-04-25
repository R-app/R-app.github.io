var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

/*removed "**\ from before the * in the below line*/
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
    console.log("CSS subfolder change detected")
  });
  watch('./app/assets/styles/**/*.scss', function(){
    gulp.start('cssInject');
    console.log("SCSS subfolder change detected")
  });
  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  })


  /*updates CSS without a refresh1
  src is your top layer css file, after gulp makes the changes
  [styles] task is a dependency, and must be completed before cssInject actuates
  */

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});

/*
Open multiple screens and watch updates on one appear on another- this allows for easy multi-browser troubleshooting
UI External- if on same wifi signal, you can look at your file on mobile!!!
*/
