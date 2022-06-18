module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  rules: {
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
    // fixme
    "@typescript-eslint/no-redeclare": "off",
    // eslint-disable-next-line no-warning-comments -- Postponed
    // fixme
    "boundaries/element-types": "off",
    "import/export": "off"
  }
};
