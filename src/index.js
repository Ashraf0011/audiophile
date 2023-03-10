import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter } from 'react-router-dom';
import { ContextWrapper } from './Components/Contexts/DataContext';
import { OrderContextWrapper } from './Components/Contexts/OrderContext';


console.log("index called");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ContextWrapper>
            <BrowserRouter>
                <OrderContextWrapper >
                    <App />
                </OrderContextWrapper>
            </BrowserRouter>
        </ContextWrapper>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
