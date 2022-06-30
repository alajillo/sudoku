export type CellType = {
    text : string
    isActive : boolean
    isSelect : boolean
    isWrong : boolean
    isDefaultBackground : boolean
}

function isMiddle(index : number){
    return index > 2 && index < 6
}

export class Sudoku{
    public static init(){
       return   new Array(9).fill(0).map((_,row)=> new Array(9).fill(0).map((_,column) => this.createCell(row,column)))
    }
    private static createCell(row : number,column : number) : CellType{
        return {
            text : '0',
            isActive : false,
            isSelect : false,
            isWrong : false,
            isDefaultBackground : this.checkDefaultBackground(row,column)
        }
    }
    public static selectCell(list : CellType[][], row : number,column : number){
            return list.map((rows,rowIndex) => rows.map((cell,columnIndex) => {
                return {
                    ...cell,
                    isSelect : rowIndex === row && columnIndex === column,
                    isActive : rowIndex === row || columnIndex === column,
                }
            }))
    }
    public static inputCell(list : CellType[][], value : number){
        return list.map((rows) => rows.map((cell) => {
            return {
                ...cell,
                isSelect : false,
                isActive : false,
                text : cell.isSelect ? String(value) : cell.text
            }
        }))
    }
    private static checkDefaultBackground(row : number,column : number){
        return isMiddle(row) ? isMiddle(column) : !isMiddle(column)
    }
}