

const EducationDisplay = ({values}) => {
  
  return(
      <div>
        <hr className='bg-dark'/>
        <h3 className='mt-3 mx-3'>Education</h3>
        
        <ul>
          
        {values.map((edu, index) => (
          <div className='row' key={index}>
            {/* {edu[0]} <br />
              {edu[1]} <br />
              {edu[2]} */}
            <div className='col-lg-4 col-sm-4'>
              <h5 className='mx-3'  >{edu[0]} </h5>
              
            </div>
            <div className='col-lg-8 col-sm-8'>
              <h5>{edu[1]} </h5>
              <p>{edu[2]}</p>
              
            </div>
          </div>

          
        ))}
        </ul>
      </div>
      
      
    )
  }

  
export default EducationDisplay