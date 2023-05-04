import logo from './logo.svg';
import './App.css';
import React from 'react';
import Brief from './Brief';
import Experience from './Experience';
import Education from './Education';
import SelfProjects from './SelfProjects';

// TopBar component
function TopBar(props) {
  return (
    <div className="topbar">
      <button onClick={() => props.onButtonClick('brief')}>Brief</button>
      <button onClick={() => props.onButtonClick('experience')}>Experience</button>
      <button onClick={() => props.onButtonClick('education')}>Education</button>
      <button onClick={() => props.onButtonClick('self-projects')}>Self-Projects</button>
    </div>
  );
}

// BottomBar component
function BottomBar(props) {
  return (
    <div className="bottombar">
      <input type="text" value={props.value} onChange={props.onChange} />
    </div>
  );
}

// App component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: 'brief',
      textValue: ''
    };
  }

  handleButtonClick = (buttonName) => {
    this.setState({ selectedButton: buttonName });
  }

  handleTextChange = (event) => {
    this.setState({ textValue: event.target.value });
  }

  render() {
    return (
      <div>
        <TopBar onButtonClick={this.handleButtonClick} />
        <div className="content">
          {this.state.selectedButton === 'brief' && <Brief />}
          {this.state.selectedButton === 'experience' && <Experience />}
          {this.state.selectedButton === 'education' && <Education />}
          {this.state.selectedButton === 'self-projects' && <SelfProjects />}
        </div>
        <BottomBar value={this.state.textValue} onChange={this.handleTextChange} />
      </div>
    );
  }
}

export default App;
