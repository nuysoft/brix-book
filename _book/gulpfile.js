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
    var title = this.seq.slice(-1)[0]
    var globs = ['../brix-loader/README.md']
    gulp.watch(globs, function(event) {
        onFileChange(event)
        gulp.src(globs).pipe(cache(title)).pipe(debug(title))
            .pipe(gulp.dest('../brix-book/brix-loader'))
    })
})
gulp.task('doc:base', function() {
    var title = this.seq.slice(-1)[0]
    var globs = ['../brix-base/README.md']
    gulp.watch(globs, function(event) {
        onFileChange(event)
        gulp.src(globs).pipe(cache(title)).pipe(debug(title))
            .pipe(gulp.dest('../brix-book/brix-base'))
    })
})

gulp.task('doc:event', function() {
    var title = this.seq.slice(-1)[0]
    var globs = ['../brix-event/README.md']
    gulp.watch(globs, function(event) {
        onFileChange(event)
        gulp.src(globs).pipe(cache(title)).pipe(debug(title))
            .pipe(gulp.dest('../brix-book/brix-event'))
    })
})

gulp.task('doc:components', function() {
    var title = this.seq.slice(-1)[0]
    var globs = [
        '../brix-components/src/**/README.md',
        '../brix-components/src/**/demo.html',
        '../brix-components/src/**/examples.md',
        '../brix-components/src/**/examples.html'
    ]
    gulp.watch(globs, function(event) {
        onFileChange(event)
        gulp.src(globs).pipe(cache(title)).pipe(debug(title))
            .pipe(gulp.dest('../brix-book/brix-components'))
    })
})
gulp.task('doc:release', function() {
    var title = this.seq.slice(-1)[0]
    var globs = ['../brix-release/CHANGELOG.md']
    gulp.watch(globs, function(event) {
        onFileChange(event)
        gulp.src(globs).pipe(cache(title)).pipe(debug(title))
            .pipe(gulp.dest('../brix-book/brix-release'))
    })
})

gulp.task('doc', ['doc:loader', 'doc:base', 'doc:event', 'doc:components', 'doc:release'])