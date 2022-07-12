import { useTranslation } from 'react-i18next'
import { Sidebar, FlexItemSidebar } from '../../../global/sidebar'

export default function ArticleType () {

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = () => language === 'fa'

    return (
        <Sidebar title={t('articlesPage.articleType')}>
            <FlexItemSidebar label={Number('17').toLocaleString(language)}>{isLanguageFA() ? 'رایگان' : 'Free'}</FlexItemSidebar>
            <FlexItemSidebar label={Number('73').toLocaleString(language)}>{isLanguageFA() ? 'فقط نقدی' : 'Cash Only'}</FlexItemSidebar>
            <FlexItemSidebar label={Number('89').toLocaleString(language)}>{isLanguageFA() ? 'نقدی و اعضای ویژه' : 'ُSpecial Members'}</FlexItemSidebar>
        </Sidebar>
    )
}