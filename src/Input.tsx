import Cell from './Cell'
type InputPropsType = {
    onSelect : (key : number) => void
}

function Input ({onSelect} : InputPropsType) {
    return (
        <li className="flex justify-evenly w-full mt-24 text-2xl">
            {
                new Array(10).fill(0)
                .map((_,index) =>
                <div key={index} className="bg-white flex justify-center items-center text-2xl" onClick={()=>onSelect(index)}>
                {index}
            </div>
                )
            }
        </li>
    )
}

export default Input;