
import { useState } from 'react'



const AddPersonalInfo = ({ onSubmit }) => {
    // personal info
   const [infoName, setInfoName] = useState('')
   const [email, setEmail] = useState('')

    function handleSubmit(e){
      e.preventDefault()
      onSubmit({infoName, email})
    }
    return(
      <>
        <h4>Personal Information</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" placeholder=""
                  value={infoName}
                  onChange={(e) => setInfoName(e.target.value)}
                  name="name"
                  />
                </div>
                <div className="form-group">
                  <label>E-mail</label>
                  <input type="text" className="form-control" placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name = "email"
                  />
                </div>
                
                <button type="submit" className="btn btn-primary" >Add</button>
              </form>

              {/* <div className="card col-lg-9 col-md-9">
              {cvPInfo.map(
                (item, index)=>{
                  return(
                    <>
                    <div>
                        <h2 className= "mt-3 mx-3 text-center" key={index}>{item.name} </h2>
                        <p className= "mt-3 mx-3  text-center"><i className='bi bi-envelope'></i> {item.email}</p>
                        
                    </div>
                    
                    </>
                  
                  )
                }
              )}
              </div> */}
      </>
  )
  
  
}

export default AddPersonalInfo
