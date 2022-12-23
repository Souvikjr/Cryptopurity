// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
    
//       <footer className="bg-darkk text-center text-white">

// <div className="container p-4">
//   <section className="mb-4">
//     <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
//       ><i className="fab fa-facebook-f"></i
//     ></a>

//     <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
//       ><i className="fab fa-twitter"></i
//     ></a>

//     <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
//       ><i className="fab fa-google"></i
//     ></a>

    
//     <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
//       ><i className="fab fa-instagram"></i
//     ></a>

   
//     <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
//       ><i className="fab fa-linkedin-in"></i
//     ></a>

    
//     <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
//       ><i className="fab fa-github"></i
//     ></a>
//   </section>
  
//   {/* <section className="">
//     <form action="">
      
//       <div className="row d-flex justify-content-center">
        
//         <div className="col-auto">
//           <p className="pt-2">
//             <strong>Sign up for our newsletter</strong>
//           </p>
//         </div>
       
//         <div className="col-md-5 col-12">
          
//           <div className="form-outline form-white mb-4">
//             <input type="email" id="form5Example21" className="form-control" />
//             <label className="form-label" for="form5Example21">Email address</label>
//           </div>
//         </div>
        
//         <div className="col-auto">
         
//           <button type="submit" className="btn btn-outline-light mb-4">
//             Subscribe
//           </button>
//         </div>
       
//       </div>
      
//     </form>
//   </section> */}
 
//   {/* <section className="mb-4">
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
//       repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
//       eum harum corrupti dicta, aliquam sequi voluptate quas.
//     </p>
//   </section> */}
 
//   <section className="">
   
//     <div className="row">
     
//       <div className="col-lg-3 col-md-6 mb-4 mb-md-0 col-sm-8">
//         <h5 className="text-uppercase">Links</h5>

//         <ul className="list-unstyled mb-0">
//           <li>
//             <a href="#!" className="text-white">Home</a>
//           </li>
//           <li>
//             <a href="#!" className="text-white">About Us</a>
//           </li>
//           <li>
//             <a href="#!" className="text-white">Services</a>
//           </li>
//           <li>
//             <a href="#!" className="text-white">Conttact Us</a>
//           </li>
//         </ul>
//       </div>
  

     
//       <div className="col-lg-3 col-md-6 mb-4 mb-md-0 col-sm-8">
//         <h5 className="text-uppercase">Links</h5>

//         <ul className="list-unstyled mb-0">
//           <li>
//             <a href="#!" className="text-white">Home</a>
//           </li>
//           <li>
//             <a href="#!" className="text-white">About Us</a>
//           </li>
//           <li>
//             <a href="#!" className="text-white">Services</a>
//           </li>
//           <li>
//             <a href="#!" className="text-white">Contact Us</a>
//           </li>
//         </ul>
//       </div>
     
//       <div className="col-lg-3 col-md-6 mb-4 mb-md-0 col-sm-8 ">
//         <h5 className="text-uppercase">Links</h5>

//         <ul className="list-unstyled mb-0">
//           <li>
//             <a href="#!" className="text-white">Link 1</a>
//           </li>
//           <li>
//             <a href="#!" className="text-white">Link 2</a>
//           </li>
//           <li>
//             <a href="#!" className="text-white">Link 3</a>
//           </li>
//           <li>
//             <a href="#!" className="text-white">Link 4</a>
//           </li>
//         </ul>
//       </div>
     
//       <div className="col-lg-3 col-md-6 mb-4 mb-md-0 col-sm-8 ">
//         <h5 className="text-uppercase">Links</h5>

//         <ul className="list-unstyled mb-0">
//           <li>
//             <a href="#!" className="text-white">Link 1</a>
//           </li>
//           <li>
//             <a href="#!" className="text-white">Link 2</a>
//           </li>
//           <li>
//             <a href="#!" className="text-white">Link 3</a>
//           </li>
//           <li>
//             <a href="#!" className="text-white">Link 4</a>
//           </li>
//         </ul>
//       </div>
     
//     </div>
   
//   </section>
 
// </div>


// </footer>

//     </div>
    
//   )
// }

// export default Footer




import React from 'react'
import '../component/Footer.css'
import footerpic from '../component/Images/footerlogo.png'

function Footer() {
  return (
         <div className='foot'>
            <hr></hr>
              <div className='container-fluid p-3'>

                
                  <div className='row pb-5'>
                               <div className='col-sm-3 pt-2'>
                                          <div className='row '> 
                                                  <div className='col-2'>
                                                      <img src={footerpic}  className="img" alt="..."/>
                                                  </div>
                                                  <div className='col-6'>
                                                      <h3 className='e1500'>CryptoNews</h3> 
                                                  </div>
                                          
                                          </div>
                                              <div>
                                                  <p>Nulla vehicula massa eget aliquet sagittis. Nulla ac nisi mi. Proin mollis tortor non elit aliquet convallis. </p>
                                              </div>
                                              <i class="bi bi-facebook"></i> <i class="bi bi-instagram"></i>  <i class="bi bi-twitter"></i>
                                   </div>
                                
                            <div className='col-sm-6 pt-2 '>
                                  <div className='row'>
                                        <div className='col-6 '>
                                              <h6>Home</h6>
                                              <h6>About Us</h6>
                                              <h6>Contact Us</h6>
                                              <h6>Terms & Conditions</h6>
                                              <h6>Privacy Policy</h6>
                                              <h6>Disclaimer</h6>
                                        </div>
                                        <div className='col-6'>
                                              <h6>Blockchain</h6>
                                              <h6>NFTs</h6>
                                              <h6>Opinions</h6>
                                              <h6>Videos</h6>
                                              <h6>Guides</h6>
                                              <h6>Deals</h6>
                                        </div>

                                  </div>
                               
                             </div>
                           
                                <div className='col-sm-3 pt-2'>
                                    <h6 className='Tag'>Tags</h6>
                                    <p>Cryptocurrency Blockchain Bitcoin Business Adoption Ethereum</p>
                                    <p>Crypto News Regulation NFT defi</p>
                                    
                                </div>
                        
                    
                     </div>

            </div>
            <div className='copyright'><p >© Copyright 2021, All Rights Reserved | Powered By NewsPitara |Build by Metavy</p></div>
        </div>
  )
}

export default Footer
