function ProductCard({ image, alt, titleLineOne, titleLineTwo }) {
  return (
    <article className="product-card">
      <img src={image} alt={alt} />

      <div className="product-info">
        <h3>{titleLineOne}</h3>
        <h3>{titleLineTwo}</h3>
      </div>
    </article>
  );
}

export default ProductCard;