type CellPropsType = {
    isActive? : boolean
    isSelect? : boolean
    text : string
    onSelect? : () => void;
    isDefaultBackground : boolean
}
function Cell ({isActive = false, text, isSelect = false, isDefaultBackground = false, onSelect} : CellPropsType) {
    return (
        <div className={`${isDefaultBackground ? 'bg-slate-200':'bg-white'} flex justify-center items-center border border-teal-200 w-full h-full ${isSelect && "animate-ping"} ${isActive && "bg-teal-100"}`} onClick={onSelect}>
            {text}
        </div>
    )
}

export default Cell;