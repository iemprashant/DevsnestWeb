import React, { useState } from 'react'
function Inputkeycomp({setBooks,books}) {
    const style={
        margin:'.25rem'
    }
    const [inputbookvalue, setinputbookvalue] = useState('')
    const [inputauthorvalue, setinputauthorvalue] = useState('')
    const inputchangehandler=(val,setvalue)=>{
        setvalue(val)
    }
    const onclickbtnhandler=()=>{
        var newbook={
            book: inputbookvalue,
            author: inputauthorvalue,
          }
        var tempbookslist=[newbook,...books]
        setBooks(tempbookslist)
    }
    return (
    <div class="input-group my-3">
        <input  style={style} type="text" class="form-control" placeholder="Enter Book Name..." onChange={(e)=>inputchangehandler(e.target.value,setinputbookvalue)} />
        <input style={style}type="text" class="form-control" placeholder="Enter Author Name..." onChange={(e)=>inputchangehandler(e.target.value,setinputauthorvalue)} />
        <button style={style} type="submit" class="btn btn-secondary" onClick={onclickbtnhandler}>Add Book</button>
    </div>
    )
}

export default Inputkeycomp
