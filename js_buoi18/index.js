document.querySelector("#btn").addEventListener("click", function () {
    var numbersInput = document.getElementById("numbers").value;
    var numbers = numbersInput.split(",").map(Number);

    // Các chức năng tính toán ở đây
    var tongSoDuong = tinhTongSoDuong(numbers);
    var demSoDuong = demSoDuongArr(numbers);
    var minNumber = timSoNhoNhatArr(numbers);
    var soDuongNhoNhat = timSoDuongNhoNhat(numbers);
    var soChanCuoiCung = TimSoChanCuoiCungArr(numbers);
    var sxTangDan = sapXepTangDan(numbers);
    var primeDauTien = timPrimeDauTien(numbers);
    // Và các chức năng khác...

    var resultHTML = `
<p>1: Tổng các số dương trong mảng: ${tongSoDuong}</p>
<p>2: Số lượng số dương trong mảng: ${demSoDuong}</p>
<p>3: Số nhỏ nhất trong mảng: ${minNumber}</p>
<p>4: Số dương nhỏ nhất trong mảng: ${soDuongNhoNhat}</p>
<p>5: Số chẵn cuối cùng trong mảng: ${soChanCuoiCung}</p>
<p>7: sắp xếp mảng theo tứ tự tăng dần: ${sxTangDan}</p>
<p>8: Tìm số nguyên tố đầu tiên : ${primeDauTien}</p>
`;

    document.getElementById("result").innerHTML = resultHTML;
});

// Các hàm tính toán ở đây
// 1:
function tinhTongSoDuong(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// 2:
function demSoDuongArr(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}

// 3:
function timSoNhoNhatArr(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// 4:
function timSoDuongNhoNhat(arr) {
    var minPositive = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            if (minPositive === -1 || arr[i] < minPositive) {
                minPositive = arr[i];
            }
        }
    }
    return minPositive;
}

// 5:
function TimSoChanCuoiCungArr(arr) {
    var lastEven = -1;
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            lastEven = arr[i];
            break;
        }
    }
    return lastEven;
}

// 7:
function sapXepTangDan(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}

// 8:
function timPrimeDauTien(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            return arr[i];
        }
    }
    return -1;
}

// Kiểm tra số nguyên tố
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}