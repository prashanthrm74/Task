import ProfileCard from "./ProfileCard";

const ProductDetails= () => {
  const Productdata = {
    "Product Name": "iPhone 15",
    "Product Price": "79800",
    Category: "Mobile",
    Brand: "APPLE",
  };

  return (
    <ProfileCard
      title="Product Details"
      data={Productdata}
    />
  );
};

export default ProductDetails;