import React, {createElement as e, useState} from 'react';
import {Product} from './components/product'

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  )
}

export default App;
