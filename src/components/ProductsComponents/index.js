import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'
import Products from '../Products';

import {
  ProductsContainer,
  Responsiveness,
  ProductPageDes,
  Heading,
  Description,
  ProductCountHideFilter,
  ItemCount,
  FilterHideCont,
  LeftArrow,
  FilterHide,
  RecommendedContBoss,
  RecommendedCont,
  Recommended,
  ProductAndFilterContainer,
  Horizontal,
  DownArrow,
  FilterContainer,
  CustomizbleCont,
  CustomCheckbox,
  Customizble,
  FilterOptionsContainer,
  FilterDropDown,
  Filter,
  AllText,
  FilterAndRecSm, 
  FilterConSm,
  TextSm,
  RecAndImgSm,
  LoaderContainer,
  ProductList
} from '../StyledComponents/StyledCSS';

import downArrow from '../../image/arrow-down.jpg';
import leftArrow from '../../image/arrow-left.png';
import rightArrow from '../../image/arrow-right.png';

const ProductsComponents = () => {
  const [isFilterHidden, setIsFilterHidden] = useState(true);
  const filterArrow = isFilterHidden ? leftArrow : rightArrow;
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setProductsData(data);
        setError(null);
      } catch (err){
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return ( 
    <ProductsContainer>
      <Responsiveness>
        <ProductPageDes>
          <Heading>DISCOVER OUR PRODUCTS</Heading>
          <Description>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</Description>
        </ProductPageDes>

        <Horizontal />

        <ProductCountHideFilter>
          <ItemCount>3425 ITEMS</ItemCount>

          <FilterHideCont type="button" onClick={() => setIsFilterHidden(!isFilterHidden)}>
            <LeftArrow src={filterArrow} alt="left arrow" />
            <FilterHide>{isFilterHidden ? "HIDE FILTER" : "SHOW FILTER"}</FilterHide>
          </FilterHideCont>

          <RecommendedContBoss>
            <RecommendedCont>
              <Recommended>RECOMMENDED</Recommended>
              <DownArrow src={downArrow} alt="down arrow" />
            </RecommendedCont>
          </RecommendedContBoss>
        </ProductCountHideFilter>

        <FilterAndRecSm>
          <FilterConSm>
            <TextSm>FILTER</TextSm>
          </FilterConSm>
          <RecAndImgSm>
            <TextSm>RECOMMENTED</TextSm>
            <DownArrow src={downArrow} alt="downarrow" />
          </RecAndImgSm>
        </FilterAndRecSm>

        <Horizontal />

        <ProductAndFilterContainer>
          
          <FilterContainer $filterHidden={isFilterHidden}>
            <CustomizbleCont>
              <CustomCheckbox type="checkbox" />
              <Customizble>Customizble</Customizble>
            </CustomizbleCont>
            <Horizontal />

            <FilterOptionsContainer>
              <FilterDropDown>
                <Filter>IDEAL FOR</Filter>
                <DownArrow src={downArrow} alt="Down arrow" />
              </FilterDropDown>
              <AllText>All</AllText>
              
            </FilterOptionsContainer>
            <Horizontal />

            <FilterOptionsContainer>
              <FilterDropDown>
                <Filter>occasion</Filter>
                <DownArrow src={downArrow} alt="Down arrow" />
              </FilterDropDown>
              <AllText>All</AllText>
              
            </FilterOptionsContainer>
            <Horizontal />

            <FilterOptionsContainer>
              <FilterDropDown>
                <Filter>work</Filter>
                <DownArrow src={downArrow} alt="Down arrow" />
              </FilterDropDown>
              <AllText>All</AllText>
              
            </FilterOptionsContainer>
            <Horizontal />

            <FilterOptionsContainer>
              <FilterDropDown>
                <Filter>fabric</Filter>
                <DownArrow src={downArrow} alt="Down arrow" />
              </FilterDropDown>
              <AllText>All</AllText>
              
            </FilterOptionsContainer>
            <Horizontal />

            <FilterOptionsContainer>
              <FilterDropDown>
                <Filter>segment</Filter>
                <DownArrow src={downArrow} alt="Down arrow" />
              </FilterDropDown>
              <AllText>All</AllText>
              
            </FilterOptionsContainer>
            <Horizontal />

            <FilterOptionsContainer>
              <FilterDropDown>
                <Filter>suitable for</Filter>
                <DownArrow src={downArrow} alt="Down arrow" />
              </FilterDropDown>
              <AllText>All</AllText>
              
            </FilterOptionsContainer>
            <Horizontal />

            <FilterOptionsContainer>
              <FilterDropDown>
                <Filter>raw materials</Filter>
                <DownArrow src={downArrow} alt="Down arrow" />
              </FilterDropDown>
              <AllText>All</AllText>
              
            </FilterOptionsContainer>
            <Horizontal />

            <FilterOptionsContainer>
              <FilterDropDown>
                <Filter>Pattern</Filter>
                <DownArrow src={downArrow} alt="Down arrow" />
              </FilterDropDown>
              <AllText>All</AllText>
              
            </FilterOptionsContainer>
            <Horizontal />

          </FilterContainer>

          {isLoading ? (
            <LoaderContainer>
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ margin: '20px' }}
                wrapperClass="custom-loader"
                visible={true}
              />
            </LoaderContainer>
          ) : (
            <ProductList $filterHidden={isFilterHidden}>
              {productsData.map(product => (
                <Products 
                  key={product.id} 
                  productDetails={product} 
                  filterHidden={isFilterHidden}
                />
              ))}
            </ProductList>
          )}
          {error ? <p>{error}</p> : null}
        </ProductAndFilterContainer>
    
      </Responsiveness>
    </ProductsContainer>
  )
}

export default ProductsComponents;