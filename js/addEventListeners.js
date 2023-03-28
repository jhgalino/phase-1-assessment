function addEventListeners() {
  const checkboxes = document.querySelectorAll('input[type=checkbox], select');
  // const categories = document.querySelectorAll('.category>div>input');
  // const tags = document.querySelectorAll('.tags>div>input');
  // const sortBy = document.querySelectorAll('.sortBy>option');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      clearGameList();
      fetchFilteredItems(getFilterOptions()).then(data => {
        store = data;
        renderGames(data);
      });
    },
    );
  },
  );
}
