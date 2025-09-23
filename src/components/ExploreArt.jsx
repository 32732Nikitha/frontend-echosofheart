import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ExploreArt.css";

const artworks = [
  {
    id: 1,
    title: "Starry Night",
    price: 100000000,
    artist: "Vincent van Gogh",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/640px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  },
  {
    id: 2,
    title: "The Persistence of Memory",
    price: 150000000,
    artist: "Salvador Dalí",
    image:
      "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg",
  },
  {
    id: 3,
    title: "The Mona Lisa",
    price: "Priceless",
    artist: "Leonardo da Vinci",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/270px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
  },
  {
    id: 4,
    title: "The Scream",
    price: 119900000,
    artist: "Edvard Munch",
    image:
      "https://cdn.britannica.com/32/2832-050-9DD1D041/The-Scream-casein-cardboard-Edvard-Munch-National-1893.jpg",
  },
  {
    id: 5,
    title: "Girl with a Pearl Earring",
    price: 100000000,
    artist: "Johannes Vermeer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/1200px-1665_Girl_with_a_Pearl_Earring.jpg",
  },
  {
    id: 6,
    title: "Impression, Sunrise",
    price: "Priceless",
    artist: "Claude Monet",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPU7P2k5XAGVwuvtLowiKbyKO2FjH1K_fPA&s",
  },
  {
    id: 7,
    title: "The Kiss",
    price: 135000000,
    artist: "Gustav Klimt",
    image:
      "https://www.restinpieces.co.uk/cdn/shop/products/1000-piece-Gustav-Klimt-The-Kiss-Jigsaw-Puzzle_1200x1200.jpg?v=1675206222",
  },
  {
    id: 8,
    title: "Café Terrace at Night",
    price: 90000000,
    artist: "Vincent van Gogh",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg/640px-Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg",
  },
  {
    id: 9,
    title: "Water Lilies",
    price: 54000000,
    artist: "Claude Monet",
    image:
      "https://m.media-amazon.com/images/I/71KhW7VgXNL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 10,
    title: "Whistler's Mother",
    price: 40000000,
    artist: "James McNeill Whistler",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Whistlers_Mother_high_res.jpg/1200px-Whistlers_Mother_high_res.jpg",
  },
  {
    id: 11,
    title: "Las Meninas",
    price: "Priceless",
    artist: "Diego Velázquez",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/640px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
  },
  {
    id: 12,
    title: "Guernica",
    price: "Priceless",
    artist: "Pablo Picasso",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0b73c868681015.5b655abc1fb34.jpg",
  },
  {
    id: 13,
    title: "The Night Watch",
    price: "Priceless",
    artist: "Rembrandt van Rijn",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1200px-The_Night_Watch_-_HD.jpg",
  },
  {
    id: 14,
    title: "Napoleon Crossing the Alps",
    price: "Priceless",
    artist: "Jacques-Louis David",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg/1200px-David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg",
  },
  {
    id: 15,
    title: "A Sunday Afternoon on the Island of La Grande Jatte",
    price: 100000000,
    artist: "Georges Seurat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/400px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
  },
  {
    id: 16,
    title: "The Arnolfini Portrait",
    price: 92000000,
    artist: "Jan van Eyck",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The_Arnolfini_portrait_%281434%29.jpg/1200px-The_Arnolfini_portrait_%281434%29.jpg",
  },
  {
    id: 17,
    title: "Christina's World",
    price: 5000000,
    artist: "Andrew Wyeth",
    image:
      "https://www.tallengestore.com/cdn/shop/products/andrew_wyeth_-christinas_world_32c9c3e2-d358-40b0-b715-76f8e0996fbc.jpg?v=1495272827",
  },
  {
    id: 18,
    title: "The Sleeping Gypsy",
    price: 8000000,
    artist: "Henri Rousseau",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/La_Boh%C3%A9mienne_endormie.jpg/1200px-La_Boh%C3%A9mienne_endormie.jpg",
  },
  {
    id: 19,
    title: "The Great Wave Of Kanagawa",
    price: 2800000,
    artist: "Hokusai",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tsunami_by_hokusai_19th_century.jpg",
  },
  {
    id: 20,
    title: "The Card Players",
    price: 250000000,
    artist: "Paul Cézanne",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_EcgOQqicKo0GKp51dnn7RJJMktrKFG3kbA&s",
  },
  {
    id: 21,
    title: "The Hay Wain",
    price: 13000000,
    artist: "John Constable",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTfPdPPXpBH1wKUyIOUwzG2SkeY-PQBwr9w&s",
  },
  {
    id: 22,
    title: "The Dance",
    price: 78000000,
    artist: "Pierre-Auguste Renoir",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcY2yofMRTvnDuKZwr-AWckJzASe0o70xNDw&s",
  },
  {
    id: 23,
    title: "The Swing",
    price: 100000000,
    artist: "Eugène Delacroix",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWugiNO93OnYKP3nX5Z4Dq33Yvn-_s2fgR_w&s",
  },
  {
    id: 24,
    title: "The Last Supper",
    price: "Priceless",
    artist: "Leonardo da Vinci",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-Leonardo_Da_Vinci-High_Resolution_32x16.jpg/960px-The_Last_Supper-Leonardo_Da_Vinci-_High_Resolution_32x16.jpg",
  },
];

// helper: convert price to number
const getNumericPrice = (price) => {
  if (typeof price === "number") return price;
  return Number.MAX_SAFE_INTEGER; // keep "Priceless" at the end
};

const ExploreArt = () => {
  const [sortOption, setSortOption] = useState("");

  const sortedArtworks = [...artworks].sort((a, b) => {
    if (sortOption === "Price: Low to High")
      return getNumericPrice(a.price) - getNumericPrice(b.price);
    if (sortOption === "Price: High to Low")
      return getNumericPrice(b.price) - getNumericPrice(a.price);
    return 0;
  });

  const handleAddToCart = (art) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = currentCart.some((item) => item.id === art.id);

    if (!isAlreadyInCart) {
      const updatedCart = [...currentCart, art];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert(`Added ${art.title} to your cart!`);
    } else {
      alert(`${art.title} is already in your cart!`);
    }
  };

  return (
    <div>
      <header
        className="header"
        style={{ background: "lightblue", color: "black", zIndex: 1000 }}
      >
        <h1 className="header-title">Explore Art</h1>
        <p className="header-subtitle">
          Browse amazing artworks from various artists around the world.
        </p>
      </header>

      <div className="explore-art">
        <div className="filters">
          <select onChange={(e) => setSortOption(e.target.value)}>
            <option value="">Sort By</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
          </select>
        </div>

        <Link to="/VirtualSpace">
          <button className="virtual-space-btn">Virtual Space</button>
        </Link>

        <div className="art-grid">
          {sortedArtworks.map((art) => (
            <div className="art-item" key={art.id}>
              <img src={art.image} alt={art.title} className="art-image" />
              <h3>{art.title}</h3>
              <p>
                Price:{" "}
                {typeof art.price === "number"
                  ? `$${art.price.toLocaleString()}`
                  : art.price}
              </p>
              <p>Artist: {art.artist}</p>
              <button onClick={() => handleAddToCart(art)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreArt;
