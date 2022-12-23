import React from 'react'
import Login from '../auth/Login'
import Register from '../auth/Register'
import AddArticle from './AddArticle'
import Articles from './Articles'

function Post() {
  return (
    <div>
      <Login/>
      <Register/>
      <div className="row mt-5">
                <div className="col-md-8">
                  <Articles />
                </div>
                <div className="col-md-4">
                  <AddArticle />
                </div>
              </div>
    </div>
  )
}

export default Post