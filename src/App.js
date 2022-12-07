import React from 'react';
//npm i react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
//
import AppRoutes from './AppRoutes';

export default function App() {

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </BrowserRouter>
    </Layout>    
  );
}

//import logo from './logo.svg';
//import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
