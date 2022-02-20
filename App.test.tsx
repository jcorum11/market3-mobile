import React from 'react'
import App from './App'
import { render } from '@testing-library/react-native'

it('renders', async () => {
  render(<App />)
})

it('matches snapshot', async () => {
  const tree = render(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})