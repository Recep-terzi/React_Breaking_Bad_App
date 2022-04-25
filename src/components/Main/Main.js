import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const url = "https://breakingbadapi.com/api/characters";

const Main = () => {
  const [char, setChar] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setChar(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <div className="container">
        
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {char.map((datas) => (
            <div className="col" key={datas.char_id}>
              <div className="card h-100">
                <img
                  src={datas.img}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "500px" }}
                />
                <div className="card-body">
                  <h2 className="card-title">{datas.name}</h2>
                  <h4>
                    Occupation :{" "}
                    <ul>
                      <li>{datas.occupation[0]}</li>
                    </ul>
                  </h4>
                </div>
                <div className="card-footer">
                  <small
                    className="text-muted d-flex justify-content-between"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    {datas.nickname}
                    
                    <Link to={`/character/${datas.char_id}`}type="button" class="btn btn-secondary">Detail </Link>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
