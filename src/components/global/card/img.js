export default function ImgCard ({src, onClick, className: classes = ''}) {
    return (
        <div className="relative md:rounded-t-lg overflow-hidden">
            <img onClick={onClick} src={src} className={`w-full h-52 object-cover hover:scale-110 transition cursor-pointer ${classes}`} />
        </div>
    )
}