// Karma configuration
// Generated on Sat Oct 17 2015 16:14:18 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],

    plugins: ['karma-mocha',
    'karma-chai',
    'karma-sinon',
    'karma-chrome-launcher'],

    // list of files / patterns to load in the browser
    files: [
      '../lib/ionic/js/ionic.bundle.js',
      '../lib/angular/angular.js',
      '../lib/angular-mocks/angular-mocks.js',
      '../lib/angular-resource/angular-resource.js',
      '../lib/parse/parse.min.js',
      '../js/ios-webview-patch.js',
      '../js/app.js',
      '../js/services.js',
      '../js/preGameControllers.js',
      '../js/inGameControllers.js',
      '../js/createGameControllers.js',
      '../js/directives.js',
      '../js/routes.js',
      'controllersTest.js',
      'servicesTest.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
