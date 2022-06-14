export default function TitleCard ({text, onClick, className: classes = ''}) {
    return (
        <div onClick={onClick} className={`flex text-md font-bold px-3 text-gray-500 dark:text-gray-200 cursor-pointer ${classes}`}>
            {text}
        </div>
    )
}