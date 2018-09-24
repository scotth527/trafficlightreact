import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class Home extends React.Component{
     constructor(){
        super();
        this.state = {
            lights: {
                red: false,
                yellow: false,
                green: false
            }
            //your state properties here
        };
    }
    
    updateLight(blah) {
        let currentState = this.state;
        currentState.lights[blah] = !currentState.lights[blah];
        if(blah === "red") {
            currentState.lights["yellow"] = false;
            currentState.lights["green"] = false;
        } else if (blah === "yellow") {
            currentState.lights["red"] = false;
            currentState.lights["green"] = false;
        }
        else if (blah === "green") {
            currentState.lights["red"] = false;
            currentState.lights["yellow"] = false;
        }
        this.setState(currentState); 
 
    }   
    
    render(){
        
       
        let whenRed = "";
        let whenYellow = "";
        let whenGreen = "";
        
        if(this.state.lights.red){
            whenRed = "selected";
            whenYellow="";
            whenGreen = "";
        }
        
        if(this.state.lights.yellow){
            whenYellow = "selected";
            whenRed = "";
            whenGreen = "";
        }
        
        if(this.state.lights.green){
            whenGreen = "selected";
            whenRed = "";
            whenYellow = "";
        }
        
        return (
            <React.Fragment>
                <div id="trafficTop" className="mx-auto"></div>
                <div id="container" className="mx-auto">
                    <div id="box" className="mx-auto p-2">
                        <div onClick={()=> this.updateLight("red")} className={"light red " + whenRed + " mx-auto mt-3 mb-1"}></div>
                        <div onClick={()=> this.updateLight("yellow")} className={"light yellow mx-auto mb-1 " +  whenYellow}> </div>
                        <div onClick={()=> this.updateLight("green")} className={"light green mx-auto mb-1 " + whenGreen}></div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}
