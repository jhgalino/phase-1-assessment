async function getGamesList () {
  try {
    const data = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c40d428cdamshc9610d296a3fda7p107c53jsncebbbe3a4c5c',
      },
    });
    return await data.json();
  } catch (error) {
    return error;
  }
}

function addGameToList (game) {
  /*
  developer: "Blizzard Entertainment"
  freetogame_profile_url: "https://www.freetogame.com/overwatch-2"
  game_url: "https://www.freetogame.com/open/overwatch-2"
  genre: "Shooter"
  id: 540
  platform: "PC (Windows)"
  publisher: "Activision Blizzard"
  release_date: "2022-10-04"
  short_description: "A hero-focused first-person team shooter from Blizzard Entertainment."
  thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg"
  title: "Overwatch 2"
  */
  const gamesList = document.querySelector('.games');
  // create gamelist item
  const gamesItem = document.createElement('section');
  gamesItem.classList.add('games-item');

  // create picture > img and append to game list item
  const gamesItemPic = document.createElement('picture');
  const gamesItemPicImg = document.createElement('img');
  gamesItemPicImg.src = game.thumbnail;
  gamesItemPicImg.alt = `An image showing ${game.title}`;
  gamesItemPic.appendChild(gamesItemPicImg);
  gamesItem.appendChild(gamesItemPic);

  // create games info section
  const gamesItemInfo = document.createElement('section');
  gamesItemInfo.classList.add('games-info');

  // create game title and append to games info
  const gameTitle = document.createElement('a');
  gameTitle.href = game.freetogame_profile_url; // change later
  gameTitle.classList.add('games-title');

  const gameTitleText = document.createElement('p');
  gameTitleText.innerText = game.title;
  gameTitleText.classList.add('games-title-text');
  gameTitle.appendChild(gameTitleText);

  const gameCost = document.createElement('p');
  gameCost.innerText = 'Free';
  gameCost.classList.add('games-cost');
  gameTitle.appendChild(gameCost);

  gamesItemInfo.appendChild(gameTitle);

  // add spiel
  const gameSpiel = document.createElement('p');
  gameSpiel.innerText = game.short_description;
  gamesItemInfo.appendChild(gameSpiel);

  // add games-extra-info
  const gamesExtraInfo = document.createElement('div');

  const gamesExtraInfoLink = document.createElement('a');
  gamesExtraInfoLink.innerText = 'Add to Library';

  const gamesExtraInfoDiv = document.createElement('div');
  const gameGenre = document.createElement('p');
  gameGenre.innerText = game.genre;
  const gamePlatform = document.createElement('p');
  gamePlatform.innerText = game.platform;
  gamesExtraInfoDiv.appendChild(gameGenre);
  gamesExtraInfoDiv.appendChild(gamePlatform);

  gamesExtraInfo.appendChild(gamesExtraInfoLink);
  gamesExtraInfo.appendChild(gamesExtraInfoDiv);

  gamesItemInfo.appendChild(gamesExtraInfo);

  gamesItem.appendChild(gamesItemInfo);

  gamesList.appendChild(gamesItem);
}
