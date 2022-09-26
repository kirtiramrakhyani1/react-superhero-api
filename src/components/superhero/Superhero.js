import React, { useState, useEffect } from "react";
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link, useParams } from "react-router-dom";
import SuperheroService from "../../services/superhero.service";
import Spinner from "../common/Spinner";

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
    const res = await SuperheroService.get(id);
    setSuperHero(res.data);
    setIsLoading(false);
  };

  const superHeroFeature = (feature) => {
    const featuresList = Object.keys(feature).map(key =>
      <span className="home-heading">{capitalizeFirstLetter(key)}: {feature[key]} | </span>
    )
    return featuresList;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (

    <div className="container py-4">
      {isLoading ? (<Spinner />) : (
        <>
          <h3 className="text-center home-heading py-4">
            <Link className="btn btn-primary float-left" to="/">
              <ArrowLeft /> Back
            </Link>
            Profile of {(superhero?.name) ? superhero.name : "N/A"}</h3>
          <div className="row">
            <div className="col-md-6 text-center" style={{ margin: "auto" }}>
              <img className="thumbnail" src={superhero.images.md} alt="SuperHero" style={{ width: "260px" }} />
            </div>
            <div className="col-md-6">
              <div>
                <div><h6>Power Stats</h6>
                  <p className="mx-4">{superHeroFeature(superhero.powerstats)}</p></div>
                <div className="my-2">
                  <h6>Biography</h6>
                  <p className="mx-4">{superHeroFeature(superhero.biography)}</p>
                </div>
                <div className="my-2">
                  <h6>Appearance</h6>
                  <p className="mx-4">{superHeroFeature(superhero.appearance)}</p>
                </div>
                <div className="my-2"><h6>Work</h6>
                  <p className="mx-4">{superHeroFeature(superhero.work)}</p></div>
                <div className="my-2"><h6>Connections</h6>
                  <p className="mx-4">{superHeroFeature(superhero.connections)}</p></div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Superhero;
