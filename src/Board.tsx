import Cell from "./Cell";
import { CellType } from './core'
type BoardPropsType = {
    cellList: CellType[][]
    onSelect: (row: number, column: number) => void
}
const SCREEN_WIDTH = window.innerWidth

function Board({ cellList, onSelect }: BoardPropsType) {
    return (
        <div style={{
            width: SCREEN_WIDTH - 10,
            height: SCREEN_WIDTH - 10,
            maxWidth: 600,
            maxHeight: 600,
        }} className="grid  border border-zinc-800 gap-0 grid-cols-9 grid-rows-9 mb-8">
            {
                cellList
                    .flatMap((cellRow, rowIndex) =>
                        cellRow.map((cell, cellIndex) => <Cell key={`${cellIndex}/${rowIndex}`} isActive={cell.isActive} text={cell.text} isSelect={cell.isSelect} isDefaultBackground={cell.isDefaultBackground} isWrong={cell.isWrong} onSelect={() => onSelect(rowIndex, cellIndex)} />)
                    )
            }
        </div>
    )
}

export default Board;