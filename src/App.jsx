import React from "react";
import { useGlobalContext } from "./context/AppContext";
import Person from "./components/Person";

function App() {
  const { birthdays, setBirthdays } = useGlobalContext();
  return (
    <div className="min-h-screen bg-black">
      <section className="px-5 sm:px-8 flex justify-center items-center min-h-screen">
        <div className="container sm:max-w-md bg-white p-5 rounded">
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">
            {birthdays.length} birthdays today
          </h1>
          <div>
            {birthdays.map((item) => {
              return <Person key={item.id} item={item} />;
            })}
          </div>
          <button
            onClick={() => setBirthdays([])}
            className="w-full bg-black text-white rounded p-2 text-xl sm:text-2xl"
          >
            Clear All
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
