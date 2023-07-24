const webp = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webp.DefinePlugin({
      "process.env.name": JSON.stringify("Production"),
    }),
  ],
};
