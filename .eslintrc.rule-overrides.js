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
          )
        ]
      }
    ]
  }
};
