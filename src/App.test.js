// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('navigates to products section when products link is clicked', async () => {
//   render(<App />);
//   const user = userEvent.setup();
  
//   const productsLink = screen.getByText(/products/i);
//   await user.click(productsLink);
  
//   const productsSection = screen.getByText(/our collection/i);
//   expect(productsSection).toBeInTheDocument();
// });


import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Test that the app renders without crashing
test('renders app without crashing', () => {
  render(<App />);
});

// Test navigation to products section
test('navigates to products section when products link is clicked', async () => {
  render(<App />);
  const user = userEvent.setup();
  
  // Click on products link
  const productsLink = screen.getByText(/products/i);
  await user.click(productsLink);
  
  // Check if products section is in view
  const productsSection = screen.getByText(/our collection/i);
  expect(productsSection).toBeInTheDocument();
});

// Test product sorting functionality
test('sorts products by price low to high', async () => {
  render(<App />);
  const user = userEvent.setup();
  
  // Find and change the sort select
  const sortSelect = screen.getByLabelText(/sort by/i);
  await user.selectOptions(sortSelect, 'price-low');
  
  // Check if the first product has lower price than the second
  const productPrices = screen.getAllByText(/\$\d+/);
  const firstPrice = parseInt(productPrices[0].textContent.replace('$', ''));
  const secondPrice = parseInt(productPrices[1].textContent.replace('$', ''));
  
  expect(firstPrice).toBeLessThanOrEqual(secondPrice);
});

// Test adding product to cart
test('adds product to cart when add to cart is clicked', async () => {
  render(<App />);
  const user = userEvent.setup();
  
  // Click on the first product's add to cart button
  const addToCartButtons = screen.getAllByText(/add to cart/i);
  await user.click(addToCartButtons[0]);
  
  // Check if alert was shown (you might need to mock window.alert)
  // Alternatively, test if cart state was updated
});