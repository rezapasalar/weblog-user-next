import Link from 'next/link'

export default function TearmPrivacy () {
    return (
        <div className="flex justify-center text-xs text-gray-400 py-3">
            <span>ورود یا ثبت نام شما به معنای پذیرش</span>
            <Link href="/terms"><a className="mx-1 text-indigo-600">شرایط</a></Link>
            <span>و</span>
            <Link href="/privacy"><a className="mx-1 text-indigo-600">قوانین حریم خصوصی</a></Link>
            <span>است</span>
        </div>
    )
}