import { client } from "@/app/lib/sanity";

export const getPopularData = async () => {
  try {
    const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'Popular']._id, categories)] {
      _id,
      name,
      description,
      price,
      images,
      price_id,
      "slug": slug.current,
      "categories": categories[]-> {
          name
      }
    }`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getNewData = async () => {
  try {
    const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'New']._id, categories)] {
      _id,
      name,
      description,
      price,
      images,
      price_id,
      "slug": slug.current,
      "categories": categories[]-> {
          name
      }
    }`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getData = async (slug) => {
  try {
    const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
      _id,
      name,
      description,
      price,
      images,
      price_id,
      "slug": slug.current,
      "categories": categories[]-> {
          name
      }
    }`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getAllData = async () => {
  try {
    const query = `*[_type == 'product'] {
      _id,
      name,
      description,
      price,
      images,
      price_id,
      "slug": slug.current,
      "categories": categories[]-> {
          name
      }
    }`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getCollectionData = async (collection) => {
  try {
    const query = `*[_type == 'product' && references(*[_type == 'category' && name == '${collection}']._id, categories)] {
    _id,
    name,
    description,
    price,
    images,
    price_id,
    "slug": slug.current,
    "categories": categories[]-> {
      name
    }
  }
  `;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};