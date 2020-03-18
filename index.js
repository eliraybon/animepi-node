const axios = require('axios');

const AnimePI = (function() {
  const URL = "https://animepi.herokuapp.com/api/anime";

  const findById = async function(id) {
    const url = URL + `/${id}`;
    return axios.get(url)
      .then(res => res.data);
  }

  const find = async function(params) {
    let url = URL + '?';

    if (typeof params === 'string') {
      url += params;
    } else if (typeof params === 'object') {
      let addedOne = false;
      for (const key in params) {
        addedOne = true;
        const value = params[key];
        if (addedOne) url += '&';
        url += `${key}=${value}`;
      }
    }

    return axios.get(url)
      .then(res => res.data);
  }

  return {
    findById,
    find
  };
}());

module.exports = AnimePI;