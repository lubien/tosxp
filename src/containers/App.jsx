import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

import 'flexboxgrid';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default function App() {
  return (
    <section>
      <Navbar />
      <Content />
      <Footer />
    </section>
  );
}
