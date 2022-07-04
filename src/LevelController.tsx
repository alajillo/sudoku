import { useState } from 'react'
type LevelControllerPropsType = {
    range: [number, number]
    levelFn: (key: number) => void
}
function LevelController({ range, levelFn }: LevelControllerPropsType) {
    const [level, setLevel] = useState<number>(range[0])
    const levelUp = () => {
        const nextLevel = level + 1;
        if (nextLevel > range[1]) return;
        levelFn(nextLevel)
        setLevel(nextLevel)
    }
    const levelDown = () => {
        const nextLevel = level - 1;
        if (nextLevel < range[0]) return;
        levelFn(nextLevel)
        setLevel(nextLevel)
    }
    return (
        <div className='flex justify-center items-center mb-8'>
            <span className=' text-6xl mr-6' onClick={levelDown}>{"<"}</span>
            <span className=' text-3xl mr-6'>레벨 : {level}</span>
            <span className=' text-6xl' onClick={levelUp}>{">"}</span>
        </div>
    )
}

export default LevelController