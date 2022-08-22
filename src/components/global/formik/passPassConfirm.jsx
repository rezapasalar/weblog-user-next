import PropTypes from 'prop-types'
import { ColumnGridWrap, InputFormik } from '.'

function PassPassConfirm ({cols = "2", gap = "3"}) {
    return (
        <ColumnGridWrap cols={cols} gap={gap}>
            <InputFormik type="password" name="password" dir="ltr" />
            <InputFormik type="password" name="passwordConfirmation" dir="ltr" />
        </ColumnGridWrap>
    )
}

PassPassConfirm.propTypes = {
    cols: PropTypes.string,
    gap: PropTypes.string,
}

export default PassPassConfirm