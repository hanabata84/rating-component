import Rating from "./Rating";

function App() {
  return (
    <div className="App">
      <div className="h-[100vh] bg-bgBlue flex justify-center items-center">
        <div className='h-[450px] w-[450px] bg-componentImage bg-no-repeat bg-contain'>
          <Rating />
        </div>
      </div>
    </div>
  );
}

export default App;
