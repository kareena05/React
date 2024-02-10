function AddToDo(){
    return <div>
    <div className="row my-row">
    <div className="col-4">
      <input
        type="text"
        name=""
        id=""
        className="form-control"
        placeholder="Enter ToDo Here"
      />
    </div>
    <div className="col-4">
      <input
        type="date"
        name=""
        id=""
        className="form-control"
        value={new Date()}
      />
    </div>
    <div className="col-2">
      <button className="btn btn-success my-button">Add</button>
    </div>
  </div>
  </div>
}
export default AddToDo;