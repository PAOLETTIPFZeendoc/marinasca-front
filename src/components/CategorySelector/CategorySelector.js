import React from "react";
import { categories } from "../../data/categories/categories";
import {
  CategoriesContainer,
  CategoryItem,
  CategoryTitle,
  IconWrapper,
  LinkContainer,
  ListContainer,
} from "./category-selector.style";

const CategorySelector = ({ filter }) => {
  return (
    <CategoriesContainer>
      <ListContainer>
        {categories
          .filter((cat) => cat.origin.includes(filter.toLowerCase()))
          .map((category) => (
            <LinkContainer
              to={category.link}
              key={category.name}
            >
              <CategoryItem>
                <IconWrapper>
                  {category?.logo ? (
                    <img
                      style={category.style}
                      width={category?.widthCategorySelector}
                      src={category?.logoAlt || category?.logo}
                      alt={category.alt}
                    />
                  ) : (
                    category.icon
                  )}
                </IconWrapper>
                <CategoryTitle>{category.name}</CategoryTitle>
              </CategoryItem>
            </LinkContainer>
          ))}
      </ListContainer>
    </CategoriesContainer>
  );
};

export default CategorySelector;
