module.exports = {
  rules: {
    "@skylib/no-restricted-syntax/prefer-uniqueId-facade": [
      "warn",
      {
        message: 'Prefer "uniqueId" facade',
        selector:
          "CallExpression > MemberExpression.callee[object.name=_][property.name=uniqueId]"
      }
    ]
  }
};
