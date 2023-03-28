function search (term) {
  term = term.toLowerCase();
  let filtered = store.filter(item => item.title.toLowerCase().includes(term));
  renderGames(filtered);
}

function prepareSearch () {
  const searchBox = document.querySelector("input[name='search']");
  searchBox.addEventListener('input', () => search(searchBox.value));
}
