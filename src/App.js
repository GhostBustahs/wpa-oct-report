import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialDashboard from './social_dashboard';
import WhakapikiAkeAnalysis from './study_wa_dashboard';
import SurveyDataVisualization from './mash_dashboard';
import FinanceDashboard from './finance_dataset';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SocialDashboard /> {/* Social Dashboard component */}
        <WhakapikiAkeAnalysis /> {/* WhakapikiAkeAnalysis component */}
        <SurveyDataVisualization />
        <FinanceDashboard />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
