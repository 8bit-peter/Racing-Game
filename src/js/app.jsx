import React from "react";
import ReactDOM from 'react-dom';
import {Board} from './components/Board.jsx'

require('../sass/main.scss');
  
document.addEventListener('DOMContentLoaded', function(){
      ReactDOM.render(
          <Board />,
          document.getElementById('app')
      );
});