import { useState } from 'react'
import './App.css'

function App() {
  
  // const [name, setName] = useState('')
  // const [cvName, setCvName] = useState([])
  // const [email, setEmail] = useState('')

  // personal info
  const [pInfo, setPInfo] = useState({
    name: "", email: ""
  })
  const [cvPInfo, setCvPInfo] = useState([])

  let{name, email} = pInfo

  // education
  const [eduInfo, setEduInfo] = useState({
    year: "", place:"", description:""
  })
  const [cvEduInfo, setCvEduInfo] = useState([])
  let{year, place, description} = eduInfo

  // work experience

  const [workInfo, setWorkInfo] = useState({
    yearWork: "", company:"", descriptionWork:"", jobTitle:""
  })

  const [cvWorkInfo, setCvWorkInfo] = useState([])
  let{yearWork, company, descriptionWork, jobTitle} = workInfo
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

  function handleChangeEdu(e){
    setEduInfo({
      ...eduInfo, [e.target.name]: e.target.value
    })
  }

  function handleChangeWork(e){
    setWorkInfo({
      ...workInfo, [e.target.name]: e.target.value
    })
  }

  function handleClick(e){
    e.preventDefault()
    setCvPInfo([...cvPInfo, {name, email}])
    // console.log(pInfo);
    setPInfo({name: '', email:''})
  }

  function handleClickEdu(e){
    e.preventDefault()
    setCvEduInfo([...cvEduInfo, {year, place, description}])
    // console.log(eduInfo);
    setEduInfo({year: '', place: '', description:''})
  }

  function handleClickWork(e){
    e.preventDefault()
    setCvWorkInfo([...cvWorkInfo, {yearWork, company, descriptionWork, jobTitle}])
    setWorkInfo({yearWork: '', company: '', descriptionWork:'', jobTitle: ''})
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
          <div className="card col-lg-3 px-3">
            <h3>Section</h3>
            <h4>Personal Information</h4>
            <form >
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder=""
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
              
              <button type="submit" className="btn btn-primary" onClick={handleClick}>Add</button>
            </form>

            {/* add this when all the data is good */}
            {/* <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div> */}

            <h4 className='mt-3'>Education</h4>
            <form >
              <div className="form-group">
                <label>Year</label>
                <input type="text" className="form-control" placeholder=""
                onChange={handleChangeEdu}
                value={eduInfo.year}
                name="year"
                />
              </div>
              <div className="form-group">
                <label>University Name</label>
                <input type="text" className="form-control" placeholder=""
                onChange={handleChangeEdu}
                value={eduInfo.place}
                name = "place"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea type="text" className="form-control" placeholder=""
                onChange={handleChangeEdu}
                value={eduInfo.description}
                name = "description"
                rows="3"
                />
              </div>
              
              <button type="submit" className="btn btn-primary" onClick={handleClickEdu}>Add</button>
            </form>

            <h4 className='mt-3'>Work Experience</h4>
            <form >
              <div className="form-group">
                <label>Year</label>
                <input type="text" className="form-control" placeholder=""
                onChange={handleChangeWork}
                value={workInfo.yearWork}
                name="yearWork"
                />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" className="form-control" placeholder=""
                onChange={handleChangeWork}
                value={workInfo.company}
                name = "company"
                />
              </div>

              <div className="form-group">
                <label>Job Title</label>
                <input type="text" className="form-control" placeholder=""
                onChange={handleChangeWork}
                value={workInfo.jobTitle}
                name = "jobTitle"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea type="text" className="form-control" placeholder=""
                onChange={handleChangeWork}
                value={workInfo.descriptionWork}
                name = "descriptionWork"
                rows="3"
                />
              </div>
              
              <button type="submit" className="btn btn-primary" onClick={handleClickWork}>Add</button>
            </form>
          </div>

          

          <div className="card col-lg-9">
            {cvPInfo.map(
              (item, index)=>{
                return(
                  <>
                  <div className='bg-primary'>
                      <h2 className= "mt-3 mx-3 text-white text-center" key={index}>{item.name} </h2>
                      <p className= "mt-3 mx-3 text-white text-center"><i className='bi bi-envelope'></i> {item.email}</p>
                      
                  </div>
                  
                  </>
                
                )
              }
            )}

          <h3 className='mt-3 mx-3'>Education</h3>

          {cvEduInfo.map(
              (item, index)=>{
                return(
                  <>
                  <div className='row'>
                    <div className='col-lg-4 '>
                      <h5 key={index} className='mx-3'>{item.year} </h5>
                      
                    </div>
                    <div className='col-lg-8'>
                      <h5 key={index}>{item.place} </h5>
                      <p>{item.description}</p>
                      
                    </div>
                    
                    
                  </div>
                  
                  </>
                
                )
              }
          )}
          <hr className='bg-dark'/>
          <h3 className='mt-3 mx-3'>Work Experience</h3>

          {cvWorkInfo.map(
              (item, index)=>{
                return(
                  <>
                  <div className='row'>
                    <div className='col-lg-4'>
                      <h5 className= "mx-3" key={index}>{item.yearWork} </h5>
                      
                    </div>
                    <div className='col-lg-8'>
                      <h5 className=''>{item.company} | {item.jobTitle}</h5>
                     
                      <p key={index}>{item.descriptionWork} </p>
                      
                    </div>
                  </div>
                  
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
