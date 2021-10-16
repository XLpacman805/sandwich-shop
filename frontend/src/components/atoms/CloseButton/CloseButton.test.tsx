import React from 'react';
import { render, screen } from '@testing-library/react';
import CloseButton from './CloseButton';

test('renders CloseButton element', () => {
  render(<CloseButton dataTestId="close-button" />);
  const closeButtonElement = screen.getByTestId("close-button");
  expect(closeButtonElement).toBeInTheDocument();
});

test ('renders CloseButton element with multiplication sign', () => {
  render(<CloseButton dataTestId="close-button"></CloseButton>);
  const closeButtonElement = screen.getByTestId("close-button");
  expect(closeButtonElement).toHaveTextContent("×");
});