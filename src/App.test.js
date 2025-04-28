import { render, screen } from '@testing-library/react';
import App from './App';

test('Name check', () => {
  render(<App />);
  const linkElement = screen.getByText(/Binil Mohamed Nizar/i);
  expect(linkElement).toBeInTheDocument();
});
