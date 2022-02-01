import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  pageSize = 15;

  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  
  render() {

    return <div>
      <BrowserRouter>
          <Navbar/>
          <LoadingBar
        color='red'
        progress={this.state.progress}
      />
          <Routes>
             <Route exact path="/" element={<News  setProgress={this.setProgress} pageSize={this.pageSize} country="in" apiKey="cba3d48c3a4f4f32a41a384f50ebb59e" />}/> 
             <Route exact path="/business" element={<News  setProgress={this.setProgress} key="business" pageSize={this.pagesize} country="in" apiKey="cba3d48c3a4f4f32a41a384f50ebb59e" category="business"/>}/> 
             <Route exact path="/entertainment" element={<News  setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" apiKey="cba3d48c3a4f4f32a41a384f50ebb59e" category="entertainment"/>}/> 
             <Route exact path="/general" element={<News  setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" apiKey="cba3d48c3a4f4f32a41a384f50ebb59e" category="general"/>}/> 
             <Route exact path="/health" element={<News  setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" apiKey="cba3d48c3a4f4f32a41a384f50ebb59e" category="health"/>}/> 
             <Route exact path="/science" element={<News  setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" apiKey="cba3d48c3a4f4f32a41a384f50ebb59e" category="science"/>}/> 
             <Route exact path="/sports" element={<News  setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" apiKey="cba3d48c3a4f4f32a41a384f50ebb59e" category="sports"/>}/> 
             <Route exact path="/technology" element={<News  setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" apiKey="cba3d48c3a4f4f32a41a384f50ebb59e" category="technology"/>}/> 
          </Routes>

        </BrowserRouter>
    </div>;
  }
}