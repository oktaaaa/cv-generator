import { useState } from "react";

const AddAdditional = ({onSubmit}) =>{

    const [sectionName, setSectionName] = useState('')
    const [sectionYear, setSectionYear] = useState('')
    const [sectionTitle, setSectionTitle] = useState('')
    const [sectionPlace, setSectionPlace] = useState('')
    const [sectionDesc, setSectionDesc] = useState('')
    const [checkedSection, setCheckedSection] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault()
      const value = {sectionName, sectionYear, sectionTitle, sectionPlace, sectionDesc}
      onSubmit(value)
      setSectionName('')
      setSectionYear('')
      setSectionTitle('')
      setSectionPlace('')
      setSectionDesc('')
    }

    const onChangeCheckedSection = (e) => {
      setCheckedSection(e.target.checked)
    }

    return (
        <>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" checked={checkedSection} onChange={onChangeCheckedSection}/>
            <label className="form-check-label">
              Click if you want to add another section
            </label>
          </div>
  
          <form >
          {checkedSection && (
            <>
            <h4 className='mt-3'>Add Section</h4>
            <div className="form-group">
              <label>Section Name</label>
              <input type="text" className="form-control" placeholder=""
            
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
              name="sectionName"
              />
            </div>

            <div className="form-group">
              <label>Year</label>
              <input type="text" className="form-control" placeholder=""
              
              value={sectionYear}
              onChange={(e) => setSectionYear(e.target.value)}
              name = "sectionYear"
              />
            </div>

            <div className="form-group">
              <label>Title</label>
              <input type="text" className="form-control" placeholder=""
              value={sectionTitle}
              onChange={(e) => setSectionTitle(e.target.value)}
              name = "sectionTitle"
              />
            </div>

            <div className="form-group">
              <label>Place</label>
              <input type="text" className="form-control" placeholder=""
              value={sectionPlace}
              onChange={(e) => setSectionPlace(e.target.value)}
              name = "sectionTitle"
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea type="text" className="form-control" placeholder=""
              value={sectionDesc}
              onChange={(e) => setSectionDesc(e.target.value)}
              name = "sectionDesc"
              rows="3"
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button> 
            </>
          )}
          </form>

        </>
    )
}

export default AddAdditional