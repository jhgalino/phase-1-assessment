async function getGamesList() {
  try {
    return await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c40d428cdamshc9610d296a3fda7p107c53jsncebbbe3a4c5c',
      },
    });
  } catch (error) {
    return error;
  }
}
