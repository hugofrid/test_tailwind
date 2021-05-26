import React from 'react'

interface Props {
    user: { //à adapter par rapport au donnée connue 
        firstName: string,
        lastName: string,
        function: string,
    },
    size?: "sm" | "lg"
    active?: boolean
}
const Avatar = ({ user, active=false, size="sm" }: Props) => {
    const outerBorderColor = size==="sm" ? "border-primary border-2" : "border-blue";
    return (
        <div className={`flex rounded-full flex-row items-center justify-center overflow-hidden ${size==="sm" ? "h-10 w-10" : "h-16 w-16"} ${active ? `${outerBorderColor} border` : ""} `}>
            <div className={`flex  rounded-full  flex-col h-full w-full items-center justify-center  text-basic-100 ${size==="sm" ? "bg-basic-500 text-b1" : "bg-blue text-h3 bg-opacity-50 border-blue"} ${active ?  "border-2 border-opacity-100" : ""}`}>
               {`${user.firstName.slice(0, 1)}${user.lastName.slice(0, 1)}`}
            </div>
        </div>
    )
}

export default Avatar