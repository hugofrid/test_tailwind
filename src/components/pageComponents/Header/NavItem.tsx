import React from 'react'


interface Props {
    children: React.ReactNode;
    active?: boolean
}
const NavItem = ({
    children,
    active = false
}: Props) => {
    return (
        <div className={`text-basic-100 border-primary border-0 ${active && "border-b-2"} flex flex-col justify-items-center justify-center h-full px-4 hover:bg-basic-600 hover:border-b-2 cursor-pointer`}>
            <div>{children}</div>
        </div>
    )
}

export default NavItem
