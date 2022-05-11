module.exports = {
  noRestrictedSyntax: [
    {
      message: 'Use "uniqueId" facade instead',
      selector:
        "CallExpression[callee.object.name=_][callee.property.name=uniqueId]"
    }
  ]
};
