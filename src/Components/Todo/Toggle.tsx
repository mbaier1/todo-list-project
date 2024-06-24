import React, { ReactNode, useState } from "react"

export type ToggleProps = {
    id: string,
    children: ReactNode,
    toggleChildrenElements: (todoId: string, toggle: boolean) => void
}

const Toggle = ({ id: todoId, children, toggleChildrenElements }: ToggleProps) => {
    const [ toggleChilren, setToggleChildren ] = useState<boolean>(true)

    const handleToggleChildren = (): void => {
        setToggleChildren(!toggleChilren);
        toggleChildrenElements(todoId, toggleChilren);
    }


    return (
        <>
            <button onClick={handleToggleChildren}>Toggle</button>
            {toggleChilren && children}
        </>
    )
}

export default Toggle;