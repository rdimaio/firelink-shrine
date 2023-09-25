const updateTagMap = (tag: string, tagsWithUsages: Map<string, number>) => {
  if (!tagsWithUsages.has(tag)) {
    tagsWithUsages.set(tag, 1);
  } else {
    const currentTagCount = tagsWithUsages.get(tag);
    if (currentTagCount) {
      tagsWithUsages.set(tag, currentTagCount + 1);
    }
  }
  return tagsWithUsages;
};

const getTagsWithUsages = (
  tags: string[],
  tagsWithUsages: Map<string, number>
) => {
  tags.forEach(tag => updateTagMap(tag, tagsWithUsages));
  return tagsWithUsages;
};

export default getTagsWithUsages;
