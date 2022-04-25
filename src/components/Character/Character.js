import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const url = "https://breakingbadapi.com/api/characters/";
const Character = () => {
  const { id } = useParams();
  const [ character, setCharacter ] = useState([]);
  useEffect(() => {
    fetch(`${url}${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data[0]);
        console.log(data);
      });
  }, [id]);
  
  
  return <div>
    <div className="container" style={{marginTop:"50px"}}>
      <div className="row">
        <div className="col-6">
          <img src={character.img} alt="" style={{width:"385px",marginBottom:"100px"}} />
        </div>
        <div className="col-6">
          <h3> <p style={{display:"inline-block",color:"red",fontSize:"35px",marginRight:"30px"}}>Name : </p> {character.name}</h3>
          <h3> <p style={{display:"inline-block",color:"red",fontSize:"35px",marginRight:"30px"}}>Birthday : </p>{character.birthday}</h3>
          <h3> <p style={{display:"inline-block",color:"red",fontSize:"35px",marginRight:"30px"}}>Category : </p>{character.category}</h3>
          <h3> <p style={{display:"inline-block",color:"red",fontSize:"35px",marginRight:"30px"}}>Nickname : </p>{character.nickname}</h3>
          <h3> <p style={{display:"inline-block",color:"red",fontSize:"35px",marginRight:"30px"}}>Portrayed : </p>{character.portrayed}</h3>
          <h3> <p style={{display:"inline-block",color:"red",fontSize:"35px",marginRight:"30px"}}>Occupation : </p>{character.occupation}</h3>
          <h3> <p style={{display:"inline-block",color:"red",fontSize:"35px",marginRight:"30px"}}>Status : </p>{character.status}</h3>
          <Link to="/" type="button" class="btn btn-danger w-100 mt-3" style={{backgroundColor:"red"}} > Back To Main </Link>
        </div>
      </div>
    </div>
   
  </div>;
};

export default Character;
