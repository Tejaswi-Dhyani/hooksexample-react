import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CurrentTime from './CurrentTime';
import React from "react";
import DigitalClock from './DigitalClock';
import Events from './Events';
import UseState from './Usestate';
import Formp from './Formp';
import Formreal from './Formreal';

function App() {
  return (
    <>
    <div className="maindiv_style">
      <div className='container'>
      <CurrentTime/>
<DigitalClock/>
<Events/>
<UseState/>
<div className='row'>
<div className='col-md-6'>
<Formp/>
</div>
<div className='col-md-6'>
<Formreal/>
</div>
</div>

      </div>

    </div>
    
     </>
  );
}

export default App;
