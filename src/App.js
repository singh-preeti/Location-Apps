import React from 'react';
import HemisphereDisplay from './HemishphereDisplay';

class App extends React.Component{
   
//imdb api -> 
   state  = { latitude: null, errorMessage: '' }
       
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude: position.coords.latitude})
            },
            (error) => {
                this.setState({errorMessage: error.message })
            }
        );
    }
    render() {
       //conditional rendering
       if(this.state.errorMessage && !this.state.latitude)
       {
        return <div>{this.state.errorMessage}</div>
       }
       if(!this.state.errorMessage && this.state.latitude)
       {
         return <div><HemisphereDisplay latitude={this.state.latitude} /></div>
       }
       else{
        return <div>Loading..</div>
       }
          
    
    }
}

// const App = () => {
//     //navigator.geolocation.getCurrentPosition(showPosition);
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=> console.log(position),
//         (error) => console.log(error)
//     ); // useState,useEffect
//     return(
//         <div>
//         Latitude:
//         </div>
//     )
// }
export default App;