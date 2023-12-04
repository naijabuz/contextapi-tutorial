const SingleProduct = (props, cart, setCart) => {
  const { id, name, price, image } = props;
  return (
    <article>
      <img src={image} alt={name} className="rounded-[20px]" />

      <h2 className="font-medium text-[2rem]">{name}</h2>

      <p className="font-bold">{`$${price.substring(0, 3)}`}</p>

      <button
        type="button"
        className="text-purple-800 bg-[#e5e5e5] p-2 rounded-[10px]"
        onClick={() => {
          setCart([...cart, props]);
        }}
      >
        Add to cart
      </button>
    </article>
  );
};

export default SingleProduct;
