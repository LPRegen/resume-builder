import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Information from './Information';
import Contact from './Contact';
import Education from './Education';
import Work from './Work';
import Skills from './Skills';

export default class Pages extends Component {
  render() {
    return (
      <Routes>
        <Route path="/information" element={<Information />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    );
  }
}
