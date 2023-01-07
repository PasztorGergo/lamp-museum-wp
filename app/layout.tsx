import "../styles/index.css";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
