import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import { useState } from "react";

faker.seed(50);

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  const [products] = useState(productArray);
  const [cart, setCart] = useState([]);

  return (
    <section className="p-10  grid gap-7 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {products.map((product) => (
        <SingleProduct
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </section>
  );
};

export default Home;
