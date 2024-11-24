import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Types from "./components/Types";
import Services from "./components/Services";
import ProductGrid from "./components/ProductsGrid";
import Banner from "./components/Banner";
import Reviews from "./components/Reviews";
import Insta from "./components/Insta";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <Types />
      <Services />
      <ProductGrid />
      <Banner />
      <Reviews />
      <Insta />
      <Footer />
    </div>
  );
};

export default App;
