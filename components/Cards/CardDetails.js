import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CardDetails = () => {
  let [fetcheddata, updateFetchData] = useState([]);
  let { name, image, location, origin, gender, species, status, type } =
    fetcheddata;
    console.log(fetcheddata);
  let { id } = useParams();
  let api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-3">
      <div className="d-flex flex-column gap-3">
        <h1 className="mb-2 text-center">{name}</h1>
        <img src={image} alt="" className="img-fluid" />
        {(() => {
          if (status == "Alive") {
            return <span className="badge text-bg-primary fs-5">{status}</span>;
          } else if (status == "Dead") {
            return <span className="badge text-bg-danger fs-5">{status}</span>;
          } else {
            return (
              <span className="badge text-bg-secondary fs-5">{status}</span>
            );
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender :</span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Species :</span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold">Type :</span>
            {type==""?"unknown":type}
          </div>
          <div className="">
            <span className="fw-bold">Location :</span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Orgin :</span>
            {origin?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
