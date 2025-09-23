import React, { useState } from 'react';
import './AuctionCard.css';

const products = [
  {
    id: 1,
    title: 'The Kiss',
    image: '/kiss.jpg',
    price: 200,
    currentBid: 290.01,
    bids: 3,
    minQty: 10,
    maxQty: 100,
    openBid: 200,
    nextMinBid: 300,
    endsIn: '2 days',
  },
  {
    id: 2,
    title: 'The Last Supper',
    image: '/ls.jpeg',
    price: 180,
    currentBid: 240.5,
    bids: 5,
    minQty: 5,
    maxQty: 80,
    openBid: 180,
    nextMinBid: 250,
    endsIn: '10 days',
  },
  {
    id: 3,
    title: 'Starry Night',
    image: '/sn.jpeg',
    price: 210,
    currentBid: 265.75,
    bids: 4,
    minQty: 8,
    maxQty: 90,
    openBid: 210,
    nextMinBid: 275,
    endsIn: '10 hours',
  },
  {
    id: 4,
    title: 'Water Lilies',
    image: '/wl.jpeg',
    price: 230,
    currentBid: 310.2,
    bids: 6,
    minQty: 12,
    maxQty: 110,
    openBid: 230,
    nextMinBid: 320,
    endsIn: '2 days',
  },
];

export default function AuctionCard() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="auction-page">
      <div className="auction-row">
        {products.map((product) => (
          <div className="auction-card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              onClick={() => setSelectedImage(product.image)}
            />
            <h5>{product.title}</h5>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Ends In:</strong> {product.endsIn}</p>
            <p><strong>Current Bid:</strong> ${product.currentBid} ({product.bids} Bids)</p>
            <p><strong>Qty:</strong> Min {product.minQty} / Max {product.maxQty}</p>
            <p><strong>Open Bid:</strong> ${product.openBid}</p>
            <p><strong>Next Min Bid:</strong> ${product.nextMinBid}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Zoomed" />
        </div>
      )}
    </div>
  );
}