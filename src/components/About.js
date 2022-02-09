import { useState, useEffect } from "react";
//import axios from 'axios'

const About = () => {
  const [tours, setTours] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const fetchTours = async () => {
    const response = await fetch("http://localhost:8080/api/tours");
    const tours = await response.json();
    console.log(tours);
    setTours(tours);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <div className="container">
      <p className="lead">We are here for you</p>

      <h4>Our Tours</h4>

      {tours.map((tour) => {
        const { image, id, info, price, name } = tour;
        return (
          <div className="container" key={id}>
            <div>{image}</div>
            <h5>{name}</h5>
            <p className="btn text-primary">Price: $ {price}</p>
            <p className="lead">
              {readMore ? info : info.substring(0, 200) + ".....   "}
              <button
                className="btn text-primary ml-3"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "read less" : "read more"}
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default About;
