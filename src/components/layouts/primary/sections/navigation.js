import SimpleNavLink from './navLinks/simple'

export default function Navigation ({isShowMenu, setIsShowMenu}) {
    return (
        <div className={`${isShowMenu ? 'block' : 'hidden'} md:flex md:flex-wrap my-4 md:my-0 w-full min-h-[60px]`}>
            <SimpleNavLink href="/" label="صفحه اصلی" onClick={() => setIsShowMenu(false)} />
            <SimpleNavLink href="/about-us" label="درباره ما" onClick={() => setIsShowMenu(false)} />
            <SimpleNavLink href="/contact-us" label="ارتباط با ما" onClick={() => setIsShowMenu(false)} />
        </div>
    )
}