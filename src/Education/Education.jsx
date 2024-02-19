import { useState } from "react"

const Education = ({values, deleteItem, editItem}) => {
  const [editIndex, setEditIndex] = useState(-1);
  const [editSchool, setEditSchool] = useState('');
  const [editYear, setEditYear] = useState('')
  const [editDesc, setEditDesc] = useState('')

  const handleEditStart = (index, year, school, desc) => {
    setEditIndex(index);
    setEditSchool(school);
    setEditYear(year)
    setEditDesc(desc)
  };

  const handleEditSubmit = (index) => {
    editItem(index, [editSchool, editYear, editDesc]);
    
    setEditIndex(-1)
  };
  
  return(
      <div>
        <h5>Edu</h5>
        
        <ul>
        {values.map((edu, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <label>Year</label> <br />
                <input type="text" 
                value={editYear}
                onChange={(e) => setEditYear(e.target.value)}
                /> <br />
                <label>University Name</label><br />
                <input type="text" 
                value={editSchool}
                onChange={(e) => setEditSchool(e.target.value)}
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

              {edu[0]} <br />
              {edu[1]} <br />
              {edu[2]} <br />
              
              <button onClick={() => deleteItem(index)}>Delete</button>
              <button onClick={() => handleEditStart(index, edu[0], edu[1], edu[2])}>Edit</button>
              </>
            )}
             
          </li>
        ))}
        </ul>
      </div>
    )
  }

  
export default Education