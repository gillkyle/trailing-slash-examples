const path = require("path");
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: `/test-path`,
    component: path.resolve(`./src/templates/test.js`),
  });
};
