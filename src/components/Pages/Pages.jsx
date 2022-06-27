import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Information from './Information';

export default class Pages extends Component {
  render() {
    return (
      <Routes>
        <Route path="/information" element={<Information />} />
      </Routes>
    );
  }
}
