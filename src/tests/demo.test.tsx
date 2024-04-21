// example.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ExampleComponent from './ExampleComponent'; // Assuming ExampleComponent is a React component

describe('ExampleComponent', () => {
  test('renders the component', () => {
    render(<ExampleComponent />);
    const element = screen.getByText('Example Text');
    expect(element).toBeInTheDocument();
  });
});