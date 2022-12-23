import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "./firebaseConfig";
import DeleteArticle from "./DeleteArticle";
import { useAuthState } from "react-firebase-hooks/auth";
import LikeArticle from "./LikeArticle";
import { Link } from "react-router-dom";
import './Articles.css'

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);
  return (
    <div>
      {articles.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        articles.map(
          ({
            id,
            title,
            description,
            imageUrl,
            createdAt,
            createdBy,
            userId,
            likes,
            comments,
          }) => (
            <div className="border mt-3 p-3 bg-light" key={id}>
              <div className="row justify-content-evenly">
                <div className="col-md-8">
                <div className="row">
                    <div className="col-6">
                      {createdBy && (
                        <span className="badge bg-primary">{createdBy}</span>
                      )}
                    </div>
                    <div className="col-6 d-flex flex-row-reverse">
                      {user && user.uid === userId && (
                        <DeleteArticle id={id} imageUrl={imageUrl} />
                      )}
                    </div>
                  </div>
                <div className="row">
                  
                  <Link to={`/article/${id}`}>
                    <img className="post_img" src={imageUrl} alt="title"/>
                  </Link>
                </div>

                <div className="col-9 ps-3">
                  {/* <div className="row">
                    <div className="col-6">
                      {createdBy && (
                        <span className="badge bg-primary">{createdBy}</span>
                      )}
                    </div>
                    <div className="col-6 d-flex flex-row-reverse">
                      {user && user.uid === userId && (
                        <DeleteArticle id={id} imageUrl={imageUrl} />
                      )}
                    </div>
                  </div> */}
                  <h5>{title}</h5>
                  
                  <p>{description}</p>
                  <p className="post_dt">{createdAt.toDate().toDateString()}</p>

                  <div className="d-flex flex-row-reverse">
                    {user && <LikeArticle id={id} likes={likes} />}
                    <div className="pe-2">
                      <p>{likes?.length} likes</p>
                    </div>
          
                    {comments && comments.length > 0 && (
                      <div className="pe-2">
                        <p>{comments?.length} comments</p>
                        
                      </div>
                    )}
                  </div>
                </div>

                </div>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}
