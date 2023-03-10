import React from 'react';
import Product from './Product';

const ProductFeed = ({ products }) => {
  console.log(products);
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, category, description, image, price, ratting, title }) => (
          <Product
            key={id}
            id={id}
            category={category}
            title={title}
            price={price}
            description={description}
            image={image}
          />
        ))}

      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(
            ({ id, category, description, image, price, ratting, title }) => (
              <Product
                key={id}
                id={id}
                category={category}
                title={title}
                price={price}
                description={description}
                image={image}
              />
            )
          )}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, category, description, image, price, ratting, title }) => (
          <Product
            key={id}
            id={id}
            category={category}
            title={title}
            price={price}
            description={description}
            image={image}
          />
        ))}
    </div>
  );
};

export default ProductFeed;
