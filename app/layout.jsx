import React from "react";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Provider from "@components/Provider";
// import Favicon from '/public/images/Metadata/favicon.ico';
import Favicon from "@public/assets/favicon.ico";

export const metadata = {
  title: "Promptopia",
  description: "Dicover & Share AI Prompts",
  icons: [{ rel: "icon", url: Favicon.src }],
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
