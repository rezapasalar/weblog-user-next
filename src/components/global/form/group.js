import LabelElement from '../elements/label'
import ErrorElement from './error'

export default function GroupForm ({children, label, error}) {
    return (
        <div className="mb-5">
            <LabelElement text={label} />
            {children}
            <ErrorElement text={error} />
        </div>
    )
}