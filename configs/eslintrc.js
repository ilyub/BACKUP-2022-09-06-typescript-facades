module.exports = {
  rules: {
    "@skylib/facades/no-restricted-syntax": [
      "warn",
      {
        rules: [
          {
            _id: "prefer-uniqueId-facade",
            message: 'Prefer "uniqueId" facade',
            selector:
              "CallExpression > MemberExpression.callee[object.name=_][property.name=uniqueId]"
          }
        ]
      }
    ]
  }
};
