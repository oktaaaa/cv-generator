import { useState } from "react";

const AddWorkExp = ({onSubmit}) => {
    const [year, setYear] = useState('')
    const [company, setCompany] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [description, setDescription] = useState('')
    
    const handleSubmit = (e) => {
      e.preventDefault()
      const value = {year, company, jobTitle, description}
      onSubmit(value)
      setYear('')
      setCompany('')
      setJobTitle('')
      setDescription('')
    }
  
    return(
        <>
        <h4 className='mt-3'>Work Experience</h4>
              <form >
                <div className="form-group">
                  <label>Year</label>
                  <input type="text" className="form-control" placeholder=""
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  name="yearWork"
                  />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" className="form-control" placeholder=""
                  value = {company}
                  onChange={(e) => setCompany(e.target.value)}
                  name = "company"
                  />
                </div>
  
                <div className="form-group">
                  <label>Job Title</label>
                  <input type="text" className="form-control" placeholder=""
                  value = {jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  name = "jobTitle"
                  />
                </div>
  
                <div className="form-group">
                  <label>Description</label>
                  <textarea type="text" className="form-control" placeholder=""
                  value = {description}
                  onChange={(e) => setDescription(e.target.value)}
                  name = "descriptionWork"
                  rows="3"
                  />
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button>
              </form>
        </>
    )
}

export default AddWorkExp