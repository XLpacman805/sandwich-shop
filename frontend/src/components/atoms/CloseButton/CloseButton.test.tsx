import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import CloseButton from './CloseButton';

test('renders CloseButton element', () => {
  render(<CloseButton dataTestId="close-button" />);
  const closeButtonElement = screen.getByTestId("close-button");
  expect(closeButtonElement).toBeInTheDocument();
});

test ('renders CloseButton element with multiplication sign', () => {
  render(<CloseButton dataTestId="close-button">Close</CloseButton>);
  const closeButtonElement = screen.getByTestId("close-button");
  expect(closeButtonElement).toHaveTextContent("×");
});