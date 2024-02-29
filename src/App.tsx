import UserCard from "./components/UserCard";
import ProductList from "./components/ProductsList";

const App = () => {
  return (
    <div className="main">
      <div className="content">
        <UserCard />
        <ProductList />
      </div>
    </div>
  );
};

export default App;
