import React from "react";
import { useGlobalContext } from "./context/AppContext";
import Person from "./components/Person";

function App() {
  const { birthdays, setBirthdays } = useGlobalContext();
  return (
    <div>
      <section>
        <div>
          <h1>{birthdays.length} birthdays today</h1>
          <div>
            {birthdays.map((item) => {
              return <Person key={item.id} item={item} />;
            })}
          </div>
          <button onClick={() => setBirthdays([])}>Clear All</button>
        </div>
      </section>
    </div>
  );
}

export default App;
