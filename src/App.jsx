import React from 'react'


const Card =(props)=>{
    return(
        <div style={{border:'1px solid black',padding:'1rem', width:'400px'
            ,flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center'
        }}> 
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}
const App = () => {
    const personList = [
        {
            id:1,
        name: 'Sushil',
        description:'he is a good',
    },
     {
        id:2,
        name: 'shirsh',
        description:'he is a bakarchoda',
    },
    ];
  return (
    <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
  
{personList.map((item) => {
    return (
        <Card key={item.id} name={item.name} description={item.description} />
    );
})}
        

    </div>
  )
}

export default App