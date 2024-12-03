import React ,{useState} from 'react';
function UserReg(){
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);


const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("User Registered:", {name ,email});
  setIsSubmitted(true);
};
return(
  <div>
  <h2>Kindly Register Here</h2>
{isSubmitted && <p>User Registered Successfully!</p>} {/* Show feedback message */}
      
  <form onSubmit={handleSubmit}>
  <div>
    <label>Name:</label>
    <input type="text"
    value={name}
    onChange={(e)=>
      setName(e.target.value)
    }/>
     </div>
       <div>
    <label>Email:</label>
    <input type="email"
    value={email}
    onChange={(e)=>
      setEmail(e.target.value)
    }/>
  </div>
  <button type="submit">Register</button>
  </form>
  </div>
);
  }
  export default UserReg;