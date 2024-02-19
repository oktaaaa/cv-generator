
import { useRef} from 'react'

import { useReactToPrint } from 'react-to-print'


function Test() {
  
    // const [name, setName] = useState('')
    // const [cvName, setCvName] = useState([])
    // const [email, setEmail] = useState('')
  
    
  
    // education
    
  
    // work experience
  
    
    // function handleClick(e){
    //   e.preventDefault()
    //   setCvName(name)
    // }
    // const handleChange = (e, name) => {
    //   const value = e.target.value
    //   setPInfo({...pInfo, [name]: value})
    // }
  
    // additional section
    
  
    // to print
    const componentPDF = useRef()
  
    const generatePDF = useReactToPrint({
      content: () => componentPDF.current,
    //   documentTitle: 'ok'name+ '_cv',
      onAfterPrint: () => alert('Data saved in PDF')
    });
    
  
    
  
    
  
    
  
    // let nextId = 0
    
  
    
  
    
  
   
  
    // function onDelete(id) {
    //   console.log(id);
    //   // remove item
    // }
  
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
  
              
              <div className="card">
                
                {/* {cvEduInfo.map(
                (item)=>{
                  return(
                    <div className='row' key={item.id}>
                      
                      
                      <h5 >{item.place} </h5>
                      <button className='bg-warning mx-3'> Edit </button>
                      <button className='bg-danger' onClick={() => setCvEduInfo(
                  cvEduInfo.filter(a =>
                    a.id !== item.id
                  )
                )}> Delete </button>
                      
                    </div>
                  
                  )
                }
            )} */}
                
              </div>
              
              
  
              
              <button className="btn btn-success mt-3" onClick={generatePDF}>
                PDF
            </button> 
          
            </div>
  
  
  
            
          <div>
            
          </div>
  
            <div className="card col-lg-9 col-md-9"  ref={componentPDF} style={{ width: '100%' }}>
              
              
            
            
  
            {/* additional section */}
            
  
        
            </div>
            
            
             
          </div>
          
         
          
        </div>
      </>
    )
  }
  
  export default Test
