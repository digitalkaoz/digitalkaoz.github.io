import React from 'react';

import '../style/index.scss';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

const App: React.FC = () => {
  return (
    <div className="mdl-layout mdl-js-layout">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
