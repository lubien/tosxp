import React from 'react';

import Navbar from '../components/Navbar';
import Content from './Content';

import 'flexboxgrid';
import '../styles/main.sass';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <section>
      <Navbar />
      <Content />
    </section>
  </MuiThemeProvider>
);

export default App;
