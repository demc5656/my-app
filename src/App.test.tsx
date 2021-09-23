import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

//test('renders learn react link', () => {
  //render(<App />);
describe('App', () => {
  beforeEach(() => {
    render(<App />);
  })
  it ("should have unfinished on screen", () => {
    const linkElement = screen.queryByText(/unfinished/i);
    expect(linkElement).not.toBeInTheDocument();
  });
});
