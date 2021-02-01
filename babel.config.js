module.exports = function (api) {
  api.cache(false);
  const presets = [
    ["@babel/preset-typescript"],
    ["@babel/preset-env",
      {
        'corejs': {
          'version': 3
        },
        'useBuiltIns': 'entry',
        "targets": {
          "chrome": "58",
          "ie": "11"
        }
      }],
  ];
  const plugins = [
    ["@babel/proposal-class-properties", { "loose": true }],
    ["@babel/proposal-object-rest-spread"],
    ["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true }],
    ['@babel/plugin-syntax-dynamic-import']
  ];
  return {
    presets,
    plugins
  };
};
