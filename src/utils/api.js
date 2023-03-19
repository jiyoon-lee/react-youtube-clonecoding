export const fetchData = async (api, config) => {
  const response = await fetch(
    `${process.env.REACT_APP_API}/${api}?` +
      new URLSearchParams({
        ...config,
        key: process.env.REACT_APP_KEY,
        maxResults: 25,
      })
  );
  return await response.json();
};
