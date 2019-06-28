import React, { Component } from 'react'
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {

    dsSanPham = [
        { maSP: 1, tenSP: "SamSung Galaxy Note 10", hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/161554/samsung-galaxy-s10-white-600x600.jpg" },
        { maSP: 2, tenSP: "Iphone XS Max", hinhAnh: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/10/11/636748771945393060_iPhone-Xs-Max-gold.png" },
        { maSP: 3, tenSP: "BPhone 4", hinhAnh: "https://xdavn.com/cdn3/images/20190323/54437116_1051836028337738_1023763020448268288_n.jpg" }
    
      ]
    render() {
        return (
            <div className="row">
                {this.dsSanPham.map((sanPham,index)=>{
                    return(
                        <div className=" container col-md-3" key={index}>
                            <SanPham sanPham={sanPham} />

                        </div>
                    )
                })}
                
            </div>
        )
    }
}
