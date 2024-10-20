import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <nav className='span-w-8 m-auto'> 
        <ul className='flex justify-between font-SongMyung'>
            <li><Link href='/'>Accueil</Link></li>
            <li><Link href='/'>Découvrer mon univers</Link></li>
            <li><Link href='/'>Mes Projets</Link></li>
            <li><Link href='/'>Mon Parcours</Link></li>
            <li><Link href='/'>Contact</Link></li>
        </ul>
    </nav>
  )
}
