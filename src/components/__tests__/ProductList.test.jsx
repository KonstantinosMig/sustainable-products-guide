import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from '../ProductList';

const mockProducts = [
  { id: 1, name: 'Eco Product', description: 'Good', isEcoFriendly: true },
  { id: 2, name: 'Bad Product', description: 'Bad', isEcoFriendly: false },
];

describe('ProductList Component', () => {
  it('renders all products when filterEco is false', () => {
    render(<ProductList products={mockProducts} filterEco={false} />);
    const items = screen.getAllByTestId('product-item');
    expect(items).toHaveLength(2);
    expect(screen.getByText('Eco Product')).toBeInTheDocument();
    expect(screen.getByText('Bad Product')).toBeInTheDocument();
  });

  it('renders only eco-friendly products when filterEco is true', () => {
    render(<ProductList products={mockProducts} filterEco={true} />);
    const items = screen.getAllByTestId('product-item');
    expect(items).toHaveLength(1);
    expect(screen.getByText('Eco Product')).toBeInTheDocument();
    expect(screen.queryByText('Bad Product')).not.toBeInTheDocument();
  });
});
