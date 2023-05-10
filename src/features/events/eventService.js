import axios from "axios";

const API_URL = 'http://localhost:8000/api/event/'

// create event
const addEvent = async (userData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL + 'addEvent', userData, config)

    return response.data
}

// get event
const getEvents = async () => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const reponse = await axios.get(API_URL + 'getEvent', config)

    return reponse.data
}

const eventService = {
    addEvent,
    getEvents
}

export default eventService