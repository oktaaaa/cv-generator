

export default function PersonalInfo(){
    return(
        <div>
            <h4>Personal Information</h4>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter email"/>
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input type="text" className="form-control" placeholder=""/>
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}