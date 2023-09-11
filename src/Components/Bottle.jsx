const Bottle = ({ bottle }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={bottle.img} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title mx-auto">{bottle.name}</h2>
          <p>Price: {bottle.price} $ </p>
          <div className="card-actions justify-center ">
            <button className="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottle;
