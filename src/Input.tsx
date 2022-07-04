type InputPropsType = {
    onInput: (key: number) => void
}

function Input({ onInput }: InputPropsType) {
    return (
        <li className="flex justify-evenly w-full max-w-screen-sm">
            {
                new Array(9).fill(0)
                    .map((_, index) =>
                        <div key={index} className=" shadow-md rounded-md p-2 flex justify-center items-center text-2xl" onClick={() => onInput(index + 1)}>
                            {index + 1}
                        </div>
                    )
            }
        </li>
    )
}

export default Input;