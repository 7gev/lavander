import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'; 
import api from './Api';
import Post from './components/Post/Post';

function App() {
 
	const [data, setData] = useState([]);
	const [goods, setGoods] = useState(data);

  useEffect(() => {
		api.getProductList().then(ans => {
			setData(ans);
			setGoods(ans);
      console.log(ans);
		});
	}, []);

  return (
    <div className="App">
     <Header />
     <Main/>
     <div className='conter'>
     {goods.map(el => <Post title={el.title} img={el.image} key={el._id}/>)}
     
     </div>
     <Footer/>

    </div>
  );
}

export default App;





