var gulp = require('gulp')
var gutil = require('gulp-util')
var cache = require('gulp-cached')
var _debug = require('gulp-debug')

function debug(title) {
    return _debug({
        title
    })
}

function onFileChange(event) {
    gutil.log('File ' + gutil.colors.green(event.path) + ' was ' + event.type + ', running tasks...')
}

gulp.task('doc:loader', function() {
    var globs = ['../brix-loader/README.md']
    gulp.watch(globs, function(event) {
        onFileChange(event)
        gulp.src(globs).pipe(cache('doc:loader')).pipe(debug('doc:loader'))
            .pipe(gulp.dest('../brix-book/brix-loader'))
    })
})
gulp.task('doc:base', function() {
    var globs = ['../brix-base/README.md']
    gulp.watch(globs, function(event) {
        onFileChange(event)
        gulp.src(globs).pipe(cache('doc:base')).pipe(debug('doc:base'))
            .pipe(gulp.dest('../brix-book/brix-base'))
    })
})

gulp.task('doc:event', function() {
    var globs = ['../brix-event/README.md']
    gulp.watch(globs, function(event) {
        onFileChange(event)
        gulp.src(globs).pipe(cache('doc:event')).pipe(debug('doc:event'))
            .pipe(gulp.dest('../brix-book/brix-event'))
    })
})

gulp.task('doc:components', function() {
    var globs = ['../brix-components/src/**/README.md','../brix-components/src/**/demo.html']
    gulp.watch(globs, function(event) {
        onFileChange(event)
        gulp.src(globs).pipe(cache('doc:components')).pipe(debug('doc:components'))
            .pipe(gulp.dest('../brix-book/brix-components'))
    })
})
gulp.task('doc:release', function() {
    var globs = ['../brix-release/CHANGELOG.md']
    gulp.watch(globs, function(event) {
        onFileChange(event)
        gulp.src(globs).pipe(cache('doc:release')).pipe(debug('doc:release'))
            .pipe(gulp.dest('../brix-book/brix-release'))
    })
})

gulp.task('doc', ['doc:loader', 'doc:base', 'doc:event', 'doc:components', 'doc:release'])