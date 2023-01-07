import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button 1', () => {
    render(<Button text='View all'/>);
    const textBtn = screen.getByText(/View all/i);
    expect(textBtn).toBeInTheDocument();
    expect(textBtn).toBeVisible();
});

test('renders button 2', () => {
    render(<Button text='View'/>);
    const textBtn = screen.getByText(/View/i);
    expect(textBtn).toBeInTheDocument();
    expect(textBtn).toBeVisible();
});

test('disabled button', () => {
    render(<Button text='View'/>);
    expect(screen.getByTestId('button')).not.toBeDisabled();
    expect(screen.getByTestId('button')).toBeEnabled();
});
