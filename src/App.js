import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'; 
import api from `./Api`;

function App() {
  const [searchText, setSearch] = useState("");
	const [data, setData] = useState([]);
	const [goods, setGoods] = useState(data);

  useEffect(() => {
		api.getProductList().then(ans => {
			setData(ans.posts);
			setGoods(ans.posts);
		});
	}, []);

  return (
    <div className="App">
     <Header />
     <Main/>
     <Footer/>

    </div>
  );
}

export default App;





