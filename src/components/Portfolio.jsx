import React from "react";
import "../css/Portfolio.css";
const Portfolio = () => {
  return (
    <div className="text-wrapper Portfolio">
      <div className="container">
        <div className="row">
          <div className="col">
            <iframe frameborder="0" src="Pro1.html" />
            {/* <button className="btn" onClick={this.Refresh}>
              Refresh
            </button> */}
          </div>
          <div className="col">
            <iframe frameborder="0" src="Pro2.html" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
