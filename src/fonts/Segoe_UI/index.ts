import localFont from 'next/font/local';

export const Segoe_UI = localFont({
    src: [
        {
            path: './segoeui.ttf',
            weight:  'regular',
            style: 'normal',
        }
    ],
    variable: "--font-segoeui",
    fallback: ["serif"],
});
