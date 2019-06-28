import React, { Component } from 'react';
import { connect } from 'react-redux';
class SanPham extends Component {
    render() {
        let { hinhAnh, tenSP } = this.props.sanPham;
        return (
            <div className="card mt-4">
                <img className="card-img-top" src={hinhAnh} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                <div className="card-body">
                    <h4 className="card-title">{tenSP}</h4>
                    <p className="card-text">Text</p>
                    <button onClick={()=>this.props.xemChiTiet(this.props.sanPham)} type="button" className="btn btn-info " data-toggle="modal" data-target="#myModal"> Xem chi tiết</button>
                </div>
            </div>

        )
    }
}

// dinh nghia cac su kien lam thay doi gia tri tren store
const mapDispathchToProps = (dispatch) => {
    // tao ra 1  phuong thuc xu ly su kien cho component
    return {
        xemChiTiet: (sanPham) => {
            dispatch({
                type: 'XEM_CHI_TIET',// type la thuoc tinh bats buoc
                sanPham
            })
        }
    }
}

export default connect(null, mapDispathchToProps)(SanPham);
