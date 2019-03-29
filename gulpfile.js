var gulp = require('gulp');
var notify = require('gulp-notify');
var shell = require('gulp-shell');
var project = require('path').posix.basename(__dirname);

gulp.task('phpcs', () => {
  gulp.watch(['classes/**/*.php'], (e, a) => {
    return gulp.src('korean-spell-checker.php')
      .pipe(shell('npm run phpcs'));
  });
});

gulp.task('phpunit', () => {
  gulp.watch(['classes/**/*.php'], (e, a) => {
    return gulp.src('korean-spell-checker.php')
      .pipe(shell('npm run phpunit'));
  });
});
