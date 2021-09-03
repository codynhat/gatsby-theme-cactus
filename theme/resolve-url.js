const slugify = require("slugify");
module.exports = (title) => {
  const segments = title.split("/");
  const slugifiedTitle = slugify(segments.pop(), { lower: true });
  return `${segments.join("/")}/${slugifiedTitle}`;
};
