import { NhanVien } from "./model/nhan_vien.js";
import { addNhanVien, deleteNhanVien } from "./manager-nhan_vien";

function layTTNV() {}

const FormQLNV = document.getElementById("formQLNV");

FormQLNV.onsubmit = (even) => {
  even.preventDefault();

  const listEle = document.querySelectorAll(
    "#formQLNV input, #formQLNV select"
  );
  const nv = {};

  listEle.forEach((ele) => {
    nv[ele.id] = ele.value;
  });

  const newNhanVien = new NhanVien(
    nv.txtTenNV,
    nv.txtMaNV,
    nv.selChucVu,
    nv.txtLuong,
    nv.txtSoGioLam
  );

  addNhanVien(newNhanVien);
};

document.addEventListener("DOMContentLoaded", () => {
    renderTableSinhVien();
  });
