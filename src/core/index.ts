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
       const initList = new Array(9).fill(0).map((_,row)=> new Array(9).fill(0).map((_,column) => this.createCell(row,column)))
       return this.generateProblem(initList,0);
    // return initList
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
    private static generateProblem(list : CellType[][],level : number){
      const result = [...list];
      this.solve(result,0,0)
        return result;
    }
    private static solve(list : CellType[][],row : number,column : number) : boolean{
        if(column === 9){
            if(row === 8){
                return true
            }
            row += 1
            column = 0
        }
        if(list[row][column].text !== '0'){
            return this.solve(list,row,column)
        }
        const arr = ['1','2','3','4','5','6','7','8','9'];
        shuffle(arr)
        for(let i = 0; i < 9; i++){
            if(this.isValidLocation({list,row,column,value : arr[i]})){
                list[row][column].text = arr[i]
                if(this.solve(list,row,column + 1)){
                    return true
                }
            }
            list[row][column].text = '0'
        }
        return false
    }
    private static isValidLocation({list,value, row, column} : {
        list : CellType[][]
        row : number
        column : number
        value : string
    }){
        for(let i = 0; i < 9; i++){
            if(list[i][column].text === value) return false
            if(list[row][i].text === value) return false
        }
        const rowGroupStartIndex = row - (row % 3)
        const columnGroupStartIndex = column - (column % 3)
        for(let i = 0; i < 3; i++){
            for(let j =0; j < 3; j++){
                if(list[rowGroupStartIndex + i][columnGroupStartIndex + j].text === value) return false
            }
        }
        return true
    }
    private static checkDefaultBackground(row : number,column : number){
        return isMiddle(row) ? isMiddle(column) : !isMiddle(column)
    }
}


function shuffle(array : string[]) {
    array.sort(() => Math.random() - 0.5);
  }