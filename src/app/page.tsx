import Link from 'next/link';

export default function Home() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <ul className="max-w-[1200px] mx-auto">
                <li>
                    <Link href={'/country'}>countries</Link>
                </li>
                <li>
                    <Link href={'/country/visualize'}>visualize</Link>
                </li>
            </ul>
        </div>
    );
}
