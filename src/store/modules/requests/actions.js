export default {
  async addRequest(context, payload) {
    const newRequest = {
      email: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      `https://vue-second-app-coaches-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    } else {
      newRequest.id = responseData.name;
      newRequest.coachId = payload.coachId;
    }

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;

    const response = await fetch(
      `https://vue-second-app-coaches-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to get data.');
      throw error;
    } else {
      const requests = [];
      for (const key in responseData) {
        const request = {
          id: key,
          coachId: coachId,
          email: responseData[key].email,
          message: responseData[key].message,
        };
        requests.push(request);
      }
      context.commit('setRequests', requests);
    }
  },
};
