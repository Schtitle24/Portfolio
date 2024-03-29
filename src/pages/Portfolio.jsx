import React, { useState } from 'react';

export default function Portfolio() {
  // State variables to track hover status for each card
  const [hoveredIndex1, setHoveredIndex1] = useState(false);
  const [hoveredIndex2, setHoveredIndex2] = useState(false);
  const [hoveredIndex3, setHoveredIndex3] = useState(false);
  const [hoveredIndex4, setHoveredIndex4] = useState(false);
  const [hoveredIndex5, setHoveredIndex5] = useState(false);
  const [hoveredIndex6, setHoveredIndex6] = useState(false);

  return (
    <div className="row mt-4">
      <div className="col-md-4 mb-4">
        <div
          className="card text-bg-dark"
          onMouseEnter={() => setHoveredIndex1(true)}
          onMouseLeave={() => setHoveredIndex1(false)}
        >
          <img src="src/assets/appa.jpg" className="card-img" alt="Project 1" />
          <div className="card-img-overlay">
            {hoveredIndex1 && (
              <div>
                <h5 className="card-title">Simple Recipe Finder</h5>
                <p className="card-text">This was my first project working with API calls.</p>
                <p className="card-text"><small>Still In Progress</small></p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div
          className="card text-bg-dark"
          onMouseEnter={() => setHoveredIndex2(true)}
          onMouseLeave={() => setHoveredIndex2(false)}
        >
          <img src="src/assets/appa3.jpg" className="card-img" alt="Project 2" />
          <div className="card-img-overlay">
            {hoveredIndex2 && (
              <div>
                <h5 className="card-title">ReadMe Generator</h5>
                <p className="card-text">This application allows you to generate a ReadMe for your projects! </p>
                <p className="card-text"><small>Fully Complete</small></p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div
          className="card text-bg-dark"
          onMouseEnter={() => setHoveredIndex3(true)}
          onMouseLeave={() => setHoveredIndex3(false)}
        >
          <img src="src/assets/appa4.jpg" className="card-img" alt="Project 3" />
          <div className="card-img-overlay">
            {hoveredIndex3 && (
              <div>
                <h5 className="card-title">Wolf Pack Puzzle Portal</h5>
                <p className="card-text">This application is for visitors of the Meow Wolf Grapevine location that wish to hunt down and piece together the hidden storyline.</p>
                <p className="card-text"><small>In Developement: Soft release 03/30/24</small></p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div
          className="card text-bg-dark"
          onMouseEnter={() => setHoveredIndex4(true)}
          onMouseLeave={() => setHoveredIndex4(false)}
        >
          <img src="src/assets/sherlock.jpg" className="card-img" alt="Project 4" />
          <div className="card-img-overlay">
            {hoveredIndex4 && (
              <div>
                <h5 className="card-title">Card title 4</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small>Last updated 3 mins ago</small></p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div
          className="card text-bg-dark"
          onMouseEnter={() => setHoveredIndex5(true)}
          onMouseLeave={() => setHoveredIndex5(false)}
        >
          <img src="src/assets/logo.jpg" className="card-img" alt="Project 5" />
          <div className="card-img-overlay">
            {hoveredIndex5 && (
              <div>
                <h5 className="card-title">Card title 5</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small>Last updated 3 mins ago</small></p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div
          className="card text-bg-dark"
          onMouseEnter={() => setHoveredIndex6(true)}
          onMouseLeave={() => setHoveredIndex6(false)}
        >
          <img src="src/assets/appa.jpg" className="card-img" alt="Project 6" />
          <div className="card-img-overlay">
            {hoveredIndex6 && (
              <div>
                <h5 className="card-title">Card title 6</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small>Last updated 3 mins ago</small></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}