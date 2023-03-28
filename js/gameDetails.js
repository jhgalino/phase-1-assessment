function getGameFromUrl () {
  const url = window.location.href;
  const urlParamString = url.slice(url.indexOf('?'));
  const params = new URLSearchParams(urlParamString);
  return params.get('game');
}

async function fetchGameDetails (id) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c40d428cdamshc9610d296a3fda7p107c53jsncebbbe3a4c5c',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
  };

  const data = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
  return await data.json();
}

function renderGameDetails (gameDetails) {
  document.title = gameDetails.title;
  const thumbnail = document.querySelector('.thumbnail');
  thumbnail.src = gameDetails.thumbnail;

  const title = document.querySelector('.title');
  title.textContent = gameDetails.title;

  const aboutTitle = document.querySelector('.about>h2');
  const aboutContent = document.querySelector('.about>p');
  aboutTitle.textContent = `About ${gameDetails.title}`;
  aboutContent.textContent = `${gameDetails.description}`;

  const info = document.querySelector('.info');
  // info title
  let infoGroup = document.createElement('div');
  let infoTitle = document.createElement('p');
  infoTitle.innerText = 'Title';
  infoTitle.classList.add('item-title');
  let infoContent = document.createElement('p');
  infoContent.innerText = gameDetails.title;
  infoGroup.appendChild(infoTitle);
  infoGroup.appendChild(infoContent);
  info.appendChild(infoGroup);
  // info developer
  infoGroup = document.createElement('div');
  infoTitle = document.createElement('p');
  infoTitle.innerText = 'Developer';
  infoTitle.classList.add('item-title');
  infoContent = document.createElement('p');
  infoContent.innerText = gameDetails.developer;
  infoGroup.appendChild(infoTitle);
  infoGroup.appendChild(infoContent);
  info.appendChild(infoGroup);
  // info publisher
  infoGroup = document.createElement('div');
  infoTitle = document.createElement('p');
  infoTitle.innerText = 'Publisher';
  infoTitle.classList.add('item-title');
  infoContent = document.createElement('p');
  infoContent.innerText = gameDetails.publisher;
  infoGroup.appendChild(infoTitle);
  infoGroup.appendChild(infoContent);
  info.appendChild(infoGroup);
  // info release date
  infoGroup = document.createElement('div');
  infoTitle = document.createElement('p');
  infoTitle.innerText = 'Release Date';
  infoTitle.classList.add('item-title');
  // TODO: change locale
  infoContent = document.createElement('p');
  infoContent.innerText = gameDetails.release_date;
  infoGroup.appendChild(infoTitle);
  infoGroup.appendChild(infoContent);
  info.appendChild(infoGroup);
  // info genre
  infoGroup = document.createElement('div');
  infoTitle = document.createElement('p');
  infoTitle.innerText = 'Genre';
  infoTitle.classList.add('item-title');
  infoContent = document.createElement('p');
  infoContent.innerText = gameDetails.genre;
  infoGroup.appendChild(infoTitle);
  infoGroup.appendChild(infoContent);
  info.appendChild(infoGroup);
  // info platform
  infoGroup = document.createElement('div');
  infoTitle = document.createElement('p');
  infoTitle.innerText = 'Platform';
  infoTitle.classList.add('item-title');
  infoContent = document.createElement('p');
  infoContent.innerText = gameDetails.platform;
  infoGroup.appendChild(infoTitle);
  infoGroup.appendChild(infoContent);
  info.appendChild(infoGroup);

  const screenshotTitle = document.querySelector('.screenshotTitle');
  screenshotTitle.innerText = `${gameDetails.title} Screenshots`;

  const screenshots = document.querySelector('.screenshots');
  gameDetails.screenshots.forEach(screenshot => {
    const img = document.createElement('img');
    img.src = screenshot.image;
    screenshots.appendChild(img);
  });

  const minSysReq = gameDetails.minimum_system_requirements;
  const requirements = document.querySelector('.requirements');

  let reqGroup = document.createElement('div');
  let reqTitle = document.createElement('p');
  reqTitle.classList.add('item-title');
  reqTitle.innerText = 'OS';
  let reqContent = document.createElement('p');
  reqContent.innerText = minSysReq.os;
  reqGroup.appendChild(reqTitle);
  reqGroup.appendChild(reqContent);
  requirements.appendChild(reqGroup);

  reqGroup = document.createElement('div');
  reqTitle = document.createElement('p');
  reqTitle.classList.add('item-title');
  reqTitle.innerText = 'Processor';
  reqContent = document.createElement('p');
  reqContent.innerText = minSysReq.processor;
  reqGroup.appendChild(reqTitle);
  reqGroup.appendChild(reqContent);
  requirements.appendChild(reqGroup);

  reqGroup = document.createElement('div');
  reqTitle = document.createElement('p');
  reqTitle.classList.add('item-title');
  reqTitle.innerText = 'Memory';
  reqContent = document.createElement('p');
  reqContent.innerText = minSysReq.memory;
  reqGroup.appendChild(reqTitle);
  reqGroup.appendChild(reqContent);
  requirements.appendChild(reqGroup);

  reqGroup = document.createElement('div');
  reqTitle = document.createElement('p');
  reqTitle.classList.add('item-title');
  reqTitle.innerText = 'Graphics';
  reqContent = document.createElement('p');
  reqContent.innerText = minSysReq.graphics;
  reqGroup.appendChild(reqTitle);
  reqGroup.appendChild(reqContent);
  requirements.appendChild(reqGroup);

  reqGroup = document.createElement('div');
  reqTitle = document.createElement('p');
  reqTitle.classList.add('item-title');
  reqTitle.innerText = 'Storage';
  reqContent = document.createElement('p');
  reqContent.innerText = minSysReq.storage;
  reqGroup.appendChild(reqTitle);
  reqGroup.appendChild(reqContent);
  requirements.appendChild(reqGroup);
}
