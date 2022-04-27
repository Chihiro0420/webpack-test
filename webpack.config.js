//  webpack setting

const path = require('path')  // importing node module

module.exports = {
  mode: "development",
  // entry: ["./src/main.js", "./src/lib/sub.js"],
  entry: {
    main: "./src/main.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js"  // change folder name to "public"
  }

};

// app & sub => File name
