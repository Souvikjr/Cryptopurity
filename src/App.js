// import Header from './component/Header';
import './App.css';
import Navbar from './component/Navbar';
import Post from './component/post/Post';
// import Content from './component/Content';
// import Other from './component/Other';
import Home2 from './component/home/Home2';
import Games from './component/Games/Games';
import BlogDetails from "../src/component/post/BlogDetails"


import React, { Routes, Route } from 'react-router-dom';

import News from './component/News';



function App() {
  // const [start, setStart]=useState(false);
  return (
    <>
    
       <Navbar/>
       
      <Routes>
       
      <Route path='/'element={<Home2/>}/>
      
      <Route path='Games'element={<Games/>}/>
      <Route path='Post'element={<Post/>}/>
      <Route path='/create' element={<News/>}/>
      <Route path="/blog_details/:title" element={<BlogDetails />} /> 
      </Routes>
      
     
      </>
  );
}

export default App;
