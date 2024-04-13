import React, { lazy, Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import { selectCurrentUser } from "../../redux/reducers/User/selector";
import CategorySelector from "../CategorySelector/CategorySelector";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import LocalMessage from "../LocalMessage/LocalMessage";
import Copyright from "../Copyright";
import {
  CategoriesContainer,
  CategoryItem,
  CategoryTitle,
  LinkContainer,
  ListContainer,
} from "../CategorySelector/category-selector.style";

const Login = lazy(() => import("../../pages/Login/Login"));
const ProductsPage = lazy(() =>
  import("../../pages/ProductsPage/ProductsPage"),
);
const App = () => {
  const user = useSelector(selectCurrentUser);
  const [loading, setLoading] = useState(false);
  const [locationSelector, setLocationSelector] = useState("");
  const possibleLocation = ["Restaurant", "Bar"];

  return (
    <div
      style={{
        margin: "0 0 25px 0",
      }}
    >
      <Header />
      <LocalMessage />
      <CategoriesContainer>
        <ListContainer>
          {possibleLocation.map((loc) => (
            <LinkContainer>
              <CategoryItem onClick={() => setLocationSelector(loc)}>
                <CategoryTitle>{loc}</CategoryTitle>
              </CategoryItem>
            </LinkContainer>
          ))}
        </ListContainer>
      </CategoriesContainer>
      {locationSelector && <CategorySelector filter={locationSelector} />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path='/'
            element={
              <ProductsPage
                loading={loading}
                setLoading={setLoading}
              />
            }
          >
            <Route
              path={`products/:category`}
              element={
                <ProductsPage
                  loading={loading}
                  setLoading={setLoading}
                />
              }
            />
          </Route>
          <Route
            path='connexion'
            element={
              user ? (
                <Navigate
                  replace
                  to='/'
                />
              ) : (
                <Login
                  loading={loading}
                  setLoading={setLoading}
                />
              )
            }
          />
        </Routes>
      </Suspense>
      <Copyright />
    </div>
  );
};

export default App;
