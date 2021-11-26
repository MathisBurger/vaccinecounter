const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore.configureWatchOptions((watchOptions) => {
  watchOptions.poll = 250; // check for changes every 250 milliseconds
});

Encore.setOutputPath('public/build/')
  .setPublicPath('/build')

  /*
   * ENTRY CONFIG
   */
  .addEntry('app', './assets/App.tsx')
  .splitEntryChunks()
  //.enableSingleRuntimeChunk()
  .disableSingleRuntimeChunk()

  /*
   * FEATURE CONFIG
   */
  .cleanupOutputBeforeBuild()

  .addRule({
    test: /\.png/,
    type: 'asset/resource',
  })
  .addRule({
    test: /\.jpg/,
    type: 'asset/resource',
  })
  .addRule({
    test: /locales/,
    loader: '@alienfast/i18next-loader',
    options: { basenameAsNamespace: true },
  })

  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())

  .configureBabel((config) => {
    config.plugins.push('@babel/plugin-proposal-class-properties');
  })
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = 3;
  })

  .enableTypeScriptLoader()
  .enableSassLoader()
  .enableReactPreset();

module.exports = Encore.getWebpackConfig();
