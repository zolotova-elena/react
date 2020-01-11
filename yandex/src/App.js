import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TopContent from "./TopContent";
import SearchEngine from "./SearchEngine";
import AdvertisingBody from "./AdvertisingBody";
import Widgets from "./Widgets";

function App() {
  let data = {
      topContent : {},
      searchEngine : {},
      advertisingBody : {},
      widgets : {}
  };
  return (
    <div className="App">
        <TopContent topContent={data.topContent}/>
        <SearchEngine searchEngine={data.searchEngine}/>
        <AdvertisingBody advertisingBody={data.advertisingBody}/>
        <Widgets widgets={data.widgets}/>
    </div>
  );
}

export default App;
