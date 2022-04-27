module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  rules: {
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/config update
    // fixme
    "@typescript-eslint/no-redeclare": "off",
    "import/export": "off"
  }
};
