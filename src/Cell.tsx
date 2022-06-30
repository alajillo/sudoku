type CellPropsType = {
    text : string
    isActive : boolean
    isSelect : boolean
    isWrong : boolean
    onSelect? : () => void
    isDefaultBackground : boolean
}
function Cell ({isWrong = false, isActive = false, text, isSelect = false, isDefaultBackground = false, onSelect} : CellPropsType) {
    return (
        <div className={`flex justify-center text-3xl items-center w-full h-full ${isSelect && "animate-ping"} ${isDefaultBackground && 'bg-slate-100'} ${isActive && "bg-teal-100"} ${isWrong && "text-red-400"}`} onClick={onSelect}>
            {text}
        </div>
    )
}

export default Cell;