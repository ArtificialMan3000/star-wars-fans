const { src, dest, task } = require('gulp');

// Копирует production build в папку doc для github pages
task('docs', (done) => {
    src('./build/**/**').pipe(dest('./docs'));
    done();
});
