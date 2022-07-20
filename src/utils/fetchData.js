export const exercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "76bbf08de4msh2f8aac6041f4a00p1cc4f4jsnca82b3c93d57",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "76bbf08de4msh2f8aac6041f4a00p1cc4f4jsnca82b3c93d57",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
