import React, { useState, useEffect, useRef } from "react";
import './BlogDetails.css'
import axios from "axios";
import { useParams } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url'
import client from '../sanityClient'
import chl_img from '../Images/bitcoin.jpg'




const BlogDetails = () => {
    const { title } = useParams()
    const [data, setData] = useState([])
    const [particularData, setParticularData] = useState([]);
    const head = useRef(null)
    useEffect(() => {
        getNews();
    }, []);

    useEffect(() => {
        let result = data.filter(function (data) {
            return data.title == title;

        });
        console.log("arrayReturn", result)
        setParticularData(result)
    }, [data])
    const getNews = () => {
        axios
            .get(
                "https://q9xfz7x1.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20slug%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20body%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20author%20-%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22authorImage%22%3A%20image.asset-%3Eurl%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20mainImage%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20asset%20-%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20_id%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20publishedAt%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20_updatedAt%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22categories%22%3A%20categories%5B%5D-%3Etitle%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D"
            )
            .then((response) => {
                console.log(response.data.result);
                setData(response.data.result);
            });


    };

    const builder = imageUrlBuilder(client)
    function urlFor(source) {
        return builder.image(source)
    }

    return (
        <>
            <div className="mt-5 pt-5" >
                <div className="row justify-content-evenly">
                    <div className="col-md-6 ">

                        {
                            particularData.map((list) => {
                                return <>
                                    <h1 className="news_b_title">{list.title}</h1>
                                    <img src={list.mainImage.asset.url} className=" img-fluid img_news" alt="..." />
                                    <p className="news-date">{list._createdAt}</p>
                                    <p className="news_para">{list.body[0].children[0].text}</p>
                                    {/* ------------------------------------------------------------
                                    share_icon */}

                                    <div className="row justify-content-evenly">
                                        <div className="col-md-6 socal_line">
                                            <ul className="shr_ul">
                                                {/* <i class="bi bi-share"></i> */}
                                                <li>
                                                    <a href="https://www.facebook.com/">
                                                        <i className="bi bi-facebook" aria-hidden="true" />
                                                        {/* <i class="bi bi-facebook"></i> */}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/i/flow/login">
                                                        <i className="bi bi-twitter" aria-hidden="true" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://in.pinterest.com/login/">
                                                        <i className="bi bi-pinterest" aria-hidden="true" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://in.linkedin.com/">
                                                        <i className="bi bi-linkedin" aria-hidden="true" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/accounts/login/">
                                                        <i className="bi bi-instagram" aria-hidden="true" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">

                                        </div>

                                    </div>
                                </>

                            })
                        }
                    </div>



                    {/* ---------------------------------------------------------------- */}
                    <form>
                        <div className="col-md-4">
                            <div className="row chl_news">
                                <div className="col-md-3">
                                    <img className="img-fluid" src={chl_img} alt="" />
                                </div>
                                <div className="col-md-6 chl_hed">

                                    <h5>DEAL</h5>
                                    <h4>Title</h4>
                                    <p>new news</p>
                                </div>

                            </div>

                        </div>
                    </form>




                </div>

            </div>


        </>
    );
};

export default BlogDetails;
