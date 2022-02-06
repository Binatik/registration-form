// =================================================
import React from 'react';
// =================================================

// Component
import '../index.css';
import './global.css';
import Registration from "./registration/Registration";
import Form from "./form/Form";

function App() {
  return (
      <React.Fragment>
          <div className="global">
              <div className="wrapper">
                  <Registration />
                  <Form />
              </div>
          </div>
      </React.Fragment>
  );
}

export default App;
