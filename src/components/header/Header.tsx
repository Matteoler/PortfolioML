'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const linkClassName = "relative font-bold after:h-2 after:bg-DarkBlue after:absolute after:left-0 after:right-0 after:w-auto after:-bottom-6";
const links = [
    { href: '/', label: 'Accueil' },
    { href: '/univers', label: 'Découvrer mon univers' },
    { href: '/projets', label: 'Mes Projets' },
    { href: '/parcours', label: 'Mon Parcours' },
    { href: '/contact', label: 'Contact' },
];

export const Header = () => {
    const pathname = usePathname();

    return (
        <nav className="span-w-8 m-auto py-16">
            <ul className="flex justify-between font-SegoeUI">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link className={pathname === link.href ? linkClassName : ''} href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}