import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Footer from "./Footer";
// import img from "/Users/harshareddy/Documents/full stack/react3/src/img.jpg";
import Movie from "./Abc";
import Movies from "./Movies";
import Navbar from "./Navbar";
import CompA from "../PropsEx/CompA";

class App extends React.Component{
    render(){
        return <>
        <h4>Hi This is for you</h4>
        <Navbar />
        <hr />
        <Header />
        <hr/>
        <Slider />
        <hr/>
        <Footer />
        <hr/>
        <Movie/>
        <hr/>
        <Movies />
        <hr/>
        <button class="btn btn-primary">test</button>
        <hr/>
        <CompA/>
       </>
}
}
export default App