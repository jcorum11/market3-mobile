import React from 'react'
import App from '.'
import {renderer} from 'react-test-renderer'

it('renders', async () => {
  renderer.create(<App />)
})

it('matches snapshot', async () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})