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
        <div className={`flex justify-center text-4xl border border-zinc-800 items-center w-full h-full ${isSelect && "animate-ping"} ${isDefaultBackground && 'bg-slate-200'} ${isActive && "bg-teal-200"} ${isWrong && "text-red-400"}`} onClick={onSelect}>
            {text}
        </div>
    )
}

export default Cell;