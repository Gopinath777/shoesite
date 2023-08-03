import React , {useState} from 'react';
import './App.css';
import Header from './header';
import MainPage from './mainPage';

function App() {
  const [products ,setProducts] = useState(0);
  const showCartValue=(mainproduct)=>{
    if(mainproduct>0){
      setProducts(mainproduct)
    }else { 
      return null ;
    }
  }
  
  return (
    <div className="App">
     <Header products={products} showCartValue={products} />
     <MainPage products={products} setProducts={setProducts} showCartValue={showCartValue}/>
    </div>
  );
}

export default App;

