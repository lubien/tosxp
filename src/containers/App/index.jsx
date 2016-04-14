import React from 'react';
import Navbar from '../../components/Navbar';
import Content from '../../components/Content';
import Footer from '../../components/Footer';

export default function App() {
  return (
    <section className="hero is-success is-fullheight">
      <Navbar />
      <Content />
      <Footer />
    </section>
  );
}
