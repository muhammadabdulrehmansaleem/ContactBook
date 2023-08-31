import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
const AddContact=(props)=>{
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    const handleNameChange = (e) => {
        setName(e.target.value);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { email, name };
        if(name===""||email==="")
        {
            alert("All feilds are empty");
            return;
        }
        props.addContactHandler(formData);
        setEmail("");
        setName("");
        navigate('/');
      };
    return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}>

                        </input>
                        <label>Email</label>
                        <input type="text" 
                        name="email" 
                        placeholder="abc@gmail.com"
                        value={email}
                        onChange={handleEmailChange}>

                        </input>
                        <button type="submit" className="ui button blue" style={{marginTopTop:'15px'}}>Submitt</button>
                    </div>
                </form>
            </div>
        );
}
export default AddContact;





// class AddContact extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             email: "",
//         };
//     }
//     state={
//         name:"",
//         email:"",
//     }

//     add=(e)=>{
//         e.preventDefault();
//         if(this.state.name===""||this.state.email===""){
//             alert("All feilds are empty");
//             return;
//         }
//         this.props.addContactHandler(this.state);
//         this.setState({name:"",email:""});
//         const navigate = useNavigate();
//         navigate('/');
//         //i want when the submitt is clicked the person will redirect to '/' route that is the route where our contacts are available now what i want to do is for redirection on clicking
       

//     }
//     render(){
//         console.log(this.props);
//        return(
//         <div className="ui main">
//         <h2>Add Contact</h2>
       
//         <form className="ui form" onSubmit={this.add}>
//             <div className="field">
//                 <label>Name</label>
//                 <input type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={this.state.name}
//                 onChange={(e)=>this.setState({name:e.target.value})}>

//                 </input>
//                 <label>Email</label>
//                 <input type="text" 
//                 name="email" 
//                 placeholder="abc@gmail.com"
//                 value={this.state.email}
//                 onChange={(e)=>this.setState({email:e.target.value})}>

//                 </input>
//                 <button className="ui button blue" style={{marginTopTop:'15px'}}>Submitt</button>
//             </div>

//         </form>
//     </div>
//        );
//     }
// }
// export default withRouter(AddContact); 