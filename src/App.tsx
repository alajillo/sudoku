import { useEffect, useState } from "react";
import {Sudoku, CellType} from "./core";
import Board from "./Board";
import Input from './Input';
function App () {
  const [cellList, setCellList] = useState<CellType[][]>([])
  useEffect(()=>{
    const cellList = Sudoku.init();
    setCellList(cellList);
  },[])
  const onSelect = (row : number ,column : number) : void => {
    setCellList(v=> Sudoku.selectCell(v,row,column))
  }
  const onInput = (value : number) : void => {
    setCellList(v => Sudoku.inputCell(v,value))
  }
  return (
    <>
    <h1 className=" text-3xl m-3 text-center text-zinc-700">Sudoku</h1>
    <div className="flex justify-center items-center w-full h-full mt-16 flex-col">
    <Board cellList={cellList} onSelect={onSelect}/>
    <Input onInput={onInput}/>
    </div>
    </>
  )
}

export default App;