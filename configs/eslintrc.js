module.exports = {
  overrides: [
    {
      files: "!*.js",
      rules: {
        "@skylib/custom/facades/prefer-uniqueId-facade": [
          "warn",
          {
            message: 'Prefer "uniqueId" facade',
            selector:
              "CallExpression > MemberExpression.callee[object.name=_][property.name=uniqueId]"
          }
        ]
      }
    }
  ]
};
