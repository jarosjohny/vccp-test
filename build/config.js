var util = require('gulp-util');

module.exports = {
    production: !!util.env.production,

    /*
    * Ftp move folder from your local disk to a remote ftp destination.
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    deploy: {
        src: './www/**/*',
        host: 'host',
        user: 'user',
        pass: 'pass',
        port: '21', // Default
        remotePath: '/testDeploy'
    },
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /*
    * Root assets of project
    * * * * * * */
    root: {
        src: './assets',
        dest: './www'
    },

    /*
     * Tasks settings
     * * * * * * */
    tasks: {
        styles: {
            src: 'sass',
            dest: 'css',
            files: [
                '/**/*'
            ],
            sass: {
                includePaths: [
                    "node_modules"
                ]
            },
            extensions: [
                '*'
            ]
        },
        scripts: {
            src: 'js',
            dest: 'js',
            files: [
                'assets/js/animation/default.js',
                'assets/js/main.js'
            ],
            entries: [
                "*"
            ],
            featureDetects: [
                "canvas",
                "css/animations",
                "css/pointerevents",
                "css/transforms3d",
                "css/transitions",
                "css/transformstylepreserve3d",
                "requestanimationframe",
                "svg",
                "touchevents"
            ],
            extensions: [
                '*'
            ]
        },
        images: {
            src: 'images',
            dest: 'images',
            files: [
                '/**/*'
            ],
            extensions: [
                '*'
            ]
        }
    },

    /* Sass compile */
    sass: {
        src: './assets/sass/index.scss',
        dest: './www/css',
        plugins: {
            rename: {
                basename: 'style',
                suffix: '.min'
            }
        }
    },

    scripts: {
        src: [
            './assets/js/external/nette.ajax.js',
            './assets/js/external/liveFormValidation.js',
            './assets/js/external/scroll.js',
            './assets/js/layout/inputs.js',
            './assets/js/layout/tabs.js',
            './assets/js/layout/navigation.js',
            './assets/js/layout/countdown.js',
            './assets/js/app.js'
        ],
        dest: './www/js'
    },

    /* BrowserSync */
    browserSync: {
        src: ['./_dist/public/css/*.css']
    }
};
