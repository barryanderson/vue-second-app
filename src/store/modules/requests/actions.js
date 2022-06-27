export default {
  addRequest(context, payload) {
    const newRequests = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      email: payload.email,
      message: payload.message,
    };
    context.commit('addRequest', newRequests);
  },
};
