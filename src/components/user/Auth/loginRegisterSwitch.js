import { useRouter } from 'next/router'

export default function LoginRegister ({to = 'login'}) {

    const router = useRouter()

    return (
        <div className="flex justify-center text-sm text-gray-400 text-center space-x-reverse space-x-1 mt-4">
            <span>برای {to === 'login' ? 'ورود به پنل' : 'ثبت نام'} به لینک </span>
            <span onClick={() => router.push(`/auth/${to === 'login' ? 'login' : 'register'}`)} className="text-indigo-600 cursor-pointer">{to === 'login' ? 'ورود' : 'ثبت نام'}</span>
            <span>بروید</span>
        </div>
    )
}