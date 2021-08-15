import React from 'react'

const MemePage = ({showmeme}) => {
    console.log(showmeme)
  return (
    <div class="container-md memepage my-4 bg-dark ">
        <div class="row d-flex align-items-center">
            <div class="col-sm bg-dark memepage-img-div p-2 border border-light d-flex justify-content-center">
                <img src={showmeme.url} alt="" className="memepage-img" />
            </div>
            <div class="col-sm bg-light memepage">
            
            </div>
            {/* <div className="meme-show-img border border-dark shadow bg-light p-2 rounded">
            
        </div>
        <div className="meme-show-img border border-dark shadow bg-light p-2 rounded">
            <img src={showmeme.url} alt="" className="meme-img" />
        </div> */}
        </div>
     </div>
  )
}

export default MemePage
