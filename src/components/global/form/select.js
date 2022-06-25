import GroupForm from './group'
import SelectElement from '../elements/select'

export default function SelectForm ({label = '', options, value, keyname, type = 'string', inputHandler, error = ''}) {
    return (
        <GroupForm label={label} error={error}>
            <SelectElement value={value} keyname={keyname} type={type} options={options} inputHandler={inputHandler} />
        </GroupForm>
    )
}