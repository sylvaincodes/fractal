module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  env: {
    test: {
      presets: ["next/babel"],
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    },
  },
};
