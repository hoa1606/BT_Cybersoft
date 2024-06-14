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
    b3_content1.classList.remove("active")
}
