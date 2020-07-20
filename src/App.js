import React from 'react';
import './scss/global.scss';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import RootContainer from "./containers/RootContainer";

library.add(faCheckSquare);

function App() {
  return (
    <RootContainer/>
  );
}

export default App;
