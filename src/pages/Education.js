import React from 'react';

const Education = () => {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'lightgray',
      paddingTop: '50px'
    }}
    >
      <div>
      <h2> Education</h2>
        <h3> Bachelor of Science (hons) in Electronic and Telecommunication Engineering</h3>
          <h4> University of Moratuwa </h4>
          <h5> Second Class</h5>
          <p>Final year project was to find a vehicle communication method between DSRC and WIFI protocols. This involves reading and
filtering information from existing research papers, figuring out the research and implement it in a real-life scenario. We have used
veins and veins-Inet tools to simulate a vehicular environment and integrated the two technology stacks into a single environment.
The results of the simulation was to compare the total latency with an average human's response time. This was needed to be
conducted using DSRC vehicle and roadside unit and used esp32 as a WIFI unit. Final results couldn't be conducted due to covid
restrictions.
Apart from the project, Image processing, signal processing, telecommunication and computer architecture were covered through
the degree program</p>
            <br></br>
        <h3> Advanced Level Examination - 2015 </h3>
          <h4> D.S.Senanayake College, Colombo</h4>
          <h5> Combined Mathematics Stream</h5>
          <p>3As for subjects Physics, Chemistry and Combined Mathematics
Played for the basketball team and an active member of science society</p>
      </div>
    </div>
  );
};
  
export default Education;