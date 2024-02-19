
import './App.css'
import AddPersonalInfo from './PersonalInfo/AddPersonalInfo'
import AddEducation from './Education/AddEducation'
import AddWorkExp from './Work/AddWorkExp'
import AddAdditional from './Additional/AddAdditional'
import { useState } from 'react';

import PersonalInfo from './PersonalInfo/PersonalInfo'
import Education from './Education/Education'
import Work from './Work/Work'
import Additional from './Additional/Additional'
import EducationDisplay from './Education/EducationDisplay'
import UpdateWork from './Work/UpdateWork'
import UpdateAdditionalSection from './Additional/UpdateAdditionalSection'


function App() {
  const [submittedValues, setSubmittedValues] = useState(null);
  const [eduValues, setEduValues] = useState([])
  const [workValues, setWorkValues] = useState([])
  const [additionalValues, setAdditionalValues] = useState([])

  
  // const handleFormSubmit = (inputValue) => {
   
  //   setResult(inputValue);
  // };
  const handleEduSubmit = (value) =>{
    setEduValues([...eduValues, value])
  }

  const handleWorkSubmit = (value) =>{
    setWorkValues([...workValues, value])
  }

  const handleTestSubmit = (values) => {
    setSubmittedValues(values);
  }

  const handleAddSubmit = (value) => {
    setAdditionalValues([...additionalValues, value]);
  }
  function handleChangeEdu(index,newValue){

    const updatedValues = [...eduValues];
    updatedValues[index] = newValue;
    setEduValues(updatedValues);
  }

  function handleDeleteEdu(index) {
    const updatedEduValues = [...eduValues];
    updatedEduValues.splice(index, 1);
    setEduValues(updatedEduValues);
  }
  
  function handleChangeWork(index, newValue){
    const updatedValues = [...workValues]
    updatedValues[index] = newValue
    setWorkValues(updatedValues)
  }

  function handleDeleteWork(index){
    const updatedWorkValues = [...workValues]
    updatedWorkValues.splice(index, 1)
    setWorkValues(updatedWorkValues)
  }

  function handleChangeAddSection(index, newValue){
    const updatedValues = [...additionalValues]
    updatedValues[index] = newValue
    setAdditionalValues(updatedValues)
  }

  function handleDeleteAddSection(index){
    const updatedValues = [...additionalValues]
    updatedValues.splice(index, 1)
    setAdditionalValues(updatedValues)
  }

  return(
    <>
    <div className="container-fluid">
        <div className="row ">
            <div className="card col-lg-12">
              <div className="card-body text-center">
                <h3>CV APPLICATION</h3>
              </div>
            </div>
        </div>
      
      <div className="row mt-3">
        <div className="card col-md-3 px-3">
          
          <AddPersonalInfo onSubmit={handleTestSubmit}/>

          <AddEducation onSubmit={handleEduSubmit}/>
          <Education values={eduValues}
          editItem={handleChangeEdu}
          deleteItem={handleDeleteEdu}
          />

          <AddWorkExp onSubmit={handleWorkSubmit} />
          <UpdateWork values={workValues}
          editItem={handleChangeWork}
          deleteItem={handleDeleteWork}
          />

          <AddAdditional onSubmit={handleAddSubmit}/>
          <UpdateAdditionalSection values = {additionalValues}
          editItem={handleChangeAddSection}
          deleteItem={handleDeleteAddSection}/>
        </div>

        
        <div className="card col-lg-9 col-md-9">
          {submittedValues && <PersonalInfo values={submittedValues} />}
          <EducationDisplay values= {eduValues}/>
          <Work values={workValues}/>
          <Additional values={additionalValues}/>
        </div>
      </div>
    </div>
    </>
  );
  
  
}

export default App
