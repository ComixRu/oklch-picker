import './index.css'
import { visible } from '../../stores/visible.js'

let sample = document.querySelector<HTMLDivElement>('.sample')!

visible.subscribe(({ space, real, fallback }) => {
  sample.classList.toggle('is-srgb', space === 'srgb')
  sample.classList.toggle('is-p3', space === 'p3')
  sample.classList.toggle('is-rec2020', space === 'rec2020')
  sample.classList.toggle('is-out', space === 'out')
  sample.classList.toggle('is-supported', !!real)

  sample.style.setProperty('--sample-real', real || 'transparent')
  sample.style.setProperty('--sample-fallback', fallback)
})
