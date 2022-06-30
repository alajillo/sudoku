import Cell from "./Cell";

type BoardPropsType = {
    size : number
}
function Board({size} : BoardPropsType) {
    const randomBolean = () => Math.floor((Math.random() * 10)) % 2 === 0 ? true : false
    return (
        <div className="grid gap-1 grid-cols-9 grid-rows-9 w-[400px] h-[400px] m-0">
            {
                new Array(Math.pow(size,2)).fill(0)
                .map((_,index) => 
                    <Cell key={index} isActive={randomBolean()} text={String(index + 1)} isSelect={randomBolean()}/>
                )
            }
        </div>
    )
}

export default Board;