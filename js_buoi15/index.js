var bt = document.getElementById("bt_submit");

function tinh(){
    var tien = Number(document.getElementById("ip_tongTien").value);
    var nguoi = Number(document.getElementById("ip_nguoi").value);
    var tip = Number(document.getElementById("tip").value);
    var kq = document.getElementById("ketQua");

    var tienMoiNguoi = (tien + tien*tip/100)/nguoi;

    kq.innerHTML = tienMoiNguoi.toFixed(2) + "$";
}

bt.onclick = tinh;