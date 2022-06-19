export default function RecentArticles () {
    return (
        <div className="bg-white dark:bg-gray-800 md:rounded-xl text-gray-500 dark:text-gray-300 shadow-md">
            <div className="text-gray-500 dark:text-gray-100 text-xl font-bold p-5">مقالات اخیر</div>

            <div className="pb-5">
                <div className="bg-gray-50 dark:bg-gray-900/20 hover:bg-gray-100 dark:hover:bg-gray-900/50 px-5 py-2">
                    <p className="text-gray-400 text-base font-medium cursor-pointer">صفحه‌آرایی و طراحی گرافیک</p>
                </div>

                <div className="hover:bg-gray-100 px-5 dark:hover:bg-gray-900/50 py-2">
                    <p className="text-gray-400 text-base font-medium cursor-pointer">صفحه‌بندی را به پایان برند</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/20 hover:bg-gray-100 dark:hover:bg-gray-900/50 px-5 py-2">
                    <p className="text-gray-400 text-base font-medium cursor-pointer">آزمایشی و بی‌معنی در صنعت</p>
                </div>

                <div className="hover:bg-gray-100 px-5 dark:hover:bg-gray-900/50 py-2">
                    <p className="text-gray-400 text-base font-medium cursor-pointer">از آنجایی که طراحان عموما</p>
                </div>
            </div>
        </div>
    )
}