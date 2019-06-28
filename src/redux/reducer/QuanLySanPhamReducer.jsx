
const stateDefault = {
    sanPhamModal: {
        maSP: 1,
        tenSP: " san pham mac dinh"
    }

};
// stateDefault la du lieu mac dinh tren store

// quanLySanPhamStoreReducer:tuong tu service ben angular
const quanLySanPhamStoreReducer = (state = stateDefault, action) => {

    console.log(action);
    switch (action.type) {// dua vao thuoc tinh type de biet action nao duoc gui ldu lieu

      
        case "XEM_CHI_TIET" : {
            const stateUpdate = { ...state };
            stateUpdate.sanPhamModal = action.sanPham;
            return { ...stateUpdate };

        }

    }
    return { ...state };
};

export default quanLySanPhamStoreReducer;