import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App imgSrc="https://upload.wikimedia.org/wikipedia/commons/1/1e/Fritz_Haber.png" />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
