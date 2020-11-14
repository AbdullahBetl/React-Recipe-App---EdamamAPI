import React from "react";
import { Container, Row } from "react-bootstrap";

const Banner = () => {
  var d = new Date();
  var n = d.getHours();

  const greeting = n < 12 ? "Morning" : n < 16 ? "Afternoon" : "Evening";
  const meal =
    n < 12 ? "Breakfast" : n < 16 ? "Lunch" : n < 20 ? "Snack" : "Dinner";

  return (
    <Container className="banner position-relative">
      <img
        alt="banner image"
        src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />
      <Container className="greeting pt-3 pb-3">
        <h3>Good {greeting}</h3>
        <h4>Something smells delicious. Time for a yummy {meal}!</h4>
      </Container>
    </Container>
  );
};

export default Banner;
