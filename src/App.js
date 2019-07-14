import React from 'react';
import './App.css';

import {Wrapper} from "./redux/store";
import {Layout} from "./components/layout"

function App() {
  return (
    <Wrapper>
      <Layout/>
    </Wrapper>
  );
}

export default App;
