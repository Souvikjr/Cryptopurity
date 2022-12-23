// import Header from './component/Header';


import './App.css';
import Navbar from './component/Navbar';

import Post from './component/post/Post';



// import Content from './component/Content';
// import Other from './component/Other';
import Home2 from './component/home/Home2';
import Games from './component/Games/Games';


import React, { Routes, Route } from 'react-router-dom';

import News from './component/News';

// import TodoList from './component/TodoList';
// import Data from './component/Data';

function App() {
  // const [start, setStart]=useState(false);
  return (
    <>
    {/* <div className='quiz'>
    { start ? <Deal /> : <Start props={setStart} />} 
    </div> */}
       <Navbar/>
       
      <Routes>
       
      <Route path='/'element={<Home2/>}/>
      
      <Route path='Games'element={<Games/>}/>
      <Route path='Post'element={<Post/>}/>
      <Route path='/create' element={<News/>}/>
     
      {/* <Route path='More'element={<More/>}/> */}
      {/* <Route path='Question' element= {<Question/>}/> */}
      {/* <Route path='Content' element= {<Content/>}/>
      <Route path='Other' element= {<Other/>}/>
        */}
       
      </Routes>
      
     
      </>
  );
}

export default App;
