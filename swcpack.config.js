const Swcpack = {
  jsc: {
    parser: {
      syntax: "typescript",
      tsx: true,
      decorators: false,
      dynamicImport: true,
    },
  },
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      use: {
        // `.swcrc` can be used to configure swc
        loader: "swc-loader",
      },
    },
  ],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};

export default Swcpack;
