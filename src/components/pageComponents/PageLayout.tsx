
import React from 'react'
import Header from './Header/Header'

interface Props {
    children:React.ReactNode
}
const PageLayout = ({children}:Props) => {
    return (
        <div className="bg-gradient-1 h-full">
            <Header/>
            {children}
        </div>
    )
}

export default PageLayout
