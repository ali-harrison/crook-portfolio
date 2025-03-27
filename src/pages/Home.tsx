import React from 'react';
import yourPhoto from '../assets/c r o o k web.jpg'; // Update the path as necessary

const Home: React.FC = () => {
  return (
    <section id="home" className="HomeSection">
      <div className="HomeContent">
        <img src={yourPhoto} alt="Ali Werahiko Te Wairama Harrison" className="HomeImage" />
        <h1 className="HomeTitle">Ali Werahiko Te Wairama Harrison</h1>
      </div>
    </section>
  );
}

export default Home;