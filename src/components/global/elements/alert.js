export default function Alert ({children, variant = 'primary', className: classes = ''}) {

    const getVariant = () => {
        switch (variant) {
            case 'primary' : return 'bg-indigo-100'
            case 'danger' : return 'bg-red-100'
            case 'success' : return 'bg-green-100'
            case 'warning' : return 'bg-orange-100'
            case 'secondary' : return 'bg-gray-100'
        }
    }

    return (
        <div className={`${getVariant()} dark:bg-gray-600 text-gray-500 dark:text-gray-300 text-md rounded-lg p-4 ${classes}`}>
            {children}
        </div>
    )
}