
import { useState } from "react"


const AddEducation = ({onSubmit}) => {
    const [year, setYear] = useState('')
    const [school, setSchool] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      const value = [year, school, description]
      onSubmit(value)
      setYear('')
      setSchool('')
      setDescription('')
      console.log(value);
    }
    
    return(
        <>
          <h4 className='mt-3'>Education</h4>
            <form >
              <div className="form-group">
                <label>Year</label>
                <input type="text" className="form-control" placeholder=""
                value={year}
                onChange={(e) => setYear(e.target.value)}
                name="year"
                />
              </div>
              
              <div className="form-group">
                <label>University Name</label>
                <input type="text" className="form-control" placeholder=""
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                name = "place"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea type="text" className="form-control" placeholder=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name = "description"
                rows="3"
                />
              </div>
              
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button>
            </form>   
        </>
    )

}

export default AddEducation