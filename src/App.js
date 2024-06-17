import React from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Privacy Policy</h1>
            </header>
            <main>
                <PrivacyPolicy />
            </main>
            <footer className="App-footer">
                <p>&copy; 2023 Jouls Ecotech Pvt. Ltd.</p>
            </footer>
        </div>
    );
}

export default App;
