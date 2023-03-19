import React from 'react';
import s from './app.module.scss'
import bg from './assets/Group1.png'

import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';


function App() {
  return (
    <div className={s.app}>
      <div className={s.appWrapper} >
        <div className={s.container}>
          <Header />
          <Main />
          <Footer />
        </div>
        <img className={s.wrapperBg} src={bg}></img>
      </div>


    </div>
  );
}

export default App;
