import React from "react";

// CSS
import './App.css';

// JS
import Header from "./components/header/Header";
import Home from "./components/home/Home";

const App = () => {
    return (
        <div>
            <Header />

            <main className="main">
                <Home />
            </main>
        </div>
    );
};

export default App;