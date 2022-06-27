export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      id: userId,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    const response = await fetch(
      `https://vue-second-app-coaches-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );
    // const responseData = await response.json();

    if (!response.ok) {
      // error
    } else {
      context.commit('registerCoach', {
        ...coachData,
        id: userId,
      });
    }
  },
};
