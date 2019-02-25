import React from 'react';
import About1 from './about1';
import {userData} from './shared';
import {UserContext} from './context'

class About extends React.Component{
    constructor(props){
        debugger;
        super();
    }
    render(){
        debugger;
        return <div>I am About page <UserContext.Provider value={userData}> <About1 /></UserContext.Provider></div>
    }
}

// const About =(d)=>{
//     debugger;
//     return <div>am about page <About1 i="1"  /></div>
// }

export default About;