import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/index';
import Img from 'gatsby-image';

const Index = ({ data }) => {
  return (
    <Layout site={data.site}>
      <ul className='Catalogue'>
        {data.products.nodes.map((product) => (
          <li className='Catalogue__item' key={product.id}>
            <div className='Product '>
              <div className='Product__image'>
                <Img sizes={product.image.sizes} />
              </div>{' '}
              <div className='Product__details'>
                <div className='Product__name'>
                  {product.name}
                  <div className='Product__price'>${product.price}</div>
                </div>

                <span
                  className='Product__buy snipcart-add-item'
                  data-item-id={product.id}
                  data-item-price={product.price}
                  data-item-image={product.image.url}
                  data-item-name={product.name}
                  data-item-url={`/`}
                >
                  Buy now
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query CatalogueQuery {
    products: allDatoCmsProduct {
      nodes {
        id
        name
        price
        image {
          url
          sizes(maxWidth: 100, imgixParams: { fm: "jpg" }) {
            ...GatsbyDatoCmsSizes
          }
        }
      }
    }
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

export default Index;
