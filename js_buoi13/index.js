//bai 3
var bt_bai1 = document.getElementById("bai3");

function bai3(){
    var kp = document.getElementById("p_bai3");
    var sotien = Number(prompt("Nhập số tiền cần quy đổi:"));

    var tien = sotien*23500;

    kp.innerHTML = "Số tiền sau khi quy đổi là: " + tien;
}

//bai 4
var bt_bai1 = document.getElementById("bai4");

function bai4(){
    var kp_cv = document.getElementById("p_cv");
    var kp_dt = document.getElementById("p_dt");

    var chieuDai = Number(prompt("Nhập chiều dài hình chữ nhật:"));
    var chieuRong = Number(prompt("Nhập chiều rộng hình chữ nhật:"));

    var cv = (chieuDai+chieuRong)*2;
    var dt = chieuDai*chieuRong;

    kp_cv.innerHTML = "Chu vi hình chữ nhật là: " + cv;
    kp_dt.innerHTML = "Diện tích hình chữ nhật là: " + dt;
}

//bai 5
var bt_bai1 = document.getElementById("bai5");

function bai5(){
    var kp = document.getElementById("p_bai5");
    var so = Number(prompt("Nhập số có 2 chữ số:"));
    
    var hangDonVi = so%10;
    var hangChuc = (so-hangDonVi)/10;
    var tong = hangDonVi+hangChuc;

    kp.innerHTML = "Tông của số " + so + " là: " + tong;
}