//get a document of type user and passed userId
export const userQuery = (userId) => {
  const query = `*[_type=="user" && _id=='${userId}']`;
  return query;
};
