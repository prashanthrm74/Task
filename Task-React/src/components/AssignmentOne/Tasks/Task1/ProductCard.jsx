

const ProductCard = () => {

     const productDetails={
        name:"Mobile",
        price:30000,
        category:"Electronics",
        Description:"5G Smart Phone"
    }


  return (
    <div className="flex justify-center">
    
    <div className="bg-green-400 h-100vh w-100 text-center p-10 text-white rounded-xl">
         <h1>Task 3</h1>
        <h2>Product Name: {productDetails.name}</h2>
        <h2>Product Price: {productDetails.price}</h2>
        <h2>Prodcut Category: {productDetails.category}</h2>
        <h2>Product Description: {productDetails.Description}</h2>
    </div>
      
    </div>
  )
}

export default ProductCard