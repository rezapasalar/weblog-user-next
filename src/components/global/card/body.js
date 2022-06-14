export default function BodyCard ({children, text, onClick, className: classes = ''}) {
    return (
        <div onClick={onClick} className={`flex text-md font-bold px-3 text-gray-400 h-34 text-justify text-sm leading-7 cursor-pointer ${classes}`}>
            {text || children}
        </div>
    )
}