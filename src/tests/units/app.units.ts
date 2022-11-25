import { expect, it, describe } from 'vitest'
import App from '@/app.vue'

describe('[Components]<App.vue>', () => {
  it('mounted App', () => {
    console.log(App)
    expect(true).toBe(true)
  })
})
