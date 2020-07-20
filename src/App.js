import React from 'react';
import './scss/global.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import RootContainer from "./containers/RootContainer";

library.add(fab, faCheckSquare);

function App() {
  return (
    <RootContainer/>
  );
}

export default App;
