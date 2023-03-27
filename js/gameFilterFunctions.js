function getFilterOptions () {
  let platforms = document.querySelectorAll('.platform>div>input:checked');
  let categories = document.querySelectorAll('.category>div>input:checked');
  let tags = document.querySelectorAll('.tags>div>input:checked');
  let sortBy = document.querySelectorAll('.sortBy>option');

  platforms = Array.from(platforms).map(item => item.name);

  categories = Array.from(categories).map(item => item.name);

  tags = Array.from(tags).map(item => item.name);

  sortBy = Array.from(sortBy)
    .filter(item => item.selected)
    .map(item => item.value);

  return {
    platforms,
    categories,
    tags,
    sortBy,
  };
}

async function fetchFilteredItems (filters) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c40d428cdamshc9610d296a3fda7p107c53jsncebbbe3a4c5c',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
  };

  let platform;
  if (filters.platforms.length === 2) {
    platform = '&platform=all';
  } else if (filters.platforms === 1) {
    platform = `&platform=${filters.platforms[0]}`;
  } else {
    platform = '';
  }

  const sort = filters.sortBy[0] ? `&sort-by=${filters.sortBy[0]}` : '';

  const tags = filters.tags.concat(filters.categories).length
    ? filters.tags.concat(filters.categories).join('.')
    : '';

  const data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/
api/filter?tag=${tags}&${platform}&${sort}`, options);

  return await data.json();
}
