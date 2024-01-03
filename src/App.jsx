import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [cvName, setCvName] = useState([])
  const [email, setEmail] = useState('')

  function handleClick(e){
    e.preventDefault()
    setCvName(name)
  }

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
                value = {name}
                onChange={e => setName(e.target.value)}/>
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input type="text" className="form-control" placeholder=""
                value = {email}
                onChange={e => setEmail(e.target.value)}/>
              </div>
              
              <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
          </div>

          <div className="card col-lg-8">
            Name is
          
            <p>{cvName}</p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
