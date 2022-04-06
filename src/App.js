// import logo from './mml-logo.svg';
import './App.css';
import CollectionCard from './components/card/CollectionCard';
import Header from './components/header/Header.js';

function App() {
  return (
    <div className='app'>
      <Header />
      <CollectionCard id={0} name={ 'Punk-Bandana' } traits={[{value: 7}]} image='https://testnets.opensea.io/assets/0xae8c49f6356536085a3c7fc1419dc1f231fcc91b/0'/>
    </div>
  );
}

export default App;
