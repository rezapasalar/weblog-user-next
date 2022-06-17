import { getCurrentPersianYear } from '../../../../modules/helperFunctions'

export default function Footer () {
    return (
        <footer className="container-fluid bg-gray-50 dark:bg-gray-800 px-8 py-4 min-h-[60px]">
            <div className="max-w-screen-xl w-full mx-auto">
                <span className="text-gray-500 dark:text-white space-x-reverse space-x-2">
                    <span>{getCurrentPersianYear()}</span>
                    <span>تمامی حقوق محفوظ است</span>
                </span>
            </div>
        </footer>
    )
}