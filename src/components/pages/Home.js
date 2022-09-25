import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [superheros, setSuperHeros] = useState([]);

  useEffect(() => {
    loadSuperheros();
  }, []);

  const loadSuperheros = async () => {
    const result = await axios.get("https://akabab.github.io/superhero-api/api/all.json");
    setSuperHeros(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h3 className="text-center home-heading py-4">Hall of Fame</h3>

        <div className="row">
          {superheros.map((superhero) => {
            return (
              <div className="col-md-3" key={superhero.id}>
                <div className="card" style={{ width: "250px" }}>
                  <img className="card-img-top" src={superhero.images.md} alt="Card image" style={{ width: "100%" }} />
                  <div className="card-body">
                    <h6 className="card-title">{superhero.name}</h6>
                    <p className="card-text sub-title">{(superhero.biography.fullName) ? superhero.biography.fullName : "N/A"}</p>

                    <div>
                      <div className="spinner-border text-secondary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-border text-secondary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-border text-secondary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>

                    <Link className="" to={`/superhero/${superhero.id}`}>
                      See Profile
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
