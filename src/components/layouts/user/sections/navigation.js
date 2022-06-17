import SimpleNavLink from './navLinks/simple'

export default function Navigation ({isShowMenu, setIsShowMenu}) {
    return (
        <div className={`${isShowMenu ? 'block' : 'hidden'} lg:flex lg:flex-wrap my-4 md:my-0 w-full min-h-[60px]`}>
            <SimpleNavLink href="/" label="صفحه اصلی" onClick={() => setIsShowMenu(false)} />
            <SimpleNavLink href="/articles" label="مقالات" onClick={() => setIsShowMenu(false)} />
            <SimpleNavLink href="/about-us" label="درباره ما" onClick={() => setIsShowMenu(false)} />
            <SimpleNavLink href="/contact-us" label="ارتباط با ما" onClick={() => setIsShowMenu(false)} />

            <div className="block md:hidden">
                <SimpleNavLink href="/auth/login" label="ورود | ثبت نام" onClick={() => setIsShowMenu(false)} />
                <SimpleNavLink href="/panel" label="پنل کاربری" onClick={() => setIsShowMenu(false)} />
                <SimpleNavLink href="/panel/setting" label="تنظیمات" onClick={() => setIsShowMenu(false)} />
            </div>
        </div>
    )
}