import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { ColumnGridWrap, InputFormik } from '.'

function NameFamily ({cols = "2", gap = "3"}) {

    const {i18n: {language}} = useTranslation()

    const getDir = () => language === 'fa' ? 'rtl' : 'ltr'

    return (
        <ColumnGridWrap cols={cols} gap={gap}>
            <InputFormik name="name" dir={getDir()} />
            <InputFormik name="family" dir={getDir()} />
        </ColumnGridWrap>
    )
}

NameFamily.propTypes = {
    cols: PropTypes.string,
    gap: PropTypes.string,
}

export default NameFamily