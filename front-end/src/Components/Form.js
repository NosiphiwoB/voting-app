import Navbar from "./Navbar";

const Form = (props) => {
  const {handleChange, handleSubmit, partyname, startdate, leader, members} = props;
    return(
        <div>
            <Navbar/>

       <div>
        <h1>Add Party</h1>        
       </div>

       <form id="form" onSubmit={handleSubmit}>
         <div>
           <label>Party Name</label>
           <input
            onChange={handleChange}
            name="partyname"
            value={partyname}
           />
         </div>

         <div>
          <label>Start Date</label>
          <input type="date"
           onChange={handleChange}
           name="startdate"
           value={startdate}
          />
         </div>

        <div>
          <label>Leader</label>
          <input 
          onChange={handleChange}
          name="leader"
          value={leader}
          />
        </div>

        <div>
         <label>Members</label>
         <input type="number"
         onChange={handleChange}
         name="members"
         value={members}
         />
        </div>

        <div>
         <button type="submit">Submit</button>
        </div>



       </form>


        </div>
        
        
    )
}

export default Form