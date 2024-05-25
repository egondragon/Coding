import React from 'react';
import PhoneComponent from './components/PhoneComponent'
import store from './redux/store'
import { Provider  } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneComponent/>
      </div>
    </Provider>
  );
}

export default App;
