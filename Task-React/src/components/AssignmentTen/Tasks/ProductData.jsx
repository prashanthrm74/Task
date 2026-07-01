import { useState } from "react"


const ProductData = () => {

    const [products,setProducts]=useState({
        productname:"",
        productprice:"",
        category:"",
        brand:""
    })

    const [submittedData, setSubmittedData] = useState(null);


    const handleChange=(e)=>{

         const { name, value } = e.target;

    setProducts((prev) => ({...prev,[name]: value}));
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        setSubmittedData(products)

        console.log(submittedData);
        
        setProducts({
        productname:"",
        productprice:"",
        category:"",
        brand:""
    })

    }

  return (
<>
<div className="h-screen bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 w-full">

 <h1 className="text-indigo-500 font-bold text-3xl text-center p-6 ">Product Management Form</h1> 
 <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 ml-45">
    <div className="bg-white rounded-2xl shadow-2xl p-8">

     <form onSubmit={handleSubmit}>

        <h1 className="font-semibold text-2xl text-center mb-3">Product Details</h1>

        <div className="flex mb-4">
        <label>Product Name</label>
        <input type="text" name="productname" value={products.productname} onChange={handleChange} 
        className=" w-60 py-1 px-1 ml-3 border border-gray-500 rounded-l " placeholder="Enter a Product"/>
        </div>

        <div className="flex mb-4">
        <label>Product Price</label>
        <input type="text" name="productprice" value={products.productprice} onChange={handleChange} 
        className=" w-60 py-1 px-1 ml-3 border border-gray-500 rounded-l " placeholder="Enter a price"/>
        </div>

        <div className="flex mb-4">
        <label>Category</label>
        <input type="text" name="category" value={products.category} onChange={handleChange} 
        className=" w-60 py-1 px-1 ml-3 border border-gray-500 rounded-l " placeholder="Enter a Category"/>
        </div>

        <div className="flex mb-4">
        <label>Brand</label>
        <input type="text" name="brand" value={products.brand} onChange={handleChange} 
        className=" w-60 py-1 px-1 ml-3 border border-gray-500 rounded-l " placeholder="Enter a Brand"/>
        </div>

        <div className="flex justify-center">
            <button type="submit" className="w-25 bg-indigo-500 text-white rounded-xl py-1 text-center">Save</button>
        </div>
        
        
        </form>

    </div>
    <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col justify-center">

          <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
            Products
          </h2>

          {submittedData ? (
            <div className="space-y-4">

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Product Name</span>
                <span>{submittedData.productname}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Price</span>
                <span>{submittedData.productprice}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Category</span>
                <span>{submittedData.category}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Brand</span>
                <span>{submittedData.brand}</span>
              </div>

            </div>
          ) : (
            <div className="text-center text-gray-500">
              <div className="text-7xl mb-4"></div>
              <p>No Products added yet.</p>
              <p className="text-sm mt-2">
                Fill the product and click <b>Save</b>.
              </p>
            </div>
          )}
        </div>

 </div>


</div>


</>

  )
}

export default ProductData