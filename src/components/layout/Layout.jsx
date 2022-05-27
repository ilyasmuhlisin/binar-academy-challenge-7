import React from "react";
import Footer from "../footer/Footer";
import NavigationBar from "../navbar/NavigationBar";

export default function Layout({ children }) {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
}
