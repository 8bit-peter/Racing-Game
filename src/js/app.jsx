import React from "react";
import ReactDOM from 'react-dom';
import {Board} from './components/Board.jsx';

import {Youtube1} from './components/Youtube.jsx';


require('../sass/main.scss');
  
document.addEventListener('DOMContentLoaded', function(){
      ReactDOM.render(
          <div>
              <Board />
              <Youtube1 />
          </div>,
          document.getElementById('app')
      );
});