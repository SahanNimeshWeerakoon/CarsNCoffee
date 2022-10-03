import React, { useEffect, useState } from "react";
import NavigationBar from './NavigationBar'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { projectFirestore } from "../Firebase/Firebase";
import { Col, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function Shop() {


  const [data, setData] = useState([]);
  const ref = projectFirestore.collection("shop");

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

console.log(data)
  return (
    <div>
      <NavigationBar/>
      <div className=" mt-5">
      <div class="container">
    <div class="row pt-5">
      
    </div>
    <div class="row">
     
      {data && data.map((data) => (
        <div class="col-lg-4 mb-3 d-flex align-items-stretch">
        <div  data-aos="fade-up" class="card">
          <img src={data.image} class="card-img-top" alt="Card Image"/>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{data.title}</h5>
            <p class="card-text mb-4">LKR {data.price}</p>

          </div>
        </div>
      </div>
      ))}
     
     
      
     
    </div>
  </div>
      </div>
    </div>
       
  )
}

export default Shop