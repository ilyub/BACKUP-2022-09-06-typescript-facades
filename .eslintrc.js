module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  rules: { "@typescript-eslint/no-redeclare": "off", "import/export": "off" }
};
