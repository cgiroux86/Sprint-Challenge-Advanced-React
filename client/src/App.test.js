import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from '@testing-library/react'
import App from './App';
import NavBar from './components/NavBar'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


  test('make sure dark mode is working correctly', async () => {
    const {getAllByText} = render(<NavBar/>)

    fireEvent.click(document.getElementById('submit'))
    fireEvent.click(document.getElementById('submit'))

    const body = document.querySelector('body')

   expect(body.classList.length === 1)
   
 
})



