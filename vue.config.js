const { defineConfig } = require('@vue/cli-service');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = defineConfig({
   publicPath: '/', // Asegura que los recursos se carguen correctamente en producción
   transpileDependencies: true,
   configureWebpack: (config) => {
      // Filtra CaseSensitivePathsPlugin para evitar que se use
      config.plugins = config.plugins.filter(
         (plugin) => !(plugin instanceof CaseSensitivePathsPlugin)
      );
   },
});