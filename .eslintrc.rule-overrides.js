const { eslint } = require("@skylib/config/api");

const consistentImport = eslint.rules["@skylib/consistent-import"];

module.exports = {
  rules: {
    "@skylib/consistent-import": [
      "warn",
      {
        sources: [
          ...consistentImport.sources,
          {
            _id: "src",
            localName: "facades",
            source: "@skylib/facades/src",
            wildcard: true
          }
        ]
      }
    ],
    "@skylib/no-sibling-import": [
      "warn",
      {
        folders: [
          {
            filesToLint: ["./*"],
            levels: [["./jest.config"], ["./jest.config.fast"]]
          },
          {
            filesToLint: ["./src/*"],
            levels: [["./unique-id"], ["./database"]]
          }
        ]
      }
    ]
  }
};
