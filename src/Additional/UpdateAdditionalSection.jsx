import { useState } from "react"

const UpdateAdditionalSection = ({values, deleteItem, editItem}) => {
    const [editIndex, setEditIndex] = useState(null)
    const [editSectionName, setEditSectionName] = useState('')
    const [editSectionYear, setEditSectionYear] = useState('')
    const [editSectionTitle, setEditSectionTitle] = useState('')
    const [editSectionPlace, setEditSectionPlace] = useState('')
    const [editSectionDesc, setEditSectionDesc] = useState('')

    const handleEdit = (index, name, year, title, place, desc) => {
        setEditIndex(index)
        setEditSectionName(name)
        setEditSectionYear(year)
        setEditSectionTitle(title)
        setEditSectionPlace(place)
        setEditSectionDesc(desc)
    }

    const handleEditSubmit = (index) => {
        editItem(index, [editSectionName, editSectionYear, editSectionTitle, editSectionPlace, editSectionDesc])
        setEditIndex(null)
    }

    return (
        <div>
            <ul>
                {values.map((section, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <>
                                <div className="form-group">
                                <label>Section Name</label>
                                <input type="text" className="form-control" placeholder=""
                                
                                value={editSectionName}
                                onChange={(e) => setEditSectionName(e.target.value)}
                                name="sectionName"
                                />
                                </div>

                                <div className="form-group">
                                <label>Year</label>
                                <input type="text" className="form-control" placeholder=""
                                
                                value={editSectionYear}
                                onChange={(e) => setEditSectionYear(e.target.value)}
                                name = "sectionYear"
                                />
                                </div>

                                <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" placeholder=""
                                value={editSectionTitle}
                                onChange={(e) => setEditSectionTitle(e.target.value)}
                                name = "sectionTitle"
                                />
                                </div>

                                <div className="form-group">
                                <label>Place</label>
                                <input type="text" className="form-control" placeholder=""
                                value={editSectionPlace}
                                onChange={(e) => setEditSectionPlace(e.target.value)}
                                name = "sectionTitle"
                                />
                                </div>

                                <div className="form-group">
                                <label>Description</label>
                                <textarea type="text" className="form-control" placeholder=""
                                value={editSectionDesc}
                                onChange={(e) => setEditSectionDesc(e.target.value)}
                                name = "sectionDesc"
                                rows="3"
                                /> <br />
                                <button onClick={() => handleEditSubmit(index)}>Save</button>
                                </div>
                            </>
                        ):(
                            <>
                                {section.sectionName} <br />
                                {section.sectionYear} <br />
                                {section.sectionTitle} <br />
                                {section.sectionPlace} <br />
                                {section.sectionDesc} <br />

                                <button onClick={() => deleteItem(index)}>Delete</button>
                                <button onClick={() => handleEdit(index, section)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UpdateAdditionalSection