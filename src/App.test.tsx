import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    expect(screen.getByText('The local time in Monaco is 6:03 PM')).toBeInTheDocument();
  });
})