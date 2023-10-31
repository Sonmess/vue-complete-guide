export default {
    getRequests(state, getters, rootState, rootGetters) {
        const userId = rootGetters.userId;
        return state.requests.filter(req => req.coachId === userId);
    },

    hasRequests(state, getters) {
        return getters.getRequests && getters.getRequests.length > 0;
    }
};