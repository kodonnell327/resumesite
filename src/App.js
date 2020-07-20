import React from 'react';
import './scss/global.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare);

function App() {
  return (
    <h1>app</h1>
  );
}

export default App;
