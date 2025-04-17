
const cities = {
    Paris: { lat: 48.8534, lon: 2.3488 },
    Lyon: { lat: 45.75, lon: 4.85 },
    Nantes: { lat: 47.2173, lon: -1.5534 },
    Marseilles: { lat: 43.3, lon: 5.4 },
    Lille: { lat: 50.633333, lon: 3.066667 },
  };

  async function afficherWeather() {
    for (const city in cities) {
      const coordinates = cities[city];
      const lat = coordinates.lat;
      const lon = coordinates.lon;

      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,rain`;
      const response = await fetch(url);
      const json = await response.json();

      creationHtml(city, json.current.temperature_2m, json.current.rain);
    }
  }

  function creationHtml(cityName, temperature, rain) {
    const pDegres = document.createElement("span");
    pDegres.innerHTML = `et il fait <strong>${temperature}</strong>° à ${cityName}.`;

    const pPluie = document.createElement("p");
    pPluie.innerHTML = `Il y a eu <strong>${rain}</strong> millimètres de pluie `;
    pPluie.appendChild(pDegres);

    document.body.appendChild(pPluie);
  }

  afficherWeather()
