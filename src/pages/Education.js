import React from 'react';

const Education = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >
      <h1> Education</h1>
        <h2> Bachelor of Science (hons) in Electronic and Telecommunication Engineering</h2>
          <h3> Second Class</h3>
            <p>
              DSRC and WIFI technologies are two standards used in different vehicles to communicate within each other. 
              Our goal was to enable communication between these two technologies. in the simulation stage, using Veins 
              and Veins-Inet we used a DSRC roadside unit to convert WIFI packets to DSRC and vice-versa. 
              The purpose was to conduct the experiment and compare with the other vehicle communication technologies based on 
              travel time and payload volume, to understand whether a vehicle driver would have enough time to react.
            </p>
    </div>
  );
};
  
export default Education;