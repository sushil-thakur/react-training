import React from 'react';

const Displayproduct = (props) => {
  return (
    <div style={{ border: '1px solid black', padding: '1rem' }}>
      <img src={props.image} alt="Product image" height={250} width={250} />
      <h3>{props.title}</h3>
    </div>
  );
};

const App4 = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Displayproduct
        image={'data:image/jpeg;base64,/9j/4AAQSk...'} 
        title={"Tank"}
      />
      <Displayproduct
        image={'data:image/jpeg;base64,/9j/4AAQSk...'}
        title={"Another Product"}
      />
    </div>
  );
};

export default App4;
