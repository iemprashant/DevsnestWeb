import React from 'react'

const MemeCard = ({meme,setshowmeme}) => {
  return (
    <div class=" border border-light rounded-3 p-3 memecard  my-3 bg-lightgreen shadow d-flex flex-column  " onClick={()=>setshowmeme(meme) }   >
        <div class="meme-div-img ">
            <img src={meme.url} class="meme-img" alt="..."/>
        </div >
        <h6 class="text-center my-3 mx-1 p-1 rounded bg-white">{meme.name}</h6>
    </div>
  )
}

export default MemeCard
