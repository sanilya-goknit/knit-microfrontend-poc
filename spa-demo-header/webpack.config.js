const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "knit-mf-test",
    projectName: "header",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
  devServer: {
   host: 'localhost',
    port: 8081,
    historyApiFallback: true,
  },
    // modify the webpack config however you'd like to by adding to this object
  });
};
