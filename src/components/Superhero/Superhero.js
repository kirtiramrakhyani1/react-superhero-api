import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Superhero = () => {
  const [superhero, setSuperHero] = useState({
    name: "",
    powerstats: null,
    biography: null,
    appearance: null,
    work: null,
    connections: null,
    images: null
  });
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    loadSuperHero();
  }, []);

  const loadSuperHero = async () => {
    const res = await axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
    setSuperHero(res.data);
    setIsLoading(false);
  };

  const superHeroAppearance = (superhero) => {
    const appearance = Object.keys(superhero?.appearance).map(key =>
      <p>{key}: {superhero.appearance[key]}</p>
    )
    return appearance;
  }

  const superHeroPowerStats = (superhero) => {
    const powerStats = Object.keys(superhero?.powerstats).map(key =>
      <p>{key}: {superhero.powerstats[key]}</p>
    )
    return powerStats;
  }

  return (

    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      {isLoading ? "loading .. " : (
        <>
          <h3 className="text-center home-heading py-4">Profile of : {(superhero?.name) ? superhero.name : "N/A"}</h3>
          <div className="row">
            <div className="col-md-6">
              <img className="thumbnail" src={superhero.images.md} alt="Card image" style={{ width: "200px" }} />
            </div>
            <div className="col-md-6">
              <div>
                <h6>Power Stats</h6>
                {superHeroPowerStats(superhero)}
                <h6>Appearance</h6>
                {superHeroAppearance(superhero)}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Superhero;
