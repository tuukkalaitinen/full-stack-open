const Notification = ({ message }) => {
    if (message === null) {
        return null
    } else if (message.startsWith('Added')) {
        return (
            <div className='success'>
                {message}
            </div>
        )
    } else {
        return (
            <div className='error'>
                {message}
            </div>
        )
    }
}

export default Notification