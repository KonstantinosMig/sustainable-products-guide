describe('Product Filtering Logic', () => {
  it('correctly filters eco-friendly products', () => {
    const mockProducts = [
      { id: 1, name: 'Plastic Bottle', isEcoFriendly: false },
      { id: 2, name: 'Bamboo Toothbrush', isEcoFriendly: true },
      { id: 3, name: 'Reusable Bag', isEcoFriendly: true }
    ];

    // Εδώ προσομοιώνουμε τη λογική φιλτραρίσματος της εφαρμογής
    const filteredProducts = mockProducts.filter(product => product.isEcoFriendly);

    // Ελέγχουμε αν το φίλτρο δούλεψε σωστά (πρέπει να βρει 2 οικολογικά)
    expect(filteredProducts.length).toBe(2);
    expect(filteredProducts[0].name).toBe('Bamboo Toothbrush');
  });
});
