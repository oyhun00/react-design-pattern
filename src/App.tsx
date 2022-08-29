import React from "react";
import Observable from "./store/Observer/Subject";
import { Observer } from "./store/Observer/Observer";

const App: React.FC = () => {
  const handleClick = () => {
    Observable.notify("Click !");
  };

  const eventAlert: Observer = (data: String) => {
    alert(data);
  };

  const eventLogger: Observer = (data: String) => {
    console.log(data);
  };

  Observable.subscribe(eventAlert);
  Observable.subscribe(eventLogger);

  return (
    <>
      <button onClick={handleClick}>Button</button>
    </>
  );
};

export default App;
