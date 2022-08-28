import Rating from "./components/Rating";
import RateComplete from "./components/RateComplete";
import { useState } from "react";

function App() {
  const style = {
    body: `h-[100vh] bg-bgBlue flex justify-center items-center`,
    container: `h-[450px] w-[450px] bg-componentImage bg-no-repeat bg-contain`
  }

  const [rateSubmit, setRateSubmit] = useState(false)

  function handleSubmit() {
    setRateSubmit(true)
  }
  return (
    <div className="App">
      <div className={style.body}>
        <div className={style.container}>
          {rateSubmit ? <RateComplete /> : <Rating handleSubmit={handleSubmit} />}

        </div>
      </div>
    </div>
  );
}

export default App;
