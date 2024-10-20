import localFont from 'next/font/local';

export const SongMyung = localFont({
    src: [
        {
            path: './SongMyung-Regular.ttf',
            weight:  'Regular',
            style: 'normal',
        }
    ],
    variable: "--font-songmyung",
    fallback: ["serif"],
});
