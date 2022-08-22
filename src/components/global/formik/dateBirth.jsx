import { useTranslation } from 'react-i18next'
import { ColumnGridWrap, InputFormik } from '.'

export default function DateBirthFormik () {

    const {t} = useTranslation()

    return (
        <ColumnGridWrap cols="3" gap="3">
            <InputFormik type="number" label={t('fields.day')} name="day" dir="ltr" />
            <InputFormik type="number" label={t('fields.month')} name="month" dir="ltr" />
            <InputFormik type="number" label={t('fields.year')} name="year" dir="ltr" />
        </ColumnGridWrap>
    )
}