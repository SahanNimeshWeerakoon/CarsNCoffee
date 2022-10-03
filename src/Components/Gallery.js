import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import { projectFirestore } from "../Firebase/Firebase";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Gallery() {

  const [data, setData] = useState([]);
  const ref = projectFirestore.collection("gallery");

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

  <NavigationBar/>
  <div className='container mt-5'>
    <div className='row'>
      {data && data.map((data) => (
        <div style ={{border: "none"}}  data-aos="fade-up" class="card">
          <img src={data.image} class="card-img-top" alt="Card Image"/>

        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default Gallery