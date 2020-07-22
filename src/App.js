import React from 'react';
import './scss/global.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import Amplify, {Storage} from 'aws-amplify';
import awsconfig from './aws-exports';

import RootContainer from "./containers/RootContainer";

// Font awesome app library
library.add(fab, faCheckSquare);

// Amplify storage config
Amplify.configure(awsconfig)

function App() {
  return (
    <RootContainer/>
  );
}

export default App;
