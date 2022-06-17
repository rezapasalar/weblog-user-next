export default function ArticleKind () {
    return (
        <div className="bg-white dark:bg-gray-800 md:rounded-xl text-gray-500 dark:text-gray-300 shadow-md p-5">
            <span className="text-gray-500 dark:text-gray-100 text-xl font-bold">نوع مقاله</span>

            <div className="mt-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex">
                        <div className="bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ml-3"></div>
                        <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">رایگان</label>
                    </div>
                    <span className="text-gray-400">{Number('17').toLocaleString('fa-IR')}</span>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <div className="flex">
                        <div className="bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ml-3"></div>
                        <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">فقط نقدی</label>
                    </div>
                    <span className="text-gray-400">{Number('73').toLocaleString('fa-IR')}</span>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <div className="flex">
                        <div className="bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ml-3"></div>
                        <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">نقدی و اعضای ویژه</label>
                    </div>
                    <span className="text-gray-400">{Number('89').toLocaleString('fa-IR')}</span>
                </div>
            </div>
        </div>
    )
}