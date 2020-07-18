import React from 'react';
import "./style.css";

const Container = ({children}) => (
    <main className="container">
        <h1 className="container__header">simple currency exchange</h1>
        {children}
    </main>
)

export default Container;