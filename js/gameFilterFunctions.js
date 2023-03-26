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

