type CellPropsType = {
    isActive? : boolean
    isSelect? : boolean
    text : string
    onSelect? : () => void;
    isDefaultBackground : boolean
}
function Cell ({isActive = false, text, isSelect = false, isDefaultBackground = false, onSelect} : CellPropsType) {
    return (
        <div className={`flex justify-center items-center w-full h-full ${isSelect && "animate-ping"} ${isDefaultBackground && 'bg-slate-100'} ${isActive && "bg-teal-100"}`} onClick={onSelect}>
            {text}
        </div>
    )
}

export default Cell;