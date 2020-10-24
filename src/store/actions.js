export default {
	ADD_TRANSACTION(context, payload) {
		context.commit('addTransaction', payload);
	}
};
