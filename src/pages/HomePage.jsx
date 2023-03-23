import React from 'react';
import ShopPage from './ShopPage';

export default function HomePage() {
  return (
    <div class="containerhome">
      <div class="titlearea">
        <h2>Bring your home to life.</h2>
      </div>
      <div class="paragrapharea">
        <p>Elevate your living space with a touch of nature.<br/> We offer a range of easy-care houseplants.</p>
      </div>
      <div class="buttonarea">
        <a href="/shop" class="myButton">
          Browse Plants
        </a>
      </div>
      <div class="imgarea">
        <img
          src="https://user-images.githubusercontent.com/118732445/203775030-f6d39588-6b73-42eb-a396-d50098078501.jpg"
          alt="Various potted houseplants"
          width="400px"
        />
      </div>
    </div>
  );
}
