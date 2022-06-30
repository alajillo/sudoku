type CellPropsType = {
    isActive? : boolean
    isSelect? : boolean
    text : string
    onSelect? : () => void;
    isDefaultBackground : boolean
}
function Cell ({isActive = false, text, isSelect = false, isDefaultBackground = false, onSelect} : CellPropsType) {
    return (
        <div className={`flex justify-center items-center w-full h-full ${isSelect && "animate-ping"} ${isActive && "bg-teal-100"} ${isDefaultBackground && !isActive ? 'bg-slate-100':'bg-white'}`} onClick={onSelect}>
            {text}
        </div>
    )
}

export default Cell;