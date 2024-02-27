const fetch = require("cross-fetch");
const { response } = require("express");

const getAnime = async (req, res = response) => {
  var query = `
query ($id: Int, $page: Int, $perPage: Int, $serach: String) {
    Page(page: $page, perPage: $perPage){
        pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
        }
        media(id: $id, search: $search) {
            title {
                english
                romaji
            }
            description
            coverImage {
                extraLarge
                large
                medium
                color
            }
        }
    }

}`;

  var variables = {
    page: page,
    perPage: 10,
  };

  const [page, setPage] = useState(1);

  const ANILIST_URL = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };

  const data = fetch(url, options)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError);

  function handleResponse(response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json);
    });
  }

  function handleData(data) {
    console.log(data);
  }

  function handleError(error) {
    alert("Error, check console");
    console.error(error);
  }
};
module.exports = {
  getAnime,
};
