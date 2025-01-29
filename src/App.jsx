import React from 'react';

const DisplayProduct = ({ image, title }) => {
  return (
    <div style={{ border: '1px solid black', padding: '1rem', textAlign: 'center' }}>
      <img src={image} alt="Product" height={250} width={250} />
      <h3>{title || 'No Title Available'}</h3>
    </div>
  );
};

const App = () => {
  const product = {
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBx...',
    title: 'Sample Product'
  };

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <DisplayProduct image={product.image} title={product.title} />
    </div>
  );
};

export default App;
