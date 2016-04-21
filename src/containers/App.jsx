import React from 'react';

import Navbar from '../components/Navbar';
import Content from './Content';

import 'flexboxgrid';
import '../styles/main.sass';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionCode from 'material-ui/svg-icons/action/code';

const floatingButtonStyle = {
  position: 'fixed',
  bottom: 24,
  right: 12,
};

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <section>
      <Navbar />
      <Content />
      <FloatingActionButton
        href="https://github.com/lubien/tosxp"
        target="_blank"
        style={floatingButtonStyle}
        linkButton
      >
        <ActionCode />
      </FloatingActionButton>
    </section>
  </MuiThemeProvider>
);

export default App;
