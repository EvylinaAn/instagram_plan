import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders content system title', () => {
  render(<App />);
  const titleElement = screen.getByText(/30-Day Content System/i);
  expect(titleElement).toBeInTheDocument();
});
