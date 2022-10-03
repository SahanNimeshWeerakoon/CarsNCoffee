import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import { projectFirestore } from "../Firebase/Firebase";
import AOS from "aos";
import ImageGallery from 'react-image-gallery';
import "aos/dist/aos.css";
import 'react-image-gallery/styles/css/image-gallery.css';

function Gallery() {

  const [data, setData] = useState([]);
  const ref = projectFirestore.collection("gallery");

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  function getEventData() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        let image = doc.data();
        items.push({ original: image.image, thumbnail: image.image });
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
        <ImageGallery items={data} />
      </div>
    </div>
  )
}

export default Gallery