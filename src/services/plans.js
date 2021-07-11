import axios from 'axios';

export default {

    /**
     * @returns plans array
     * Fetches all the plans from the backend
     */
    getPlans: async () => {
        try {
            const response = await axios.get('./plans.json')
            return response.data
        } catch (error) {
            throw error;
        }
    }
}