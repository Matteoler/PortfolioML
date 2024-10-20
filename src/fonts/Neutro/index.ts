import localFont from 'next/font/local';

export const neutro = localFont({
    src: [
        {
            path: './Neutro-Bold.otf',
            weight:  'Bold',
            style: 'normal',
        }
    ],
    variable: "--font-neutro",
    fallback: ["serif"],
});
