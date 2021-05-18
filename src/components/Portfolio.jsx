import React from "react";
import "../css/Portfolio.css";
const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="text-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <iframe frameborder="0" src="Pro1.html" />
              {/* <button className="btn" onClick={this.Refresh}>
              Refresh
            </button> */}
            </div>
            <div className="col-6">
              <iframe frameborder="0" src="Pro2.html" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
