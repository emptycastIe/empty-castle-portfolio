import React from 'react';

import graphic from './img/graphic2.jpg';
import frontend from './img/frontend.jpg';
import backend from './img/backend.jpg';

import './Card.css';

const Card = () => {
  const user = {
    github: "https://github.com/emptycastIe",
  };

  return (
    <div className="card">
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img src={graphic} alt={"logo"} />
              <figcaption>Graphic Design</figcaption>
            </figure>

            <ul className="card-lists">
              <li className="card-list">2D</li>
              <li className="card-list">3D</li>
              <li className="card-list">Illustration</li>
              <li className="card-list">UX/UI</li>
            </ul>
          </div>

          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img src={graphic} alt={"logo"} />
            </figure>

            <a
              href={user.github}
              className="card-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More
            </a>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-card-container">
        <div className="flip-card">
          <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img src={frontend} alt={"logo"} />
              <figcaption>Front End</figcaption>
            </figure>

            <ul className="card-lists">
              <li className="card-list">HTML</li>
              <li className="card-list">CSS</li>
              <li className="card-list">JavaScript</li>
              <li className="card-list">React</li>
            </ul>
          </div>

          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img src={frontend} alt={"logo"} />
            </figure>

            <a
              href={user.github}
              className="card-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More
            </a>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-card-container">
        <div className="flip-card">
          <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <img src={backend} alt={"logo"} />
              <figcaption>Back End</figcaption>
            </figure>

            <ul className="card-lists">
              <li className="card-list">Express</li>
              <li className="card-list">MongoDB</li>
              <li className="card-list">TypeScript</li>
            </ul>
          </div>

          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img src={backend} alt={"logo"} />
            </figure>

            <a
              href={user.github}
              className="card-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More
            </a>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;