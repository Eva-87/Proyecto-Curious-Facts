import { describe, it, expect, vi } from 'vitest'
import { getFact } from './scripts/api.js'

describe('getFact', () => {
  it('devuelve el texto del hecho desde la API', async () => {
    // 🔹 Mock de fetch
    const mockResponse = {
      json: async () => ({ text: 'Un hecho curioso de prueba' })
    }
    global.fetch = vi.fn(() => Promise.resolve(mockResponse))

    // 🔹 Ejecutar la función
    const fact = await getFact()

    // 🔹 Comprobar resultado
    expect(fact).toBe('Un hecho curioso de prueba')
    expect(global.fetch).toHaveBeenCalledWith(
      'https://uselessfacts.jsph.pl/random.json?language=en'
    )
  })
})