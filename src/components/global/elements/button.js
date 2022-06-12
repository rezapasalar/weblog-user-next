export default function Button ({children, onClick = null, type = 'button', size = 'lg', color = 'primary', widthFull = false, className: classes = ''}) {

    const getSize = () => {
        switch (size) {
            case 'xs' : return 'text-xs px-2 py-1'
            case 'sm' : return 'text-sm px-2 py-1'
            case 'md' : return 'text-md px-4 py-2'
            case 'lg' : return 'text-lg px-5 py-3'
            case 'xl' : return 'text-xl px-5 py-3'
        }
    }

    const getColor = () => {
        switch (color) {
            case 'primary' : return 'bg-indigo-700 hover:bg-indigo-800 focus:bg-indigo-800'
            case 'danger' : return 'bg-red-700 hover:bg-red-800 focus:bg-red-800'
            case 'success' : return 'bg-green-700 hover:bg-green-800 focus:bg-green-800'
            case 'warning' : return 'bg-orange-600 hover:bg-orange-700 focus:bg-orange-700'
            case 'secondary' : return 'bg-gray-600 hover:bg-gray-700 focus:bg-gray-700'
            case 'dark' : return 'bg-gray-800 hover:bg-gray-900 focus:bg-gray-900'
        }
    }

    return (
        <button onClick={onClick} type={type} className={`${getColor()} ${getSize()} ${widthFull ? 'w-full' : ''} focus:outline-none text-white rounded-lg select-none ${classes}`}>
            {children}
        </button>
    )
}