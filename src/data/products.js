export const products = [
  {
    id: 1,
    name: "UltraBoost Running Shoes",
    brand: "Adidas",
    price: 129.99,
    originalPrice: 179.99,
    discount: 28,
    description: "Experience ultimate comfort and performance with our premium running shoes. Designed for athletes and casual wearers alike, these shoes feature our latest cushioning technology and a sleek, modern design.",
    features: [
      "Boost midsole for energy return",
      "Primeknit upper for snug fit",
      "Continental rubber outsole for traction",
      "Breathable mesh construction"
    ],
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['Black', 'White', 'Blue', 'Red'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    category: 'running',
    rating: 4.8,
    reviews: 142,
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Classic Comfort Sneakers",
    brand: "Nike",
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    description: "Timeless style meets modern comfort in these classic sneakers. Perfect for everyday wear with cushioned insoles and durable construction.",
    features: [
      "Air cushioning for all-day comfort",
      "Leather and mesh upper",
      "Flexible sole for natural movement",
      "Classic design with modern touches"
    ],
    images: [
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['White', 'Black', 'Gray'],
    sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    category: 'casual',
    rating: 4.5,
    reviews: 89,
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "TrailMaster Hiking Boots",
    brand: "Merrell",
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    description: "Conquer any terrain with these rugged hiking boots. Waterproof construction and superior ankle support make these perfect for outdoor adventures.",
    features: [
      "Waterproof full-grain leather",
      "Vibram outsole for traction",
      "Breathable mesh lining",
      "Protective toe cap"
    ],
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['Brown', 'Black', 'Green'],
    sizes: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    category: 'hiking',
    rating: 4.7,
    reviews: 67,
    inStock: true,
    featured: false
  },
  {
    id: 4,
    name: "AirMax Basketball Shoes",
    brand: "Nike",
    price: 134.99,
    originalPrice: 169.99,
    discount: 21,
    description: "Designed for performance on the court, these basketball shoes offer superior cushioning, support, and traction for quick cuts and jumps.",
    features: [
      "Max Air unit for impact protection",
      "Durable rubber outsole",
      "Breathable mesh upper",
      "Ankle support system"
    ],
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['Red', 'Black', 'White'],
    sizes: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12', 'US 13'],
    category: 'basketball',
    rating: 4.6,
    reviews: 112,
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "FlexWalk Walking Shoes",
    brand: "Skechers",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    description: "Comfortable walking shoes with memory foam insoles that mold to your feet for personalized comfort during long walks.",
    features: [
      "Memory foam cushioned comfort",
      "Flexible sole design",
      "Lightweight construction",
      "Machine washable"
    ],
    images: [
      'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['Gray', 'Black', 'Navy'],
    sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10'],
    category: 'walking',
    rating: 4.4,
    reviews: 203,
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: "Formal Oxford Shoes",
    brand: "Clarks",
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    description: "Elegant oxford shoes perfect for formal occasions and business settings. Crafted from premium leather with a comfortable cushioned insole.",
    features: [
      "Premium leather upper",
      "Cushioned footbed",
      "Durable leather sole",
      "Classic oxford design"
    ],
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['Black', 'Brown', 'Oxblood'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    category: 'formal',
    rating: 4.7,
    reviews: 78,
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "Summer Sandals",
    brand: "Teva",
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    description: "Comfortable and durable sandals perfect for summer adventures. Water-resistant and quick-drying with excellent arch support.",
    features: [
      "Quick-drying webbing",
      "Contoured footbed",
      "Adjustable straps",
      "Water-resistant material"
    ],
    images: [
      'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['Black', 'Brown', 'Blue', 'Green'],
    sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    category: 'casual',
    rating: 4.3,
    reviews: 156,
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "Winter Boots",
    brand: "Sorel",
    price: 179.99,
    originalPrice: 229.99,
    discount: 22,
    description: "Stay warm and dry in these premium winter boots. Perfect for snow, slush, and cold weather conditions with superior insulation.",
    features: [
      "Waterproof construction",
      "Thermal insulation",
      "Non-slip sole",
      "Fur lining for warmth"
    ],
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['Black', 'Brown', 'Navy'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    category: 'hiking',
    rating: 4.6,
    reviews: 92,
    inStock: true,
    featured: false
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'running', name: 'Running' },
  { id: 'casual', name: 'Casual' },
  { id: 'hiking', name: 'Hiking' },
  { id: 'basketball', name: 'Basketball' },
  { id: 'walking', name: 'Walking' },
  { id: 'formal', name: 'Formal' } ];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (categoryId) => {
  if (categoryId === 'all') return products;
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const searchProducts = (query) => {
  const lowerCaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerCaseQuery) ||
    product.brand.toLowerCase().includes(lowerCaseQuery) ||
    product.description.toLowerCase().includes(lowerCaseQuery)
  );
};