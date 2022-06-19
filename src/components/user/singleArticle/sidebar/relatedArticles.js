export default function RelatedArticles () {
    return (
        <div className="bg-white dark:bg-gray-800 md:rounded-xl text-gray-500 dark:text-gray-300 shadow-md">
            <div className="text-gray-500 dark:text-gray-100 text-xl font-bold p-5">مقالات مرتبط</div>

            <div className="pb-5">
                <div className="bg-gray-50 dark:bg-gray-900/20 hover:bg-gray-100 dark:hover:bg-gray-900/50 px-5 py-2">
                    <p className="text-gray-400 text-sm font-medium cursor-pointer">سفارش گرفته شده استفاده</p>
                </div>

                <div className="hover:bg-gray-100 px-5 dark:hover:bg-gray-900/50 py-3">
                    <p className="text-gray-400 text-sm font-medium cursor-pointer">حق تکثیر متون را ندارند و</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/20 hover:bg-gray-100 dark:hover:bg-gray-900/50 px-5 py-2">
                    <p className="text-gray-400 text-sm font-medium cursor-pointer">تا از نظر گرافیکی نشانگر</p>
                </div>

                <div className="hover:bg-gray-100 px-5 dark:hover:bg-gray-900/50 py-3">
                    <p className="text-gray-400 text-sm font-medium cursor-pointer">طراح گرافیک از این متن</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/20 hover:bg-gray-100 dark:hover:bg-gray-900/50 px-5 py-2">
                    <p className="text-gray-400 text-sm font-medium cursor-pointer">حق تکثیر متون را ندارند</p>
                </div>

                <div className="hover:bg-gray-100 px-5 dark:hover:bg-gray-900/50 py-3">
                    <p className="text-gray-400 text-sm font-medium cursor-pointer">ظاهر متن باشد. معمولا طراحان</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/20 hover:bg-gray-100 dark:hover:bg-gray-900/50 px-5 py-2">
                    <p className="text-gray-400 text-sm font-medium cursor-pointer">با استفاده از محتویات ساختگی</p>
                </div>
            </div>
        </div>
    )
}