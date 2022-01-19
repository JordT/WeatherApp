const formatTime = (s) => {
    
    return new Date(s * 1e3).toISOString()
}

export default formatTime;