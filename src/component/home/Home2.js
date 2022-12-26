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
  const clickHandler = (title) => {
    console.log(title)
    navigate(`/blog_details/${title}`)
  }


  const navigate = useNavigate()




  return (


    <>
      <div id='pad'>
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

                return (

                  <form onClick={(e) => clickHandler(value.title)}>


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

                  <form onClick={(e) => clickHandler(value.title)}>


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
               
                return (

                  <form onClick={(e) => clickHandler(value.title)}>


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
               
                return (

                  <form onClick={(e) => clickHandler(value.title)}>


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
               
                return (

                  <form onClick={(e) => clickHandler(value.title)}>


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
               
                return (

                  <form onClick={(e) => clickHandler(value.title)}>


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
               
                return (

                  <form onClick={(e) => clickHandler(value.title)}>


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
                
                return (

                  <form onClick={(e) => clickHandler(value.title)}>


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
               
                return (

                  <form onClick={(e) => clickHandler(value.title)}>


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
               
                return (

                  <form onClick={(e) => clickHandler(value.title)}>


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
                
                return (

                  <form onClick={(e) => clickHandler(value.title)}>


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
                
                return (

                  <form onClick={(e) => clickHandler(value.title)}>


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