import React from 'react'
import AccountCenter from './AccountCenter'
import Nav from './Nav'

const Header = () => {
    return (
        <div className="h-14 bg-basic flex justify-between">
            <Nav />
            <AccountCenter />
        </div>
    )
}

export default Header
