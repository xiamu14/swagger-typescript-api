const { generateApi } = require("../src");
const path = require("path");
generateApi({
  url: "https://fldapi.yocdev.com/api-docs-json",
  output: path.resolve(__dirname, "./collection"),
  //   name: "pet",
  httpClientType: "taro",
  modular: true,
});
