import { useEffect, useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Loading from "./components/Loading";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://backend-con-express-l1c91bkfc-alexbecci.vercel.app/api/v1/products"
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((product) => {
            return (
              <>
                <Products
                  name={product.name}
                  image={product.image}
                  price={product.price}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
