function ProductCard({ image, title1, title2, alt }) {
  return (
    <article className="product-card">
      <img src={image} alt={alt} />
      <div className="product-info">
        <h3>{title1}</h3>
        <h3>{title2}</h3>
      </div>
    </article>
  );
}

export default ProductCard;