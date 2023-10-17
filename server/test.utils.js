import { within } from '@testing-library/dom'
import { JSDOM } from 'jsdom'
import { expect } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

export function render(response) {
  const html = response.text
  const virtualDOM = new JSDOM(html)
  const document = virtualDOM.window.document

  // within wraps our JSDOM with @testing-library selectors
  // https://testing-library.com/docs/queries/about
  const screen = within(document)
  return screen
}
