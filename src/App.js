import React, { Component } from 'react'
import DanhSachSanPham from './components/DanhSachSanPham';
import Modal from './components/Modal';

export default class App extends Component {


  render() {
    return (
      <div className="container">
        <DanhSachSanPham />
        <Modal />

      </div>

    )
  }
}
