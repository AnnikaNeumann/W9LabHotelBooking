const baseURL = 'http://127.0.0.1:5000/api/hotel_bookings/'

export const getHotel_bookings = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postHotel_bookings = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteHotel_bookings = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}