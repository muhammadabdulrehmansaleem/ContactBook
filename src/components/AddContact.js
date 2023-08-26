import React from "react";
class AddContact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
        };
    }
    state={
        name:"",
        email:"",
    }
    add=(e)=>{
        e.preventDefault();
        if(this.state.name===""||this.state.email===""){
            alert("All feilds are empty");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
        // console.log(this.state);
    }
    render(){
       return(
        <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
            <div className="field">
                <label>Name</label>
                <input type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={(e)=>this.setState({name:e.target.value})}>

                </input>
                <label>Email</label>
                <input type="text" 
                name="email" 
                placeholder="abc@gmail.com"
                value={this.state.email}
                onChange={(e)=>this.setState({email:e.target.value})}>

                </input>
                <button className="ui button blue" style={{marginTopTop:'15px'}}>Submitt</button>
            </div>

        </form>
    </div>
       );
    }
}
export default AddContact;