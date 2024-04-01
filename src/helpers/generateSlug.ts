import slugify from "slugify";

const generateSlug = (inputString: string) => {
  const trimmedString = inputString.trim();

  const slug = slugify(trimmedString, { lower: true });

  return slug;
};

export default generateSlug;
