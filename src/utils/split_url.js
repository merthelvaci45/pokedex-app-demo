/**
 * this utility function is responsible for splitting "string" parameter by given "splitBy" character.
 * note that if type of "string" parameter is NOT string, then the function returns nothing.
 */
const splitUrl = (string, { splitBy = " " }) => {
  if (typeof string !== "string") return;
  return string.split(splitBy);
};

export default splitUrl;
