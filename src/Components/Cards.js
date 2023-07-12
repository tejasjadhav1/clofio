import React from 'react';
import './Cards.css';

const Card = ({ title, description, color }) => (
  <div className={`card ${color}`}>
    <h2 className="card-title">{title}</h2>
    <p className="card-description">{description}</p>
  </div>
);

const Cards = () => (
  <div className="card-row">
    <Card
      title="$ 400,000"
      description="Total budget you own"
    />
    <Card
      title="$ 299, 762"
      description="Spent month-to-date"
      color="green"
    />
    <Card
      title="$ 2,874,582"
      description="Forecasted bill month end"
      color="blue"
    />
  </div>
);

export default Cards;
