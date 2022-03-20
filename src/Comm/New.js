import React,{Component} from "react";
import img1 from "../imgg/profilimg.webp";


 class New extends Component{
    constructor(props){
        super(props);
        this.state={
            fullname:"Alex parker",
            bio:"Worked in many companies",
            imgSrc:img1,
            profession:"Engineer",
            show:false,
            counter:0
        };
    }
         
    show =() =>{
         this.setState({
             show:!this.state.show
         })
    }

    handleChange=(e)=>{
        this.setState({[e.target.Name]:e.target.value})
    }
    add=() =>{this.setState({counter:++ this.state.counter})}
    componentDidMount(){
        setInterval(()=>this.setState({counter:this.state.counter+1}),1000)
    }

        
    
    
    render(){
        return (
            <>
            <h1>Alex Murcer</h1>
        {this.state.show && <p>I'm {this.state.fullname} .I'm {this.state.bio} and I'm {this.state.profession} <br/>< img src={this.state.imgSrc} alt="profil"/></p>
        }
        
        <button onClick={this.show}>Show my profil</button>
        <div> show my {this.state.counter}</div>
        
        
        </>
        )

    }

}

export default New;