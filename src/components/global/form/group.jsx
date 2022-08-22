import LabelElement from '../elements/label'
import ErrorElement from './error'

export default function FormGroup ({children, label, error = '', alert = null}) {
    return (
        <div className="mb-5">
            <LabelElement text={label} alert={alert} />
            {children}
            <ErrorElement message={error} />
        </div>
    )
}