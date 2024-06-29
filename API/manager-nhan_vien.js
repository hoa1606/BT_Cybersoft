import { fetchApi } from "./config.js";

export const listNhanVien = [];

export const renderTableNhanVien = () =>{}
  

export const addNhanVien = (nv) =>{
    fetchApi("/nhanVien",{
        method: "POST",
        body: JSON.stringify(nv),
    });
}

export const deleteNhanVien = (id) =>{}