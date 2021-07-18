import React from 'react'
const Card = ({book,author}) => {
    var styleforcard={
        backgroundColor:'#03A9F4',
        borderRadius:'.5rem',
        boxShadow: '0 3px 6px 0px rgba(0, 0, 0, 0.16),0 3px 6px 0px rgba(0, 0, 0, 0.23)',
        padding:' .5rem 2rem',
        margin:'1rem',
        fontSize:'1.2rem',
        fontFamily: "'ABeeZee', sans-serif",
        
    }
  return (
    <div style={styleforcard}>
        <h1 style={{fontWeight:'bold'}} >{book}</h1>
        <h3 style={{textAlign:'end',fontWeight:'300'}}>-{author}</h3>
    </div>
  )
}

export default Card
