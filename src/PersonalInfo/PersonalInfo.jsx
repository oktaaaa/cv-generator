
const PersonalInfo = ({values}) => {
  return(
    <div>
      <h2 className= "mt-3 mx-3 text-center">{values.infoName} </h2>
      <p className= "mt-3 mx-3  text-center"><i className='bi bi-envelope'></i> {values.email}</p>
    </div>
  )
}

export default PersonalInfo