module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`;
  const contentPath = themeOptions.contentPath || `content/notes`;
  const assetPath = themeOptions.assetPath || `content/assets`;

  return {
    basePath,
    contentPath,
    assetPath,
  };
};
