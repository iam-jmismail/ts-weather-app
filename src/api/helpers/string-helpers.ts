/**
 * Capitalize first word
 * Eg : title --> Title
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Converts given string to title case
 * Eg : title case --> Title Case
 */

export const toTitleCase = (str: string): string => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

/**
 * Truncates given text to given length
 * Eg : title case, 2 --> ti...
 */

export const truncateText = (str: string, maxLength: number): string => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
};

/**
 * Converts given string to slug
 * Eg : title case 01 -> title-case-01
 */

export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

/**
 * Strips html tags in given string
 * Eg : <b> test </b> -> test
 */

export const stripTags = (html: string): string => {
  return html.replace(/(<([^>]+)>)/gi, "");
};
