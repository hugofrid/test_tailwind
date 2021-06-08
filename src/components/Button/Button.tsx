import React from 'react'

import cx from 'classnames'
import classNames from 'classnames'
export interface Props { 
    children:React.ReactNode,
    icon?:string,
    type?:'default' | 'outline' | 'flat',
    size?:'xl' | 'lg' | 'md' | 'sm',
    iconPosition?:'left' | 'right',
    className?:string
    disabled?:boolean
};

const Button = ({
    children,
    icon,
    type='default',
    size='md',
    iconPosition='left',
    className="",
    disabled=false

}:Props) => {

    // const btnClass = classNames()
    return (
        <>
        <button 
        disabled={disabled} 
        className={` 
        rounded-md
        btn-${size} 
        ${
            type==="default" ? 
            `
            text-basic-100 bg-basic-700
            hover:bg-basic-600 disabled:bg-basic-300 
            `
            : ` bg-transparant text-basic-700 
            hover:text-basic-600 disabled:text-basic-300
            `
        }
        ${
            type==="outline" ? 
            ` border-2 border-basic-700 
            hover:border-basic-600 disabled:border-basic-300
            `
            : ""
        }
       

        ${icon ? `btn-icon-${iconPosition}`: ""}  ${className}`}>
            {children}
        </button >
        <button disabled={disabled} className={`btn btn-${size} btn-${type} ${icon ? `btn-icon-${iconPosition}`: ""}  ${className}`}>
            {children}
        </button >
        </>
    )
}

export default Button
