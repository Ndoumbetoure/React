import React from "react";
import "./App.css";
import PhotoProfile from "./Component/profile/ProfilePhoto.js";
import FullNameComponent from "./Component/profile/FullName.js";
import AddressComponent from "./Component/profile/Address.js";
import NavComponent from "./Component/profile/Header.js";
import FooterComponent from "./Component/profile/Footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavComponent/>
        </div>
      </header>
      <body>
        <div>
          <PhotoProfile/>
          <FullNameComponent/>
          <AddressComponent/>
        </div>
      </body>
      <footer>
        <div>
          <FooterComponent/>
        </div>
      </footer>
    </div>
  );
};

export default App;
