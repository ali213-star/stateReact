import React,{Component} from "react";
 class Appclass extends Component{
     constructor(props){
         super (props);
         this.state={
            fullName: "Sadraoui ali",
            bio: "develloper full satck js  ",
            profession: "jobless :(",
            show: false,
            count: 0,
            imgSrc :" "        
         };
     }
     show =()=> {
        this.setState({ show: !this.state.show });
    };
    componentDidMount(){
        setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
        console.log("component did mount");
    };
    render() {
        return (
          <div>
            <h1>welcome</h1>
            {this.state.show && (
              <>
                <h1>{this.state.fullName}</h1> <br />
               <h1>{this.state.bio}</h1>  <br /><br /> 
               <img src={this.state.imgSrc} alt=" " ></img>
              <h1>{this.state.profession}</h1>
              </>
            )}
            <button onClick={this.show}>show me</button>
            <h4>{this.state.count}</h4>
           
    
          </div>
        );
}
 }
 export default Appclass;

 