// bai 1:
let b1_bt1 = document.getElementById("tab_item_b1_1");
let b1_bt2 = document.getElementById("tab_item_b1_2");
let b1_bt3 = document.getElementById("tab_item_b1_3");
let b1_content1 = document.getElementById("tab_content1");
let b1_content2 = document.getElementById("tab_content2");
let b1_content3= document.getElementById("tab_content3");

b1_bt1.onclick = function() {
    if (!b1_content1.classList.contains("active")) {
        b1_content1.className += " active";

        b1_content2.classList.remove("active");
        b1_content3.classList.remove("active");
    } else {
        b1_content1.classList.remove("active"); 
    }
};

b1_bt2.onclick = function(){
    if(!b1_content2.classList.contains("active")){
        b1_content2.className += " active";

        b1_content1.classList.remove("active"); 
        b1_content3.classList.remove("active"); 
    }else{
        b1_content2.classList.remove("active");
    }
};

b1_bt3.onclick = function(){
    if(!b1_content3.classList.contains("active")){
        b1_content3.className += " active";

        b1_content1.classList.remove("active");
        b1_content2.classList.remove("active");
    }else{
        b1_content3.classList.remove("active");
    }

};

// bai2

// bai3

let b3_bt1 = document.getElementById("tab_b3_bt1");
let b3_bt2 = document.getElementById("tab_b3_bt2");
let b3_bt3 = document.getElementById("tab_b3_bt3");
let b3_content1 = document.getElementById("content_b3_1");
let b3_content2 = document.getElementById("content_b3_2");
let b3_content3= document.getElementById("content_b3_3");

b3_bt1.onclick = function(){
    b3_bt1.className += " active";
    b3_content1.className += " active";

    b3_bt2.classList.remove("active");
    b3_content2.classList.remove("active");

    b3_bt3.classLis.remove("active");
    b3_content3.classList.remove("active")
}

b3_bt2.onclick = function(){
    b3_bt2.className += " active";
    b3_content2.className += " active";

    b3_bt1.classList.remove("active");
    b3_content1.classList.remove("active");

    b3_bt3.classLis.remove("active");
    b3_content3.classList.remove("active")
}

b3_bt3.onclick = function(){
    b3_bt3.className += " active";
    b3_content3.className += " active";

    b3_bt2.classList.remove("active");
    b3_content2.classList.remove("active");

    b3_bt1.classLis.remove("active");
    b3_content1.classList.remove("active");
}

// bai 4:
let b4_bt_modal = document.getElementById("b4-bt-modal");
let b4_header_close = document.getElementById("b4-bt-header-close");
let b4_footer_close = document.getElementById("b4-bt-footer-close");
let b4_footer_save = document.getElementById("b4-bt-footer-Save");
let b4_content = document.getElementById("content");
let b4_dialog = document.getElementById("dialog");

b4_bt_modal.onclick = function(){
    b4_content.className += " active";
    b4_dialog.className += " active";
}

let close = function(){
    b4_content.classList.remove("active");
    b4_dialog.classList.remove("active");   
}

b4_header_close.onclick = close;
b4_footer_close.onclick = close;
b4_footer_save.onclick = close;

