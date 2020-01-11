import React from 'react';
//import logo from './logo.svg';
import Card from "./Card";
import './App.css';

function App() {
  let cards = [
      {
          imgSrc : 'car1.png',
          alt    : 'image',
          header : 'Заголовок карточки',
          body   : 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
          btnSrc : '/card1'
      },
      {
          imgSrc : '',
          alt    : '',
          header : 'Заголовок карточки 2',
          body   : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
          btnSrc : '/card2'
      }
  ];

  let cardsComp = cards.map((item) => {
    if (item.imgSrc === '') {
      return <Card item={item}/>;
    } else {
      return (
          <Card item={item}>
              <img src={item.imgSrc} className="card-img-top" alt={item.alt}/>
          </Card>
      );
    }
  });

  return (
    <div className="container">
        {cardsComp}
    </div>
  );
}

export default App;
