module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["module:react-native-dotenv",  {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env",
        "blocklist": null,
        "allowlist": null,
        "unsafeAllowModules": [], // The correct option name is "unsafeAllowModules"
        "safe": false,
        "allowUndefined": false,
        "verbose": false
      }],
      [
        "module-resolver", // Wrap the module-resolver configuration in a pair of brackets.
        {
          "extensions": [".tsx", ".ts", ".js", ".json"]
        }
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
