import React from 'react'

const Card = () => {
    return <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '20px',
        border: '1px solid black',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        margin: '20px',
        alignItems: 'center',
        justifyContent: 'center'

    }}>
        <h1>Product Card</h1>
        <img
        src='data:image/jpeg;base64,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'
        alt='sword'
        height={300}
        width={300}/>
        <h3 style={{
            color: 'blue',
            padding: '10px',
            backgroundColor:'aqua',
            border:'none',
            cursor:'pointer',

        }}>Sword</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iure pariatur accusantium sunt unde natus, accusamus neque voluptate possimus necessitatibus rerum. Nulla, veritatis rerum est odio blanditiis omnis aut modi.</p>
<button>see more</button>



    </div>



}
const App2 = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexWrap: 'wrap',
        margin:'4rem',
        gap:'2rem',
    }}><Card/>
    <Card/>
    <Card/><Card/><Card/><Card/></div>
    
  )
}

export default App2

//rafce=>react arrow function component export