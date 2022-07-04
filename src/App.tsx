import { useEffect, useState } from "react";
import { Sudoku, CellType } from "./core";
import Board from "./Board";
import LevelController from "./LevelController";
import Input from './Input';
function App() {
  const [cellList, setCellList] = useState<CellType[][]>([])
  useEffect(() => {
    levelChange(1)
  }, [])
  const onSelect = (row: number, column: number): void => {
    setCellList(v => Sudoku.selectCell(v, row, column))
  }
  const onInput = (value: number): void => {
    setCellList(v => Sudoku.inputCell(v, value))
  }
  const levelChange = (level: number): void => {
    const newCellList = Sudoku.init(level * 10)
    setCellList(newCellList);
  }
  return (
    <div className="flex flex-col items-center h-full">
      <h1 className=" text-4xl text-center text-zinc-700 my-2">Sudoku</h1>
      <LevelController range={[1, 10]} levelFn={levelChange} />
      <Board cellList={cellList} onSelect={onSelect} />
      <Input onInput={onInput} />
    </div>
  )
}

export default App;