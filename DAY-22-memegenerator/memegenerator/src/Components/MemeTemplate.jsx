import React from 'react'
import MemeCard from './MemeCard'
const MemeTemplate = ({memes,setshowmeme}) => {
  return (
    <>
      <div class="container-md  d-flex align-content-start flex-wrap  mt-3">
        {memes.map(meme=> <MemeCard  key={meme.id} meme={meme} setshowmeme={setshowmeme}/>)}
     </div>
    </>
  )
}

export default MemeTemplate
