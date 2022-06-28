import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import GroupForm from './group'
import ColumnGridWrap from '../wraps/columnGrid'
import SelectElement from '../elements/select'
import { getCurrentPersianYear } from '../../../modules/helperFunctions'

export default function DateBirth ({label = '', value, inputHandler, error = ''}) {

    const days = [], months = [], years = []

    const [data, setData] = useState({days: [], months: [], years: []})

    const {t, i18n: {language}} = useTranslation()

    useEffect(() => {
        [...Array(31).keys()].forEach(item => days.push({value: item + 1, label: item + 1}));
        if (language === 'fa') {
            ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'].forEach(item => months.push({value: item, label: item}));
            [...Array(Number(getCurrentPersianYear('en')) - 1300 + 1).keys()].reverse().forEach(item => years.push({value: 1300 + item, label: 1300 + item}));
        } else {
            ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].forEach(item => months.push({value: item, label: item}));
            [...Array(Number(new Date(Date.now()).getFullYear()) - 1922 + 1).keys()].reverse().forEach(item => years.push({value: 1922 + item, label: 1922 + item}));
        }

        setData({days, months, years})
    }, [])

    return (
        <GroupForm label={label} error={error ? language === 'fa' ? 'فرمت تاریخ معتبر نیست' : 'Date format is not valid' : ''}>
            <ColumnGridWrap responsive="off" cols="3" gap="3" className="z-50">
                <SelectElement value={value.day} options={data?.days} onChange={({target: {value}}) => inputHandler('day', value, 'number')} placeholder={t('fields.day')} />
                <SelectElement value={value.month} options={data?.months} onChange={({target: {value}}) => inputHandler('month', value)} placeholder={t('fields.month')} />
                <SelectElement value={value.year} options={data?.years} onChange={({target: {value}}) => inputHandler('year', value, 'number')} placeholder={t('fields.year')} />
            </ColumnGridWrap>
        </GroupForm>
    )
}