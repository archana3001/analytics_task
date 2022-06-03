import React from 'react';
import './App.css';
import Bar from './Bar';
import Scatter from './Scatter';

function App() {

  return (
    // JSX code
    // App component
    <div className="App">
      
      {/* Navbar section */}
      <div className='nav' >
           Manufac Task
      </div>

      {/* First Section containing Scatter Plot and Description */}
      <div  className='scattercont'>

        {/* This element contains Scatter plot component */}
        {/* The component is enclosed in this element to apply styling to make it responsive */}
        <div className='scatter cont'>

        {/* Scatter plot component */}
            <Scatter />
        </div>

        {/* Element with description */}
        <div className='scattertext'>
              This is the Scatter Plot between “Color Intensity” on horizontal axis and “Hue” on vertical axis.
        </div>
      </div>

      {/* Second section containing Bar Plot component and description*/}
      <div className='barcont'>

        {/* Element containing Bar Plot component */}
        <div className='bar cont'>
            <Bar />
        </div>

        {/* Description element */}
        <div className='bartext'>
            This is the Bar chart to be drawn showing the “Alcohol” category on horizontal axis and average of “Malic Acid”
  (for each class) on vertical axis.
        </div>
        </div>

        {/* Footer element */}
        <div className="foot">
            Designed By Archana Kumari
        </div>
    </div>
  );
}

export default App;
