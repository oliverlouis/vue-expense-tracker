export default {
	ADD_TRANSACTION(context, payload) {
		context.commit('addTransaction', payload);
	},

	DELETE_TRANSACTION(context, payload) {
		context.commit('deleteTransaction', payload);
	}
};
