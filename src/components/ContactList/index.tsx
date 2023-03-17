import { useState } from 'react';

import './style.css'

type contactListProps = {
    children:React.ReactNode
}
export function contactList({children}:contactListProps){
    return (
        <>
            <div className="contactList">
                {children}
            </div>
        </>
    )
}