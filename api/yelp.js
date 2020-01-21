import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Y_raH7-MhaqG47O8ykD2aVCtzpvUJj-BhjWLlot7lRgNv8ZHHtQl_o_4DiqC7k4XPTlDsUPTAMUFSTsSXVyvRs5BwHWEB78T7tPm3IUCr8Y5fLO03je9FMT1NEkjXnYx'
    }
});
