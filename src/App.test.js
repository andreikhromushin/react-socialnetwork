import React from 'react';
import ReactDOM from 'react-dom';
import ReactSocialNetworkApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactSocialNetworkApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
