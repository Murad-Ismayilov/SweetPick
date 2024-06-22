import React from 'react';
import './Ourskills.css';

const Ourskills = () => {
  return (
    <div className="introduction">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>introduction</h1>
            <div className="intro-content">
              <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717924738/intro_gzvw35.webp" alt=""/>
              <h4>10 years on the global market. We work since 1999.</h4>
              <p>We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.</p>
            </div>
          </div>
          <div className="col-md-6">
            <h1>our skills</h1>
            <div className="skills-progress">
              <div className="progress-item">
                <p>Creativeness <span>85%</span></p>
                <div className="meter nostrips">
                  <span style={{ width: '85%' }}></span>
                </div>
              </div>
              <div className="progress-item">
                <p>Wordpress <span>65%</span></p>
                <div className="meter nostrips">
                  <span style={{ width: '65%' }}></span>
                </div>
              </div>
              <div className="progress-item">
                <p>Web Design <span>93%</span></p>
                <div className="meter nostrips">
                  <span style={{ width: '93%' }}></span>
                </div>
              </div>
              <div className="progress-item">
                <p>Awesomeness <span>90%</span></p>
                <div className="meter nostrips">
                  <span style={{ width: '90%' }}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourskills;
