const { eslint } = require("@skylib/config/api");

const consistentImport = eslint.rules["@skylib/consistent-import"];

module.exports = {
  rules: {
    "@skylib/consistent-import": [
      "warn",
      {
        sources: [
          {
            _id: "src",
            localName: "facades",
            source: "@skylib/facades/src",
            wildcard: true
          },
          ...consistentImport.sources
        ]
      }
    ],
    "@skylib/no-sibling-import": [
      "warn",
      {
        rules: [
          {
            filesToLint: ["./*"],
            hierarchy: [["./jest.config"], ["./jest.config.fast"]]
          },
          {
            filesToLint: ["./src/*"],
            hierarchy: [["./unique-id"], ["./database"]]
          }
        ]
      }
    ]
  }
};
