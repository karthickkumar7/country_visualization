import Link from 'next/link';

export default function Home() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <ul className="max-w-[1200px] mt-24 mx-auto text-2xl font-semibold space-y-4">
                <li>
                    <Link href={'/country'}>countries</Link>
                </li>
                <li>
                    <Link href={'/india'}>india</Link>
                </li>
            </ul>
        </div>
    );
}
