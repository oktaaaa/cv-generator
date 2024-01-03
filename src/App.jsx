import { useState } from 'react'
import './App.css'

function App() {
  
  // const [name, setName] = useState('')
  // const [cvName, setCvName] = useState([])
  // const [email, setEmail] = useState('')

  const [pInfo, setPInfo] = useState({
    name: "", email: ""
  })
  const [cvPInfo, setCvPInfo] = useState([])

  let{name, email} = pInfo
  // function handleClick(e){
  //   e.preventDefault()
  //   setCvName(name)
  // }
  // const handleChange = (e, name) => {
  //   const value = e.target.value
  //   setPInfo({...pInfo, [name]: value})
  // }

  function handleChange(e){
    setPInfo({
      ...pInfo, 
      [e.target.name]: e.target.value
    })
  }

  function handleClick(e){
    e.preventDefault()
    setCvPInfo([...cvPInfo, {name, email}])
    console.log(pInfo);
    setPInfo({name: '', email:''})
    
  }
  // console.log("all", cvPInfo);
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="card col-lg-12">
            <div className="card-body text-center">
              <h3>CV GENERATOR</h3>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="card col-lg-4 px-3">
            <h3>Section</h3>
            <h4>Personal Information</h4>
            <form >
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter email"
                onChange={handleChange}
                value={pInfo.name}
                name="name"
                />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input type="text" className="form-control" placeholder=""
                onChange={handleChange}
                value={pInfo.email}
                name = "email"
                />
              </div>
              
              <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
          </div>

          <div className="card col-lg-8">
            Name is
           
            {cvPInfo.map(
              (item, index)=>{
                return(
                  <>
                  <h3 key={index}>{item.name}</h3>
                <h3>{item.email}</h3>
                  </>
                
                )
              }
            )}
            
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
