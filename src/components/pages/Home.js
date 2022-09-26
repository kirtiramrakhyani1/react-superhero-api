import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SuperheroService from "../../services/superhero.service";
import Spinner from "../common/Spinner";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Home = () => {
  const [superheros, setSuperHeros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSuperheros();
  }, []);

  const loadSuperheros = async () => {
    const result = await SuperheroService.getAll();
    console.log("result  => ", result.data);
    setSuperHeros(result.data);
    setIsLoading(false);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h3 className="text-center home-heading py-4">Hall of Fame</h3>
        {isLoading ? (<Spinner />) : (
          <div className="row">
            {superheros.map((superhero) => {
              return (
                <div className="col-sm-1 col-md-3 col-lg-3 my-4" key={superhero.id}>
                  <div className="card" style={{ width: "240px" }}>
                    <img className="card-img-top" src={superhero.images.md} alt="Superhero" style={{ width: "100%", height: "260px" }} />
                    <div className="card-body">
                      <h6 className="card-title">{superhero.name}</h6>
                      <p className="card-text sub-title">{(superhero.biography.fullName) ? superhero.biography.fullName : "N/A"}</p>

                      <div className="d-flex my-3"  data-toggle="tooltip" data-placement="top" title="Strength">
                        <div style={{ width: "20%", marginRight: "4px" }}>
                          <CircularProgressbar value={superhero.powerstats.strength} text={`${superhero.powerstats.strength}%`} styles={buildStyles({
                            pathColor: "#62706f",
                            textColor: "#62706f",
                          })} />
                        </div>
                        <div style={{ width: "20%", marginRight: "4px" }}  data-toggle="tooltip" data-placement="top" title="Intelligence">
                          <CircularProgressbar value={superhero.powerstats.strength} text={`${superhero.powerstats.intelligence}%`} styles={buildStyles({
                            pathColor: "#62706f",
                            textColor: "#62706f",
                          })}/>
                        </div>
                        <div style={{ width: "20%", marginRight: "4px" }}  data-toggle="tooltip" data-placement="top" title="power" >
                          <CircularProgressbar value={superhero.powerstats.strength} text={`${superhero.powerstats.power}%`} styles={buildStyles({
                            pathColor: "#62706f",
                            textColor: "#62706f",
                          })} />
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
        )}
      </div>
    </div>
  );
};

export default Home;
