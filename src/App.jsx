import { useEffect, useState } from 'react'
import './App.css'
import Products from './components/Products';

function App() {
  const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://backend-con-express-l1c91bkfc-alexbecci.vercel.app/api/v1/products');
            const data = await response.json();
            setData(data);
            console.log(data)
        }

        fetchData();
    }, []);

    if (!data) {
        return <div>Cargando...</div>;
    }


  return (
    <div>
      <Products/>
    </div>
  );
}

export default App
