import React, { useState, useEffect, useRef } from 'react'
import './Home2.css'

import client from '../sanityClient'
import { addDoc, collection } from 'firebase/firestore'

import imageUrlBuilder from '@sanity/image-url'
import axios from 'axios'
import Footer from '../Footer'



import { Link } from 'react-router-dom'




import { useNavigate } from 'react-router-dom'


function Home2() {



  const [like, setLike] = useState(0)
  const [likeactive, setLikeactive] = useState(false)
  const [name, setName] = useState()
  const head = useRef(null)
  const [data, setData] = useState([])






  const getNews = () => {
    axios.get("https://q9xfz7x1.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D&%24post=%22%22")
      .then((response) => {
        console.log(response.data.result)
        setData(response.data.result)

      })
  }

  const builder = imageUrlBuilder(client)

  function urlFor(source) {
    return builder.image(source)
  }

  useEffect(() => {
    getNews()
  }, []);


  const navigate = useNavigate()




  return (


    <>





      {/* <div>

                          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                                  <div class="container-fluid">
                                      <a class="navbar-brand" className='nvimg' href="#"><img src={logo} width="100px" alt="..."/></a>
                                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                      <span class="navbar-toggler-icon"></span>
                                      </button>
                                      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                          <li class="nav-item">
                                          <Link class="nav-link active" aria-current="page" href="#" className="nav-link text-white" to="/">Home</Link>
                                          
                                          </li>
                                          <li class="nav-item">
                                         
                                          <Link to="Games" class="nav-link" href="#">Games <i class="bi bi-controller"></i></Link>
                                          </li>
                                          <li class="nav-item">
                                          <Link to="Post" class="nav-link" href="#">Post <i class="bi bi-rss"></i></Link>
                                          </li>
                                          <li class="nav-item">
                                          <a class="nav-link"  href="#">More <i class="bi bi-cart3"></i></a>
                                          </li>
                                          
                                      </ul>
                                      <form class="d-flex">
                                        
                                          <button class="btn btn-outline-light"  >Log  In</button>
                                      </form>
                                      </div>
                                  </div>
                                  </nav>    

              </div> */}



      <div id='pad'>





        {/* <div className='row justify-content-evenly ' id='pad'>
                  
                          <div className='col-md-3  pt-5 f_l'>
                                 
                              
                                    <div className='col-md-11 col-11 col-lg-12 pt-2 pb-2 coll_11'>

                                    {

                                      data.slice(0, 3).map((value) => {
                                        // const url = 'image-5b02f7a53fe9fbf49691ff73dbf739bcb2c1fe6c-1024x768-jpg'
                                        return (

                                          <form>
                                                <div className='row justify-content-evenly news_ro'>

                                                            <div className='col-md-4 justify-content-center'>
                                                            <img className=' new_imgg img-fluid' src={urlFor(value.mainImage.asset._ref).width(2000).url()} alt=""/>

                                                            </div>
                                                            <div className='col-md-6 news_text'>
                                                            <h6>GUIDES</h6>
                                                            <h5>{value.title}</h5>
                                                            <p>{value._createdAt}</p>
                                                            
                                                            </div>
                                                      </div>

                                                  </form>

                                                        );
                                                        })
                                                        }

                                    </div>
                                
                                    

                  
                  
                  
                          </div>


                      <div className='col-md-5 pt-5'>
                            




                      {

                      data.slice(0, 1).map((value) => {
                        // const url = 'image-5b02f7a53fe9fbf49691ff73dbf739bcb2c1fe6c-1024x768-jpg'
                        return (

                          <form>


                                  <div className='card1'>
                                              <div className='imgBx1'>
                                                <img  src={urlFor(value.mainImage.asset._ref).width(2000).url()}  className="img1" alt="..."/>
                                              </div>
                                              <div className='content1'>
                                                    <div className='details1'>
                                                            <p>Blockchain</p>
                                                            <h2>{value.title}</h2>
                                                            <p>{value._createdAt}</p>
                                                    </div>
                                              </div>


                                        </div>

                                        </form>

                                    );
                                    })
                                    }

                           
                       </div>



                       <div className='col-md-3  pt-5 f_l'>
                                 
                              
                                 <div className='col-md-11 col-11 col-lg-12 pt-2 pb-2 coll_11'>

                                 {

                                   data.slice(0, 3).map((value) => {
                                     // const url = 'image-5b02f7a53fe9fbf49691ff73dbf739bcb2c1fe6c-1024x768-jpg'
                                     return (

                                       <form>
                                             <div className='row justify-content-evenly news_ro'>

                                                         <div className='col-md-4 justify-content-center'>
                                                         <img className=' new_imgg img-fluid' src={urlFor(value.mainImage.asset._ref).width(2000).url()} alt=""/>

                                                         </div>
                                                         <div className='col-md-6 news_text'>
                                                         <h6>GUIDES</h6>
                                                         <h5>{value.title}</h5>
                                                         <p>{value._createdAt}</p>
                                                         
                                                         </div>
                                                   </div>

                                               </form>

                                                     );
                                                     })
                                                     }

                                 </div>
                             
                                 

               
               
               
                       </div>


                       






                </div> */}


        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4'>
            first sec
            </div>

            <div className='col-md-4'>
              sec 

            </div>

            <div className='col-md-4'>
             last sec
            </div>

          </div>
        </div>




        <div className='row justify-content-evenly pl-3 body_s'>

          <h3 className='header'>Crypto <i class="bi bi-back"></i></h3>




          <div className='col-md-3 pt-5 '>

            {

              data.slice(0, 1).map((value) => {
                // const url = 'image-5b02f7a53fe9fbf49691ff73dbf739bcb2c1fe6c-1024x768-jpg'
                return (

                  <form onClick={() => navigate("create")}>


                    <div className='card'>
                      <div className='imgBx'>
                        <img src={urlFor(value.mainImage.asset._ref).width(2000).url()} className="img" alt="..." />
                      </div>
                      <div className='content'>
                        <div className='details'>
                          <p>Blockchain</p>
                          <h2>{value.title}</h2>
                          <p>{value._createdAt}</p>
                        </div>
                      </div>



                    </div>


                  </form>

                );
              })
            }


          </div>



          <div className='col-md-3 pt-5'>
            {

              data.slice(1, 2).map((value) => {
                // const url = 'image-5b02f7a53fe9fbf49691ff73dbf739bcb2c1fe6c-1024x768-jpg'
                return (

                  <form onClick={() => navigate("create")}>


                    <div className='card'>
                      <div className='imgBx'>
                        <img src={urlFor(value.mainImage.asset._ref).width(2000).url()} className="img" alt="..." />
                      </div>
                      <div className='content'>
                        <div className='details'>
                          <p>Blockchain</p>
                          <h2>{value.title}</h2>
                          <p>{value._createdAt}</p>
                        </div>
                      </div>



                    </div>


                  </form>

                );
              })
            }
          </div>

          <div className='col-md-3 pt-5'>
            {

              data.slice(2, 3).map((value) => {
                // const url = 'image-5b02f7a53fe9fbf49691ff73dbf739bcb2c1fe6c-1024x768-jpg'
                return (

                  <form onClick={() => navigate("create")}>


                    <div className='card'>
                      <div className='imgBx'>
                        <img src={urlFor(value.mainImage.asset._ref).width(2000).url()} className="img" alt="..." />
                      </div>
                      <div className='content'>
                        <div className='details'>
                          <p>Blockchain</p>
                          <h2>{value.title}</h2>
                          <p>{value._createdAt}</p>
                        </div>
                      </div>



                    </div>


                  </form>

                );
              })
            }
          </div>




          <div className='col-md-3 pt-5'>
            {

              data.slice(2, 3).map((value) => {
                // const url = 'image-5b02f7a53fe9fbf49691ff73dbf739bcb2c1fe6c-1024x768-jpg'
                return (

                  <form>


                    <div className='card'>
                      <div className='imgBx'>
                        <img src={urlFor(value.mainImage.asset._ref).width(2000).url()} className="img" alt="..." />
                      </div>
                      <div className='content'>
                        <div className='details'>
                          <p>Blockchain</p>
                          <h2>{value.title}</h2>
                          <p>{value._createdAt}</p>
                        </div>
                      </div>



                    </div>


                  </form>

                );
              })
            }
          </div>



        </div>





        <div className='row justify-content-evenly pl-3 body_s'>

          <h3 className='header'>NFT <i class="bi bi-bar-chart-line-fill"></i></h3>




          <div className='col-md-3 pt-5 '>

            {

              data.slice(4, 5).map((value) => {
                // const url = 'image-5b02f7a53fe9fbf49691ff73dbf739bcb2c1fe6c-1024x768-jpg'
                return (

                  <form>


                    <div className='card'>
                      <div className='imgBx'>
                        <img src={urlFor(value.mainImage.asset._ref).width(2000).url()} className="img" alt="..." />
                      </div>
                      <div className='content'>
                        <div className='details'>
                          <p>Blockchain</p>
                          <h2>{value.title}</h2>
                          <p>{value._createdAt}</p>
                        </div>
                      </div>



                    </div>


                  </form>

                );
              })
            }


          </div>



          <div className='col-md-3 pt-5'>
            {

              data.slice(5, 6).map((value) => {
                // const url = 'image-5b02f7a53fe9fbf49691ff73dbf739bcb2c1fe6c-1024x768-jpg'
                return (

                  <form>


                    <div className='card'>
                      <div className='imgBx'>
                        <img src={urlFor(value.mainImage.asset._ref).width(2000).url()} className="img" alt="..." />
                      </div>
                      <div className='content'>
                        <div className='details'>
                          <p>Blockchain</p>
                          <h2>{value.title}</h2>
                          <p>{value._createdAt}</p>
                        </div>
                      </div>



                    </div>


                  </form>

                );
              })
            }
          </div>

          <div className='col-md-3 pt-5'>
            {

              data.slice(6, 7).map((value) => {
                // const url = 'image-5b02f7a53fe9fbf49691ff73dbf739bcb2c1fe6c-1024x768-jpg'
                return (

                  <form>


                    <div className='card'>
                      <div className='imgBx'>
                        <img src={urlFor(value.mainImage.asset._ref).width(2000).url()} className="img" alt="..." />
                      </div>
                      <div className='content'>
                        <div className='details'>
                          <p>Blockchain</p>
                          <h2>{value.title}</h2>
                          <p>{value._createdAt}</p>
                        </div>
                      </div>



                    </div>


                  </form>

                );
              })
            }
          </div>


          <div className='col-md-3 pt-5'>
            {

              data.slice(4, 5).map((value) => {
                // const url = 'image-5b02f7a53fe9fbf49691ff73dbf739bcb2c1fe6c-1024x768-jpg'
                return (

                  <form>


                    <div className='card'>
                      <div className='imgBx'>
                        <img src={urlFor(value.mainImage.asset._ref).width(2000).url()} className="img" alt="..." />
                      </div>
                      <div className='content'>
                        <div className='details'>
                          <p>Blockchain</p>
                          <h2>{value.title}</h2>
                          <p>{value._createdAt}</p>
                        </div>
                      </div>



                    </div>


                  </form>

                );
              })
            }
          </div>






        </div>








        <div className='row justify-content-evenly pl-3 body_s'>

          <h3 className='header'>Metavarse <i class="bi bi-headset-vr"></i></h3>




          <div className='col-md-3 pt-5 '>

            {

              data.slice(5, 6).map((value) => {
                // const url = 'image-5b02f7a53fe9fbf49691ff73dbf739bcb2c1fe6c-1024x768-jpg'
                return (

                  <form>


                    <div className='card'>
                      <div className='imgBx'>
                        <img src={urlFor(value.mainImage.asset._ref).width(2000).url()} className="img" alt="..." />
                      </div>
                      <div className='content'>
                        <div className='details'>
                          <p>Blockchain</p>
                          <h2>{value.title}</h2>
                          <p>{value._createdAt}</p>
                        </div>
                      </div>



                    </div>


                  </form>

                );
              })
            }


          </div>



          <div className='col-md-3 pt-5'>
            {

              data.slice(6, 7).map((value) => {
                // const url = 'image-5b02f7a53fe9fbf49691ff73dbf739bcb2c1fe6c-1024x768-jpg'
                return (

                  <form>


                    <div className='card'>
                      <div className='imgBx'>
                        <img src={urlFor(value.mainImage.asset._ref).width(2000).url()} className="img" alt="..." />
                      </div>
                      <div className='content'>
                        <div className='details'>
                          <p>Blockchain</p>
                          <h2>{value.title}</h2>
                          <p>{value._createdAt}</p>
                        </div>
                      </div>



                    </div>


                  </form>

                );
              })
            }
          </div>

          <div className='col-md-3 pt-5'>
            {

              data.slice(7, 8).map((value) => {
                // const url = 'image-5b02f7a53fe9fbf49691ff73dbf739bcb2c1fe6c-1024x768-jpg'
                return (

                  <form>


                    <div className='card'>
                      <div className='imgBx'>
                        <img src={urlFor(value.mainImage.asset._ref).width(2000).url()} className="img" alt="..." />
                      </div>
                      <div className='content'>
                        <div className='details'>
                          <p>Blockchain</p>
                          <h2>{value.title}</h2>
                          <p>{value._createdAt}</p>
                        </div>
                      </div>



                    </div>


                  </form>

                );
              })
            }
          </div>




          <div className='col-md-3 pt-5'>
            {

              data.slice(6, 7).map((value) => {
                // const url = 'image-5b02f7a53fe9fbf49691ff73dbf739bcb2c1fe6c-1024x768-jpg'
                return (

                  <form>


                    <div className='card'>
                      <div className='imgBx'>
                        <img src={urlFor(value.mainImage.asset._ref).width(2000).url()} className="img" alt="..." />
                      </div>
                      <div className='content'>
                        <div className='details'>
                          <p>Blockchain</p>
                          <h2>{value.title}</h2>
                          <p>{value._createdAt}</p>
                        </div>
                      </div>



                    </div>


                  </form>

                );
              })
            }
          </div>






        </div>

        <Footer />

      </div>
      
    </>


  )
}

export default Home2