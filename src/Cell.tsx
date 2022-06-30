type CellPropsType = {
    isActive? : boolean
    isSelect? : boolean
    text : string
    onSelect? : () => void;
}
function Cell ({isActive = false, text, isSelect = false, onSelect} : CellPropsType) {
    return (
        <div className={`bg-white flex justify-center items-center border border-teal-200 w-full h-full ${isSelect && "animate-ping"} ${isActive && "bg-teal-200"}`} onClick={onSelect}>
            {text}
        </div>
    )
}

export default Cell;