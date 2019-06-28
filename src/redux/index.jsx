import { combineReducers } from 'redux';
import quanLySanPhamStoreReducer from './reducer/QuanLySanPhamReducer';


const rootReducer = combineReducers({ // rootReducers la store tong cua tong ung dung
    // chua cac store con 
    quanLySanPhamStoreReducer
});

export default rootReducer;