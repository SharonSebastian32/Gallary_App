import "./Gallery.css";
import React, { useEffect, useState } from "react";
const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = () => {
      const data = [
        {
          id: 1,
          url: "https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Kawaii",
          theme: "#ffd4ca",
          textColor: "#9c1515",
        },
        {
          id: 2,
          url: "https://plus.unsplash.com/premium_photo-1664267832256-176e55ccafd0?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Heira",
          theme: "#ecffca",
          textColor: "#2a8c6c",
        },
        {
          id: 3,
          url: "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Alan",
          theme: "#d3b9b9",
          textColor: "#aa4b3a",
        },

        {
          id: 4,
          url: "https://images.unsplash.com/photo-1645231886878-06478c04f9fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Nisha",
          theme: "#f7fbd7",
          textColor: "#93935a",
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1645143411766-8cf563740dd7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Zhoii",
          theme: "#edd7fe",
          textColor: "#885e86",
        },
        {
          id: 6,
          url: "https://plus.unsplash.com/premium_photo-1666789257633-900f9dfc227d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Harieth Paul",
          theme: "#b9ecc7",
          textColor: "#436d4f",
        },
        {
          id: 7,
          url: "https://images.unsplash.com/photo-1569210538317-4d53f92a0e21?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Hevin",
          theme: "#e1e2e1",
        },
        {
          id: 8,
          url: "https://plus.unsplash.com/premium_photo-1668638806052-4544af05f648?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Kate",
          theme: "#ffffab",
          textColor: "#9d9d4d",
        },
        {
          id: 9,
          url: "https://plus.unsplash.com/premium_photo-1708276238262-d7a41a3b10ac?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Liyang Loo",
          theme: "#c5c5c4",
          textColor: "#725517",
        },
        {
          id: 10,
          url: "https://plus.unsplash.com/premium_photo-1673758910840-468f5e112cf7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Yvetzz & Lisa",
          theme: "#e7d5b6",
          textColor: "#8d5b2b",
        },
        {
          id: 11,
          url: "https://images.unsplash.com/photo-1628309143009-bf7f9eaaccc2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "David",
          theme: "#747474",
          textColor: "#a71522",
        },
        {
          id: 12,
          url: "https://plus.unsplash.com/premium_photo-1682965697786-52bc2e616845?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Sofia",
          theme: "#ebebeb",
          textColor: "#7e786c",
        },
      ];
      setImages(data);
    };
    fetchImages();
  }, []);

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <h1 className="title">Image Gallery App</h1>
      {
        images.length > 0 ? (
            <div className="image-grid">
        {images.map((image) => (
          <div
            className="image-cards"
            key={image.id}
            style={{ backgroundColor: ` ${image.theme}` }}
          >
            <img src={image.url} alt="" />
            <div className="image-details">
              <h3 style={{ color: `${image.textColor}` }}>{image.title}</h3>
              <button
                className="delete-btn"
                onClick={() => handleDeleteImage(image.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
          
        ): <h4>No Images Found</h4>
}


     
    </div>
  );
};

export default Gallery;
