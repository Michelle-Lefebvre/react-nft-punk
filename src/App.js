// import logo from './mml-logo.svg';
import "./App.css";
// import CollectionCard from './components/card/CollectionCard';
import Header from "./components/header/Header.js";
import { useState, useEffect } from "react";
import axios from "axios";
import Punklist from "./components/card/Punklist";
import Main from "./components/Main.js";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xaE8c49F6356536085a3C7fc1419dc1f231Fcc91b&order_direction=asc" //  contract_address is collection id , not wallet
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    getMyNfts();
  }, []);

  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <Punklist
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
