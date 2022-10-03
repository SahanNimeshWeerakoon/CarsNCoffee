import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { projectFirestore } from "../Firebase/Firebase";
import { Col, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

 
function Events() {
  const [data, setData] = useState([]);
  const ref = projectFirestore.collection("event");

  function getEventData() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });

      setData(items);
    });
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect( () => {getEventData()}, []);

  
  return (
    <div>
      <NavigationBar />

      <h1 className="text-center mt-5">Welcome To Events</h1>

      <div className=" mt-5">
      <div class="container">
    <div class="row pt-5">
      <div class="col-12">
        
      </div>
    </div>
    <div class="row">
     
      {data && data.map((data) => (
        <div class="col-lg-4 mb-3 d-flex align-items-stretch">
        <div class="card">
          <img src={data.image} class="card-img-top" alt="Card Image"/>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{data.name}</h5>
            <p class="card-text mb-4"> {data.short_description}</p>
          <Link to={`/events/${data.id}`}>
          <button   class="btn btn-dark mt-auto align-self-start">Read More</button>
          </Link>
          </div>
        </div>
      </div>
      ))}
     
     
      
     
    </div>
  </div>
      </div>
    </div>
  );
}

export default Events;
