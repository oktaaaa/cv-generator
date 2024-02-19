const Work = ({values}) => {
    return(
        <div>
            <hr className='bg-dark'/>
            <h3 className='mt-3 mx-3'>Work Experience</h3>
            
            <ul>
                {values.map ((value, index) => (
                    <div className='row' key={index}>
                        <div className='col-lg-4 col-sm-4'>
                            <h5 className='mx-3'  >{value.year}</h5>
                        </div>

                        <div className='col-lg-8 col-sm-8'>
                            <h5>{value.company}</h5>
                            <h5>{value.jobTitle}</h5>
                            <p>{value.description}</p>
                        </div>
                    </div>
                    
                ))}
            </ul>
            
        </div>
    )
}

export default Work