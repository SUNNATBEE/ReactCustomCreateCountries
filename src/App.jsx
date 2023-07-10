import Form from "./Component/Form/Form";
import Header from "./Component/Header/Header";
import Card from "./Component/Card/Card";
import { Countries } from "./constants";

const App = () => {
  return (
    <>
      <Header />
      <Form />
      <div className="container">
        <ul className="d-flex flex-wrap justify-content-between list-unstyled">
          {Countries.map((item) => {
            return (
              <Card
                cardImg={item.flags.png}
                name={item.name}
                population={item.population}
                capital={item.capital}
                region={item.region}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default App;
