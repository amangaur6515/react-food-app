import React from 'react'

const Shimmer = () => {
  return (
    <div className='container'>
      <form>
        <div className='form-group col-md-6 mt-3 mx-5'>
          <input className='form-control ' type='text' placeholder='Enter Restaurant Name' />
        </div>
      </form>
      <div className='row '>
        
          <div className='col-md-3' >
            { Array(12).fill("").map((e)=>

             <div className='shimmer-card card m-4 p-4 ' style={{width:"100px",height:"100px",backgroundColor:"gray "}} >
             </div>) 
             }
          </div>
        
      </div>
    </div>
    
  )
}

export default Shimmer