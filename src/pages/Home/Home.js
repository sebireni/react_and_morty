import React from 'react';
import './Home.css';
import Logo from '../../../src/assets/images/logo.png';
import NavButton from '../../components/Button/NavButton';

const Home = () => {
  return (
    <div className='home'>
      <img className='logo' alt='Rick and Morty logo' src={Logo} />
      <div className='content'>
        <NavButton route='/allCharacters' buttonText={'Characters'} />
        <NavButton route='/allLocations' buttonText={'Locations'} />
        <h2>Description</h2>
        <p>
          This characteropedia is based on the television show Rick and Morty.
          You will have access to hundreds of characters, images and locations.
          This characteropedia is filled with canonical information as seen in
          the TV show. Rick and Morty is created by Justin Roiland and Dan
          Harmon for Adult Swim. The data and images are used without claim of
          ownership and belong to their respective owners.
          <br />
          <br />
          This API we used is open source and uses a BSD license.
        </p>
      </div>
    </div>
  );
};

export default Home;
