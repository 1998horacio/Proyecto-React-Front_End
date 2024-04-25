import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import './ImageViewer.css';

const ImageViewer = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/imagenes.json');
        setImages(response.data.map(image => ({
          original: image.url,
          thumbnail: image.url,
        })));
      } catch (error) {
        console.error('Error al cargar imágenes:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ImageGallery
        items={images}
        maxScale={2} 
        minScale={0.8} 
      />
    </div>
  );
};


export default ImageViewer;
