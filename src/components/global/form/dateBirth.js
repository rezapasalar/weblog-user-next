import { useEffect, useState, memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import GroupForm from './group'
import ColumnGridWrap from '../wraps/columnGrid'
import SelectElement from '../elements/select'
import { getCurrentPersianYear } from '../../../modules/helperFunctions'

function DateBirth ({label = '', value, error = '', inputHandler}) {

    const days = [], months = [], years = []

    const [data, setData] = useState({days: [], months: [], years: []})

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = () => language === 'fa'

    useEffect(() => {
        [...Array(31).keys()].forEach(item => days.push({value: item + 1, label: item + 1}));
        if (isLanguageFA()) {
            ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'].forEach(item => months.push({value: item, label: item}));
            [...Array(Number(getCurrentPersianYear('en')) - 1300 + 1).keys()].reverse().forEach(item => years.push({value: 1300 + item, label: 1300 + item}));
        } else {
            ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].forEach(item => months.push({value: item, label: item}));
            [...Array(Number(new Date(Date.now()).getFullYear()) - 1922 + 1).keys()].reverse().forEach(item => years.push({value: 1922 + item, label: 1922 + item}));
        }

        setData({days, months, years})
    }, [])

    return (
        <GroupForm label={label} error={error ? isLanguageFA() ? 'فرمت تاریخ معتبر نیست' : 'Date format is not valid' : ''}>
            <ColumnGridWrap responsive="off" cols="3" gap="3" className="z-50">
                <SelectElement value={value.day} options={data?.days} onChange={useCallback(({target: {value}}) => inputHandler('day', value, 'number'), [])} placeholder={t('fields.day')} />
                <SelectElement value={value.month} options={data?.months} onChange={useCallback(({target: {value}}) => inputHandler('month', value), [])} placeholder={t('fields.month')} />
                <SelectElement value={value.year} options={data?.years} onChange={useCallback(({target: {value}}) => inputHandler('year', value, 'number'), [])} placeholder={t('fields.year')} />
            </ColumnGridWrap>
        </GroupForm>
    )
}

DateBirth.propTypes = {
    label: PropTypes.string,
    value: PropTypes.any.isRequired,
    error: PropTypes.string,
    inputHandler: PropTypes.func.isRequired
}

export default memo(DateBirth)