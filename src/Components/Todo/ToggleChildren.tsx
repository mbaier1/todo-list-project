import React, { ReactNode, useState } from "react"

export type ToggleChildrenProps = {
    todoId: string,
    children: ReactNode,
    toggleChildrenElements: (todoId: string, toggle: boolean) => void
}

const ToggleChildren = ({ todoId, children, toggleChildrenElements }: ToggleChildrenProps) => {
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

export default ToggleChildren;