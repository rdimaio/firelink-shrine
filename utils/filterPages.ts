import parseTag from "./parseTag";
import type { CollectionEntry } from "astro:content";

const pageFieldHasValue = (page: CollectionEntry<"any">, field: string, filterValue: any) => {
    const fieldToCheck = page.data[field];
    console.log(fieldToCheck)
    if (Array.isArray(fieldToCheck)) {
        const matches = fieldToCheck.filter(entry => entry.slug === filterValue)
        if (matches.length > 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return fieldToCheck == filterValue
    }
};

const filterPages = (pages: CollectionEntry<"any">[], field: string, filterValue: any) =>
  pages.filter(page => pageFieldHasValue(page, field, filterValue));

export default filterPages;
