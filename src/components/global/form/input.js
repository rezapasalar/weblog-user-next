import GroupForm from './group'
import InputElement from '../elements/input'

export default function InputForm ({label = '', keyname, inputHandler, value = '', error = '', type = 'text', dir = 'rtl', placeholder = ''}) {
    return (
        <GroupForm label={label} error={error}>
            <InputElement type={type} dir={dir} value={value} onChange={({target: {value}}) => inputHandler(keyname, value)} placeholder={placeholder} />
        </GroupForm>
    )
}