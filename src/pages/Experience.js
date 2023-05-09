import React from 'react';

const Experience = () => {
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
      <h2> Experience</h2>
        <h3> InSync Information Technologies</h3>
          <h4> Network Automation Engineer</h4>
          <h5> From 2021 </h5>
          <br></br>
          <p>Setting up system infrastructure like three-node clusters in mongoDB and RabbitMQ and also ELK cluster in different servers. This
role includes logical volume management.
Data analysis and visualization for different machine learning related projects. This includes importing and cleaning data, plotting
histograms and different graphs in EDA, data aggregation and grouping and data wrangling.
Dockerized a controller-worker environment components and deployed them as aws ecs instances working with amazon mq
message broker.
Using AI models for time series forecasting (mathematical models from meta-prophet) and anomaly detection (kitsune - and
ensemble of autoencoder model)
Designing and implementing AI models as part of a Django web application and adding monitoring functionality.
Designing InSync health module to asynchronously function as master-slave structure in multiple devices while monitoring
mongoDB, rabbitMQ status as well as health of selected systemctl processes running.</p>
            <br></br><br></br>
        <h3> Global Wavenet (pvt) Ltd </h3>
          <h4> Internship</h4>
          <h5> Six months from June to December 2019</h5>
          <br></br>
          <p>Study the Call Detail Record manuals of each customer and create a SQL for each of them. This process requires to understand
each field in a comma separated array and understand which fields are important.
Design and implement a CDR analyzer which is requires CDR documents as input and will will outputs and detailed view for each
CDR in the document. Yii framework (MVC) was used to build it.
The CDR analyzer needed an extension to compare CDRs and highlight the differences for either two or three CDRs side-by-side.
Another extension added to the project as a USSD visualizer where an input USSD CDR document analyzed and for each USSD
session a path diagram visualized. The visualization is done in vis.js library.</p>
      </div>
    </div>
  );
};

export default Experience;