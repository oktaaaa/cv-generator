const Additional = ({values}) => {
    return(
        <div>
            
            
            {values.map((value, index) => (
                <>
                    <div>
                        <hr className='bg-dark'/>
                        <h3 className='mt-3 mx-3'>{value.sectionName}</h3>
                    </div>
                <ul>
                <div className='row' key={index}>
                    
                    
                    <div className='col-lg-4 col-sm-4'>
                        <h5 className='mx-3'  >{value.sectionYear}</h5>
                    </div>

                    <div className='col-lg-8 col-sm-8'>
                        <h5>{value.sectionPlace}</h5>
                        <h5>{value.sectionTitle}</h5>
                        <p>{value.sectionDesc}</p>
                    </div>
                </div>
                </ul>
                </>
                

                
            ))}
        </div>
    )
}

export default Additional