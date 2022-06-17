import Link from 'next/link'
import { useRouter } from 'next/router';

export default function SimpleNavLink ({href, label, onClick = null}) {

    const router = useRouter();

    return (
        <Link href={href}>
            <a onClick={onClick} className={`${router.pathname == href ? '!border-indigo-700 bg-gray-200/50 dark:bg-gray-700/80' : ''} block lg:inline-flex lg:items-center px-2 py-4 lg:py-1 border-l-4 border-b-0 lg:border-l-0 lg:border-b-2 border-transparent text-sm text-gray-500 dark:text-gray-200 hover:border-indigo-700/20 dark:hover:border-indigo-700/20 transition`}>
                {label}
            </a>
        </Link>
    )
}