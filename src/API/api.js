import axios from "axios";
import { publicRequest, userRequest } from "./requestmethod";

export const signupData = async (data) => {
  console.log("second check", data);
  const res = await axios.post(
    "http://localhost:3001/api/postsignupdata",
    data
  );
  console.log(res.data);
};

export const verifydata = async (data) => {
  console.log("*******", data);
  try {
    return await axios.post("http://localhost:3001/api/verifylogin", data);
  } catch (err) {
    console.log(err);
  }
};

export const cartdata = async (data) => {
  console.log("bitch give me data", data);
  try {
    const res = await axios.post(
      "http://localhost:3001/api/postcartdata",
      data
    );
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getCartData = async (id) => {
  const loginId = id.loginId;
  // console.log(loginId);
  try {
    const res = await userRequest.get(`/api/getdbdata/${loginId}`);
    let totalAmount = 0;
    let item = [];
    let quantity = 0;

    quantity = res.data.reduce((currNumber, item) => {
      return currNumber + item.productQuantity;
    }, 0);
    for (let i = 0; i < res.data.length; i++) {
      let totalAmountData = 0;
      totalAmountData = res.data[i].productPrice * res.data[i].productQuantity;
      totalAmount += totalAmountData;
    }
    // console.log(res.data);

    return { cartData: res.data, totalAmount, item, totalQuantity: quantity };
  } catch (err) {
    console.log(err);
  }
};

export const updateQuantity = async (data) => {
  // console.log("get it buddy the id and data", data);
  const id = data.id;
  const quantity = data.quantity;

  try {
    const res = await publicRequest.put(`/api/updatequantity/${id}`, {
      quantity,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postOrderData = async (data) => {
  // console.log(data);
  try {
    const res = await publicRequest.post("/api/postcartorder", data);
    console.log(res.data.products);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getOrderData = async (id) => {
  // console.log(id);
  try {
    const res = await publicRequest.get(`/api/ordercartdata/${id}`);
    console.log(res.data);
    const products = res.data.map((li) => li.products);
    console.log(products);
    const allproducts = products.flat(Infinity);
    return { orderData: allproducts, id: res.data[0].orderId };
  } catch (err) {}
};

export const getProfileData = async (id) => {
  try {
    const res = await publicRequest.get(`/api/profiledata/${id}`);
    return { profileData: res.data };
  } catch (err) {
    console.log(err);
  }
};

export const removeCartData = async (id) => {
  try {
    const data = await publicRequest.delete(`/api/deletecartdata?data=${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const removeCart = async (id) => {
  console.log(id);
  try {
    return await publicRequest.delete(`/api/removecartdata?id=${id}`);
  } catch (err) {
    console.log(err);
  }
};

export const updateAddress = async (data) => {
  const address = data.address;
  console.log(data);
  try {
    const res = await publicRequest.put(`/api/updateaddress/${data.id}`, {
      address,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getItemData = async () => {
  console.log("haiii");
  try {
    const res = await publicRequest.get("/api/getItem");
    console.log(res.data);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const removeOrderData = async (data) => {
  // console.log(id);
  const name = data.itemName;
  const id = data.id;
  console.log(id);
  console.log(name);
  try {
    return await publicRequest.put(`/api/deleteorder?id=${id}`, { name });
  } catch (err) {
    console.log(err);
  }
};

export const addCancelData = async (data) => {
  try {
    const res = await publicRequest.post("/api/postcancelorder", data);
    return res;
  } catch (err) {}
};
export const DATA = [
  {
    id: 1,
    category: "Mens",
    name: "Plain Long Sleeve T Shirt ",
    image:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
    price: 45,
  },
  {
    id: 2,
    category: "Mens",
    name: "Plain Short Sleeve T Shirt",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 55,
  },
  {
    id: 3,
    category: "Mens",
    name: "White T-shirt",
    image:
      "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 50,
  },
  {
    id: 5,
    category: "Mens",
    name: "Blue jeans",
    image:
      "https://images.unsplash.com/photo-1511105612320-2e62a04dd044?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 120,
  },

  {
    id: 6,
    category: "Mens",
    name: "Black jeans",
    image:
      "https://images.unsplash.com/photo-1511196044526-5cb3bcb7071b?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 115,
  },
  {
    id: 7,
    category: "footwears",
    name: "AIR jordan Red",
    image:
      "https://images.unsplash.com/photo-1600774237019-70db10d342e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 250,
  },
  {
    id: 8,
    category: "footwears",
    name: "Aj1 Sneakers",
    image:
      "https://images.unsplash.com/photo-1612181346599-a6bfbd67be86?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 230,
  },
  {
    id: 9,
    category: "footwears",
    name: "Nike Air jordan",
    image:
      "https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 210,
  },
  {
    id: 10,
    category: "accessories",
    name: "Sun glasses from Gentle monster",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 110,
  },

  {
    id: 11,
    category: "accessories",
    name: "White canvas tote bag",
    image:
      "https://images.rawpixel.com/image_350/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA3L3M3My1tY2tpbnNleS0wMzU0LWt3YW4uanBn.jpg",
    price: 11,
  },
  {
    id: 12,
    category: "accessories",
    name: "White cap",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 10,
  },
];

// export const MEN = DATA.filter((li)=>li.category==="Mens")

// export const FOOTWEAR = DATA.filter((li)=>li.category==="footwears")
// export const ACCESSORY = DATA.filter((li)=>li.category==="accessories")
