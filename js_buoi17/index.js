//bài 1: for
// document.getElementById("bt_bai1").onclick = function () {
//     var ip = Number(document.getElementById("ip_so").value);
//     var p = document.getElementById("p_bai1");

//     var s= 0;
//     for(var i = 1; i<ip; i++){
//         if(s>=ip){
//             p.innerHTML = i;
//             break;
//         }
//         s += i;
//     }
// };

//bài 1: while
document.getElementById("bt_bai1").onclick = function () {
    var ip = Number(document.getElementById("ip_so").value);
    var p = document.getElementById("p_bai1");

    var s = 0;
    var i = 1;
    while (i<ip) {
         if (s >= ip) {
            p.innerHTML = i;
            break;
         }
    s += i;
    i++;

    }
    
};

//bài 1: do while
// document.getElementById("bt_bai1").onclick = function () {
//       var ip = Number(document.getElementById("ip_so").value);
//       var p = document.getElementById("p_bai1");
    
//       var s = 0;
//       var i = 1;
//       do {
//           s += i;
//           if (s >= ip) {
//               p.innerHTML = "Kết quả: " + i; // Gán giá trị của i cho phần tử p
//               break;
//           }
//           i++;
//       } while (i<ip);
        
// };

//bài 2: for
// document.getElementById("bt_bai2").onclick = function () {
//     var ip_x = Number(document.getElementById("ip_x").value);
//     var ip_n = Number(document.getElementById("ip_n").value);
//     var p = document.getElementById("p_bai2");
   
//     var s = 0;
//     var i = 1;

//     for(i;i<=ip_n;i++){
//         s = s + Math.pow(ip_x, i); 
//     }
//     p.innerHTML = s;    
// };

//bài 2: while
// document.getElementById("bt_bai2").onclick = function () {
//     var ip_x = Number(document.getElementById("ip_x").value);
//     var ip_n = Number(document.getElementById("ip_n").value);
//     var p = document.getElementById("p_bai2");

//     var s = 0;
//     var i = 1;
//     while (i<=ip_n) {
//         s += Math.pow(ip_x, i);
//         i++;
//     }
//     p.innerHTML = s; 
// };

//bài 2: do while
// document.getElementById("bt_bai2").onclick = function () {
//     var ip_x = Number(document.getElementById("ip_x").value);
//     var ip_n = Number(document.getElementById("ip_n").value);
//     var p = document.getElementById("p_bai2");

//     var s = 0;
//     var i = 1;
//     do {
//         s += Math.pow(ip_x, i);
//         i++;
//     } while (i<=ip_n);
//     p.innerHTML = s; 
// };

//bài 3: for
// document.getElementById("bt_bai3").onclick = function () {
//     var ip3 = Number(document.getElementById("ip_so3").value);
//     var p3 = document.getElementById("p_bai3");
//     var s= 1;
//     for(var i = 1; i<=ip3; i++){
//         s *= i;
//     }
//     p3.innerHTML = s; 
// };

//bài 3: while
// document.getElementById("bt_bai3").onclick = function () {
//     var ip3 = Number(document.getElementById("ip_so3").value);
//     var p3 = document.getElementById("p_bai3");
//     var s= 1;
//     var i = 1
    
//     while (i<=ip3) {
//         s *= i;
//         i++;
//     }
//     p3.innerHTML = s; 
// };

//bài 3: while
document.getElementById("bt_bai3").onclick = function () {
    var ip3 = Number(document.getElementById("ip_so3").value);
    var p3 = document.getElementById("p_bai3");
    var s= 1;
    var i = 1
    
    do {
        s *= i;
        i++;
    } while (i<=ip3);
    p3.innerHTML = s; 
};

//bài 4: for
document.getElementById("bt_bai4").onclick = function () {
    var div_cha = document.getElementById("div_4");
    for (let i = 0; i < 10; i++) {
        const divElement = document.createElement("div");
        divElement.textContent = `Div ${i + 1}`;
      
        // Đặt màu nền cho thẻ div
        if (i % 2 === 0) {
          divElement.style.backgroundColor = "red";
        } else {
          divElement.style.backgroundColor = "blue";
        }
      
        // Thêm thẻ div vào div cha
        divContainer.appendChild(divElement);
    }

};

function soNguyenTo(so){
    var dem = 0;
    for(var i=1; i<=so; i++){
        if(so%i==0){
            dem +=1;
        }
    }
    if(dem==2){
        return so;
    }
}

//bài 4: for
// document.getElementById("bt_bai5").onclick = function () {
//     var ip5 = parseInt(document.getElementById("ip_so5").value);
//     var p5 = document.getElementById("p_bai5");
//     var soNguyenToArr = [];
  
//     for (var i = 1; i <= ip5; i++) {
//       var so = soNguyenTo(i);
//       if (so) {
//         soNguyenToArr.push(so);
//       }
//     }
  
//     p5.innerHTML = soNguyenToArr.join(", ");
//   };

  //bài 4: while
//   document.getElementById("bt_bai5").onclick = function () {
//     var ip5 = parseInt(document.getElementById("ip_so5").value);
//     var p5 = document.getElementById("p_bai5");
//     var soNguyenToArr = [];
//     var i = 1;
  
//     while (i <= ip5) {
//       var so = soNguyenTo(i);
//       if (so) {
//         soNguyenToArr.push(so);
//       }
//       i++;
//     }
  
//     p5.innerHTML = soNguyenToArr.join(", ");
//   };

 //bài 4: do while
 document.getElementById("bt_bai5").onclick = function () {
    var ip5 = parseInt(document.getElementById("ip_so5").value);
    var p5 = document.getElementById("p_bai5");
    var soNguyenToArr = [];
    var i = 1;
  
    do {
      var so = soNguyenTo(i);
      if (so) {
        soNguyenToArr.push(so);
      }
      i++;
    } while (i <= ip5);
  
    p5.innerHTML = soNguyenToArr.join(", ");
  };