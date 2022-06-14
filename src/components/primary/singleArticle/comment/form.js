import Button from '../../../global/elements/button'
import TextAreaElement from '../../../global/elements/textarea'

export default function CommentForm ({isShowForm, setIsShowForm}) {
    return (
        <div className={`${isShowForm ? 'block' : 'hidden'} space-y-3`}>
            <TextAreaElement placeholder="متن خود را وارد کنید" />
            <div className="text-left">
                <Button onClick={() => setIsShowForm(false)} outline color="secondary" size="md" className="ml-2">انصراف</Button>
                <Button size="md">ثبت دیدگاه</Button>
            </div>
        </div>
    )
}