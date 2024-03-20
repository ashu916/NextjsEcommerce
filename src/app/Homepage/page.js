import React from 'react';
import Link from 'next/link'

// App.js



// ProductList.j



const products = [
  { id: 1, name: 'iPhone 13', price: '49999/-' },
  { id: 2, name: 'iphone 14', price: '55999/-' },
  { id: 3, name: 'iphone 15', price: '59999/-' },
  // Add more products as needed
];

function ProductList() {
  return (
    <div className="border-2 border-dashed border-black">
      <h2 className='text-center text-2xl text-black font-bold '>Featured Products</h2>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}


// ProductCard.js



function ProductCard({ id, name, price }) {
  return (
    <div>
      <h3 className='text-center font-bold  text-black text-xl'>{name}</h3>
      <p className='text-center text-black' >😮{price}😮</p>
      {/* Add more details or actions for each product */}
      
    </div>
  );
}


// App.js

// ShopDetails.js


function ShopDetails() {
  return (
    <div className=" border-2 border-dashed border-black mt-8">
      <h2 className=" text-center  text-black text-2xl font-bold mb-4">Shop Details</h2>
      <p className=" text-center text-center text-black mb-2">
        <span className=" text-black font-bold">Address: </span>  <br/> KALI PUTLI CHOWK, NEAR GAURAV HOTEL,BALAGHAT
      </p>
      <p className=" text-center text-black mb-2">
         <span className="font-bold">Shop Specifications: </span> <br/> Specializing in the latest mobile devices and accessories.
      </p>
      <p className="text-center mb-2">
         <span className="font-bold">Offers Details: </span> <br/>Check out our ongoing low-price offers on selected products.
      </p>
    </div>
  );
}



// ProductList.js





function Homepage() {
  return (
    
   <div>
    <div className=" flex   flex-col  items-center bg-white min-h-screen">
      <header className=" fixed   w-full bg-red-500 text-white p-4">
        <h1 className="   text-center text-2xl font-bold">MOBILE SHOP</h1>
      </header>
      <main className="container mt-16  mx-auto p-2 ">
            <h2 className="text-xl pb-2 text-black text-center ">Want to buy a new Phone 🤳 But you confused 🤔 which smartphone 📱 suites Your needs and budget.</h2>

        <ProductList />
        <ShopDetails />
        
              <div className='flex justify-center items-center mt-4 mb-5 '>
  

        
        <Link className='linkAnimation ' href="/products">
<button  className="text-black font-bold text-2xl"
        >👉PRODUCTS👈</button></Link>
   
      </div>
      </main>
      <footer className=" relative bottom-0 w-80 bg-gray-200 p-2 text-center">
        <p>&copy; 2024 Mobile Shop</p>
      </footer>
    </div>
    </div>
  );
}

export default Homepage;