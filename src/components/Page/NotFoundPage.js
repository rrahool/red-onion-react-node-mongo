import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFoundPage = () => {
  return (
    <div className="container page-content">
      <div className="row ">
        <div className="col main-content">
          <h1>Error 404</h1>
          <br/>
          <h2>Page Not Found</h2>
          <br/>
          <Link to="/"><button>Go to Home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;