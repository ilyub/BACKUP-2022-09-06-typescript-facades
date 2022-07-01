const { eslint } = require("@skylib/config");

module.exports = {
  rules: {
    "boundaries/element-types": [
      "warn",
      {
        default: "disallow",
        rules: [
          ...eslint.boundaries.elementTypes.rules,
          ...eslint.boundaries.elementTypes.createRules(
            filename => ["src1", { filename }],
            "unique-id",
            "database"
          ),
          // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
          // fixme
          {
            allow: "{src1,src2,src3,src4,src5,src6,src7}",
            from: "{mocks,tests}"
          }
        ]
      }
    ]
  }
};
