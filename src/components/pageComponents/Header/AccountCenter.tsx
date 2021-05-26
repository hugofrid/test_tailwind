import React from 'react'
import Avatar from '../../Avatar/Avatar'

const AccountCenter = () => {
    return (
        <div>
            <Avatar user={{firstName:"Jean",lastName:"Reno",function:"Adminitstrator"}}/>
            <Avatar active user={{firstName:"Jean",lastName:"Reno",function:"Adminitstrator"}}/>
            <Avatar size="lg" user={{firstName:"Jean",lastName:"Reno",function:"Adminitstrator"}}/>
            <Avatar size="lg" active user={{firstName:"Jean",lastName:"Reno",function:"Adminitstrator"}}/>
        </div>
    )
}

export default AccountCenter
