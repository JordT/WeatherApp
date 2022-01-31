import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from './App';

beforeEach(() => {
  render(<App />);
})

afterEach(() => {
})

describe('App tests', () => {
  
    test('renders App component', () => {
    // Test data json loaded up with Monaco weather @ 6:03 PM
    expect(screen.getByText(/The local time in Monaco is 6:03 PM/)).toBeInTheDocument();
  });

  test('search bar rendered and populated with Monaco', () => {
    expect(screen.getByDisplayValue(/Monaco/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter a city.../)).toBeInTheDocument();
    expect(screen.getByRole('combobox'));
  })

  
})