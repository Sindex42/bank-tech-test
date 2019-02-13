module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/*.js',
      'spec/unit/*.js',
      'spec/feature/*.js'
    ],
    browsers: ['Chrome'],
    reporters: ['coverage'],
    preprocessors: { 'src/*.js': ['coverage'] },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  })
}
