fetch(
  'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=Albert%20Einstein&format=json&origin=*'
)
  .then((response) => response.json())
  .then((data) => {
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    const extract = pages[pageId].extract;
    console.log(extract);
  })
  .catch((error) => console.error('Error fetching data: ', error));
