import React from 'react'
import AddArticle from './AddArticle'
import Articles from './Articles'

function Post() {
  return (
    <div>
     
      <div className="row ">
                
              

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