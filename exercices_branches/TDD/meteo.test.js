import { it, expect, vi } from 'vitest'
import { fetchWeather } from './meteo'
import fetch from 'node-fetch'

// Mock de node-fetch
vi.mock('node-fetch', () => ({
  default: vi.fn(),
}))

it('Test de la fonction fetchWeather avec les coordonnées de Paris', async () => {
  // Simulation simplifiée de ce que répondrait l'API
  // Testable ici: https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m&format=json&timeformat=unixtime
  const weatherResponse = {
    latitude: 48.85341,
    longitude: 2.3488,
    generationtime_ms: 0.0339746475219727,
    utc_offset_seconds: 0,
    timezone: 'GMT',
    timezone_abbreviation: 'GMT',
    elevation: 43,
    hourly_units: {
      time: 'unixtime',
      temperature_2m: '°C',
    },
    hourly: {
      time: [
        1727740800, 1727744400, 1727748000, 1727751600, 1727755200, 1727758800,
      ],
      temperature_2m: [13.7, 13.3, 12.9, 12.8, 12.4, 11.9],
    },
  }

  // On remplace la fonction fetch par notre mock
  fetch.mockResolvedValue({
    ok: true,
    json: async () => weatherResponse,
  })

  // On appelle la fonction
  const weatherData = await fetchWeather(48.85341, 2.3488)

  // On teste que le fetch à l'API a bien été appelé 1 fois
  expect(fetch).toHaveBeenCalled(1)

  // On teste que l'URL exacte a bien été construite avec les paramètres donnés
  expect(fetch).toHaveBeenCalledWith(
    'https://api.open-meteo.com/v1/forecast?latitude=48.85341&longitude=2.3488&hourly=temperature_2m&format=json&timeformat=unixtime'
  )

  // On teste que l'objet est construit correctement avec les températures
  expect(weatherData.hourly.temperature_2m).toStrictEqual([
    13.7, 13.3, 12.9, 12.8, 12.4, 11.9,
  ])
})

