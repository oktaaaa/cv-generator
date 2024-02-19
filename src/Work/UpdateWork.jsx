import { useState } from "react"

const UpdateWork = ({values, deleteItem, editItem}) => {
    const [editIndex, setEditIndex] = useState(null)
    const [editYear, setEditYear] = useState('')
    const [editCompany, setEditCompany] = useState('')
    const [editJobTitle, setEditJobTitle] = useState('')
    const [editDesc, setEditDesc] = useState('')

    const handleEdit = (index, year, company, jobTitle, desc) => {
        setEditIndex(index)
        setEditYear(year)
        setEditCompany(company)
        setEditJobTitle(jobTitle)
        setEditDesc(desc)
    }

    const handleEditSubmit = (index) => {
        editItem(index, [editYear, editCompany, editJobTitle, editDesc])
        setEditIndex(null)
    }

    return(
        <div>
          
          <ul>
          {values.map((work, index) => (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <label>Year</label> <br />
                  <input type="text" 
                  value={editYear}
                  onChange={(e) => setEditYear(e.target.value)}
                  /> <br />

                  <label>Company</label><br />
                  <input type="text" 
                  value={editCompany}
                  onChange={(e) => setEditCompany(e.target.value)}
                  /> <br />

                <label>Job Title</label><br />
                  <input type="text" 
                  value={editJobTitle}
                  onChange={(e) => setEditJobTitle(e.target.value)}
                  /> <br />

                  <label>Description</label><br />
                  <textarea type="text" 
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  /><br />
                  <button onClick={() => handleEditSubmit(index)}>Save</button>
                </>
                
              ):(
                <>
                {/* {edu.year} <br />
                {edu.school} <br />
                {edu.description} */}
  
                {work.year} <br />
                {work.company} <br />
                {work.jobTitle} <br />
                {work.description} <br />
                
                <button onClick={() => deleteItem(index)}>Delete</button>
                <button onClick={() => handleEdit(index, work)}>Edit</button>
                </>
              )}
               
            </li>
          ))}
          </ul>
        </div>
    )
}

export default UpdateWork