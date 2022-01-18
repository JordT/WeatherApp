const formatTime = (s) => {
    
    return new Date(s * 1e3).toISOString().slice(-13, -8)
}

export default formatTime;