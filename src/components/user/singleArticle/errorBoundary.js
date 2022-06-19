import { useRouter } from 'next/router'
import Alert from '../../../components/global/elements/alert'
import RefreshSvg from '../../../components/global/svg/refresh'

export default function ErrorBoundary ({isError}) {

    const router = useRouter()

    return (
        <>
            {
                isError !== 404
                    ? 
                        <Alert className="flex space-x-reverse space-x-2">
                            <span>خطایی رخ داده, مجدد تلاش کنید</span>
                            <RefreshSvg onClick={() => router.reload()} className="h-6 w-6 text-indigo-500 cursor-pointer" />
                        </Alert>
                    : 
                        <Alert>چنین مقاله ای یافت نشد</Alert>
            }
        </>
    )
}