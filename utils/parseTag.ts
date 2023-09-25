import expandHierarchicalTag from "./expandHierarchicalTag";

const parseTag = (tag: string) => {
  // if tag has multiple parts in the slug (e.g. gear/computer/desktop) - it adds each part, so: gear, gear/computer, gear/computer/desktop
  if (tag.includes("/")) {
    return expandHierarchicalTag(tag);
  } else {
    return [tag];
  }
};

export default parseTag;
