const expandHierarchicalTag = (tag: string) => {
  let tags: string[] = [];
  const tagComponents: string[] = tag.split("/");
  tagComponents.forEach((_, index) => {
    tags = tags.concat(tagComponents.slice(0, index + 1).join("/"));
  });
  return tags;
};

export default expandHierarchicalTag;
