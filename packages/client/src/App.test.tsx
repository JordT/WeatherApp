import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from './App';

beforeEach(() => {
  render(<App />);
})

afterEach(() => {
})

describe('App tests', () => {
  
  // test('App component', () => {
  //   // Test data json loaded up with Monaco weather @ 6:03 PM
  //   expect(screen.getByText(/The local time in Monaco is/)).toBeInTheDocument();
  // });
  
  test('current weather component', () => {
    expect(screen.getByText(/Current Weather/)).toBeInTheDocument();
    expect(screen.getByText(/Temperature/)).toBeInTheDocument();
    expect(screen.getByText(/Feels like/)).toBeInTheDocument();
    expect(screen.getByText(/Wind speed/)).toBeInTheDocument();
    expect(screen.getByText(/Wind gust/)).toBeInTheDocument();
    expect(screen.getByText(/Wind direction/)).toBeInTheDocument();
    expect(screen.getByText(/Humidity/)).toBeInTheDocument();
    expect(screen.getByAltText('current-weather-icon')).toBeInTheDocument();
    
  })

  test('weather forecast component', () => {
    expect(screen.getByText(/Tuesday/)).toBeInTheDocument();
    expect(screen.getByText(/Wednesday/)).toBeInTheDocument();
    expect(screen.getByText(/Thursday/)).toBeInTheDocument();
    expect(screen.getByText(/Friday/)).toBeInTheDocument();
    expect(screen.getByText(/Saturday/)).toBeInTheDocument();

  })

  test('sun dial component', () => {
    expect(screen.getByText(/07:59/)).toBeInTheDocument();
    expect(screen.getByText(/17:21/)).toBeInTheDocument();
  })
  
})