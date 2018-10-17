import React from 'react';

import QR from 'components/QR/QR';
import { Header } from 'components/Header/Header';

import './styles.css';

export const App = props => (
  <div className="App">
    <div className="DiagonalBg-Diagonal"></div>
    <div className="DiagonalBg-AboveDiagonal">
      <Header />

      <div className="Wrapper">
        <h1>QR code generator</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <QR {...props} />
      </div>
    </div>
  </div >
);
