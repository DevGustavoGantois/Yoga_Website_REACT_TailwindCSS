import React from 'react';

//import data
import { navigation } from '../data';

export function Nav() {
    return (
        <nav className='ml-[70px]'>
        <ul className='flex gap-x-[42px]'>
            {navigation.map((item, index) => {
                return (
                    <li>
                        <a href={item.href}>{item.name}</a>
                    </li>
                )
            })}
        </ul> 
        </nav>
    )
}