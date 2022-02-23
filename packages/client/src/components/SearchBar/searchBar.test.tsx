import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import exampleData from '../../exampleData.json'

import SearchBar from './searchBar';

//render component with example search data
beforeEach(() => {
  const onSearchExample: any = exampleData
  const displayLocation: any = 'Monaco, MC'
  render(<SearchBar onSearch={onSearchExample} formattedLocation={displayLocation} />);
})

describe('Test searchBar component', () => {
  
  test('search bar component', () => {
    expect(screen.getByDisplayValue(/Monaco/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter a city.../)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  })
})