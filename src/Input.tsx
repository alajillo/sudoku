type InputPropsType = {
    onInput : (key : number) => void
}

function Input ({onInput} : InputPropsType) {
    return (
        <li className="flex justify-evenly w-full mt-24 text-2xl">
            {
                new Array(10).fill(0)
                .map((_,index) =>
                <div key={index} className="bg-white flex justify-center items-center text-2xl" onClick={()=>onInput(index)}>
                {index}
            </div>
                )
            }
        </li>
    )
}

export default Input;