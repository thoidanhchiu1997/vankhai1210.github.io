let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 30000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]


let products1 = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 30000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    }
]
// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3



const showInfoProduct=(arr)=>{
    arr.forEach(products => {
        console.log(`${products.name}-${products.price}-${products.brand}-${products.count}`)
    })
}
showInfoProduct(products)

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng

// Tổng tiền mỗi sản phẩm = price * count
// const getTotalMoney=arr =>{
//     return arr.reduce((total,product)=total+(product.price*product.count),0)
// }
// console.log(getTotalMoney(products))
// 3. Tìm các sản phẩm của thuơng hiệu "Apple"

const findProductByBrand=(arr,brand)=>{
    return arr.filter(product => product.brand=brand)
}
console.log(findProductByBrand(products,'Apple'))


// 4. Tìm các sản phẩm có giá > 20000000
const findProductByPrice=(arr,money)=>{
    return arr.filter(product => product.price>money)
}
console.log(findProductByPrice(products,20000000))

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
const findProductByName = (arr,name)=>{
    return arr.filter(product=>product.name.toLowerCase().includes(name.toLowerCase()))
}
console.log(findProductByName(products,'PrO'))

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
let used ={
    name:' redmi note 11',
    price: 300000, 
    brand: "xiaomi", 
    count: 2,

}
const findProductByArray=(arr,used)=>{
    return arr.push(used)
}
console.log(findProductByArray(products,used))
// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
function xoaThuongHieufor(products1){
    var mang=[]
    for(i=0;i<=products1.length-1;i++){
    
        if(products1[i].brand!='Samsung')    
            {
              mang.push(products1[i])
            }
      
    }
    console.log(mang)
    
}
//xoaThuongHieufor(products1)
//
function xoaThuongHieushift(products1){
    var mang=[]
    for(i=0;i<=products1.length-1;i++){
    
        if(products1[i].brand!='Samsung')    
            {
                mang.push(products1[i])
            }
       
    }
    for(i=0;i<=products1.length-1;i++){
    
        if(products1[i].brand=='Samsung')    
            {
                mang.unshift(products1[i])
            }
       
    }
    popped = mang.shift();
    console.log(mang)
    
}
xoaThuongHieushift(products1)
//

const findProductBynotBrand=(arr,brand)=>{
    return arr.filter(products1 => products1.brand!=brand)
}
console.log(findProductBynotBrand(products1,'Samsung'))

// 8. Sắp xếp giỏ hàng theo price tăng dần


// 9. Sắp xếp giỏ hàng theo count giảm dần

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng


