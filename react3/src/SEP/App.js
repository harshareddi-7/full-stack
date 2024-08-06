import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Footer from "./Footer";
// import img from "/Users/harshareddy/Documents/full stack/react3/src/img.jpg";
import Movie from "./Movie";

class App extends React.Component{
    render(){
        return <>
        <h4>Hi This is for you</h4>
        <hr />
        <Header />
        <hr/>
        <Slider />
        <hr/>
        <Footer />
        <hr/>
        <Movie />
        <Movie/>
       </>
}
}
export default App