module.exports = {
  rules: {
    "@skylib/facades/no-restricted-syntax": [
      "warn",
      {
        rules: [
          {
            message: 'Prefer "uniqueId" facade',
            selector:
              "CallExpression > MemberExpression.callee[object.name=_][property.name=uniqueId]",
            subOptionsId: "prefer-uniqueId-facade"
          }
        ]
      }
    ]
  }
};
