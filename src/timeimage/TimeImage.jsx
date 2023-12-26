import React from 'react';

const TimeImage = () => {
  const morningImage = 'https://awbi.org/wp-content/uploads/2023/06/image-5-1024x1024.png'; 
  const dayImage = 'https://www.goodafternoonimages.com/images/quotes/english/general/good-afternoon-feeling-52650-50066.jpg'; 
  const nightImage = 'https://goodeveningimage.com/wp-content/uploads/2023/08/good-evening-images-1-1024x1024.jpg'; 

  const getCurrentTime = () => {
    const currentHour = new Date().getHours();
    return currentHour;
  };

  const getGreeting = () => {
    const currentHour = getCurrentTime();
    if (currentHour >= 6 && currentHour < 12) {
      return 'Good Morning!';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good Afternoon!';
    } else {
      return 'Good Evening!';
    }
  };

  const getImageSource = () => {
    const currentHour = getCurrentTime();
    if (currentHour >= 6 && currentHour < 12) {
      return morningImage;
    } else if (currentHour >= 12 && currentHour < 18) {
      return dayImage;
    } else {
      return nightImage;
    }
  };

  return (
    <div>
      <h1>{getGreeting()}</h1>
      <img style={{ width: "100%", height: "100%"}} src={getImageSource()} alt={`Time of the day: ${getGreeting()}`} /> </div>
  );
};

export default TimeImage;