import Board from "./Board";
import Input from './Input';
function App () {
  return (
    <>
    <h1 className=" text-3xl m-3 text-center text-zinc-700">Sudoku</h1>
    <div className="flex justify-center items-center w-full h-full mt-16 flex-col">
    <Board size={9}/>
    <Input onSelect={(key : number) => {
      console.log(key)
    }}/>
    </div>
    </>
  )
}

export default App;