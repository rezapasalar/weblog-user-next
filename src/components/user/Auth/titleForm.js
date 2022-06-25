import { useRouter } from 'next/router'
import LogoSvg from '../../global/svg/logo'

export default function TitleForm ({title}) {

    const router = useRouter()

    return (
        <>
            <LogoSvg onClick={() => router.push('/')} className="h-16 w-16 mx-auto" />
            <h4 className="text-xl text-center text-gray-500/90 mb-7">{title}</h4>
        </>
    )
}