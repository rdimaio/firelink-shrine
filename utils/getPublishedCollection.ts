import { getCollection, type CollectionEntry, type C } from "astro:content";

const getPublishedCollection = async (collectionName: string ) => {
    return await getCollection(collectionName, ({ data }) => data.publish);
  };

export default getPublishedCollection;