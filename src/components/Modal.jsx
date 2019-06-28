import React, { Component } from 'react';
import { connect } from 'react-redux'; // thu vien ket noi store cua redux va component cua redux

class Modal extends Component {
    render() {
        return (
            <div>

                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">{this.props.sanPhamModal.tenSP}</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                Modal body..
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

// khi ung dung chay thi mapStateToProps se duoc thuc thi
const mapStateToProps = (state) => {
    // ham nay tuong tu subcribe ben angular
    // state: store tong(rootReducer)

    return {
        sanPhamModal: state.quanLySanPhamStoreReducer.sanPhamModal
        // => tao ra 1 prop cho component lay ket qua tu store ve
    }

}

export default connect(mapStateToProps, null)(Modal); // ket noi component va redux
