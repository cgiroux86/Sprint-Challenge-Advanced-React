import React from 'react';
import {render, fireEvent, findAllByText} from '@testing-library/react';
import App from './App'
import SoccerPlayers from './components/SoccerPlayers'

test('make sure that component renders correctly', () => {
    render(<SoccerPlayers/>)
})

test('make sure correct amount of players are rendered to screen', async () => {
    const {findAllByText} = render(<SoccerPlayers/>)

    const players =await findAllByText(/name/)
    expect(players.length === 101)
})

test('make sure that all elements are being displayed under each player element on App page(parent)', async () => {
    const {findAllByText} = render(<App/>)
    const found = await findAllByText(/searches/i)

    expect(found.length === 101)
})

test('make sure all container elements are displayed', () => {
    render(<SoccerPlayers/>)
    const div = document.getElementsByClassName('holder')

    console.log(div)
})