export type CellType = {
    text : string,
    isActive : boolean,
    isSelect : boolean,
}


export class Sudoku{
    public static init() : CellType[][]{
       return   new Array(9).fill(0).map(row=> new Array(9).fill(0).map(this.createCell))
    }
    private static createCell() : CellType{
        return {
            text : '0',
            isActive : false,
            isSelect : false
        }
    }
    public static selectCell(list : CellType[][], row : number,column : number) : CellType[][] {
            return list.map((rows,rowIndex) => rows.map((cell,columnIndex) => {
                return {
                    ...cell,
                    isSelect : rowIndex === row && columnIndex === column,
                    isActive : rowIndex === row || columnIndex === column,
                }
            }))
    }
    public static inputCell(list : CellType[][], value : number) : CellType[][] {
        return list.map((rows) => rows.map((cell) => {
            return {
                ...cell,
                isSelect : false,
                isActive : false,
                text : cell.isSelect ? String(value) : cell.text
            }
        }))
    }
}
