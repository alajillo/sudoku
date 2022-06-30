import Cell from "./Cell";
import {CellType} from './core'
type BoardPropsType = {
    cellList : CellType[][]
    onSelect : (row: number, column : number) => void
}
function Board({cellList, onSelect} : BoardPropsType) {
    return (
        <div className="grid  border border-zinc-800 gap-0 grid-cols-9 grid-rows-9 w-[400px] h-[400px] m-0">
            {
                cellList
                .flatMap((cellRow,rowIndex) => 
                    cellRow.map((cell,cellIndex)=><Cell key={`${cellIndex}/${rowIndex}`} isActive={cell.isActive} text={cell.text} isSelect={cell.isSelect} isDefaultBackground={cell.isDefaultBackground} isWrong={cell.isWrong} onSelect={()=> onSelect(rowIndex,cellIndex) }/>)
                )
            }
        </div>
    )
}

export default Board;