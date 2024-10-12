function calculateDiscount(isLoyalCustomer, productQuantity, isPromotionPeriod) {
    if (productQuantity < 0 ) {
        return "Số sản phẩm không hợp lệ";
    }
    var discount = 0; 
    if (isLoyalCustomer) {
        if (productQuantity > 10) {
            if (isPromotionPeriod) {
                discount = 30;
            } else {
                discount = 20;
            }
        } else {
            if (isPromotionPeriod) {
                discount = 10;
            } else {
                discount = 5;
            }
        }
    } else {
        if (productQuantity > 10) {
            if (isPromotionPeriod) {
                discount = 20;
            } else {
                discount = 10;
            }
        } else {
            if (isPromotionPeriod) {
                discount = 5;
            } else {
                discount = 0;
            }
        }
    }
    return discount;
}

// Kiểm thử bảng quyết định
console.log("Kiểm thử bảng quyết định:");
console.log(calculateDiscount(true, -1, true));
console.log(calculateDiscount(true, -1, false));
console.log(calculateDiscount(true, 1, true));
console.log(calculateDiscount(true, 1, false));
console.log(calculateDiscount(true, 11, true));
console.log(calculateDiscount(true, 11, false));
console.log(calculateDiscount(false, -1, true));
console.log(calculateDiscount(false, -1, false));
console.log(calculateDiscount(false, 1, true));
console.log(calculateDiscount(false, 1, false));
console.log(calculateDiscount(false, 11, true));
console.log(calculateDiscount(false, 11, false));


// Kiểm thử biên
console.log("Kiểm thử biên:");
console.log(calculateDiscount(true, 0, true));
console.log(calculateDiscount(true, 1, true));
console.log(calculateDiscount(true, 1000, true));
console.log(calculateDiscount(true, 99999, true));
console.log(calculateDiscount(true, 100000, true));
console.log(calculateDiscount(true, 0, false));
console.log(calculateDiscount(true, 1, false));
console.log(calculateDiscount(true, 1000, false));
console.log(calculateDiscount(true, 99999, false));
console.log(calculateDiscount(true, 100000, false));
console.log(calculateDiscount(false, 0, true));
console.log(calculateDiscount(false, 1, true));
console.log(calculateDiscount(false, 1000, true));
console.log(calculateDiscount(false, 99999, true));
console.log(calculateDiscount(false, 100000, true));
console.log(calculateDiscount(false, 0, false));
console.log(calculateDiscount(false, 1, false));
console.log(calculateDiscount(false, 1000, false));
console.log(calculateDiscount(false, 99999, false));
console.log(calculateDiscount(false, 100000, false));

//Kiểm thử theo độ phủ cấp 2(C2)
console.log("Kiểm thử theo độ phủ cấp 2(C2):");
console.log(calculateDiscount(true, -1, true));
console.log(calculateDiscount(true, 11, true));
console.log(calculateDiscount(true, 11, false));
console.log(calculateDiscount(true, 1, true));
console.log(calculateDiscount(true, 1, false));
console.log(calculateDiscount(false, 11, true));
console.log(calculateDiscount(false, 11, false));
console.log(calculateDiscount(false, 1, true));
console.log(calculateDiscount(false, 1, false));