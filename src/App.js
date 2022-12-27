import './App.css';
import Navbar from './component/Navbar';
import Post from './component/post/Post';

import Home2 from './component/home/Home2';
import Games from './component/Games/Games';
import BlogDetails from "../src/component/post/BlogDetails"
import Article from "../src/component/post/Article"
import React, { Routes, Route } from 'react-router-dom';
import News from './component/News';
import Login from './component/auth/Login';
import Register from './component/auth/Register';


function App() {
  
  return (
    <>
    
       <Navbar/>
       
      <Routes>
       
      <Route path='/'element={<Home2/>}/>     
      <Route path='Games'element={<Games/>}/>
      <Route path='Post'element={<Post/>}/>
      <Route path='/create' element={<News/>}/>
      <Route path="/blog_details/:title" element={<BlogDetails />} /> 
      <Route path="/article/:id" element={<Article />} />
      <Route path='/signin'element={<Login/>}/>
      <Route path='/register'element={<Register/>}/>
      </Routes>
      </>
  );
}

export default App;
