export default {
	addTransaction(state, payload) {
		state.transactions.push(payload);
	},

	deleteTransaction(state, payload) {
		let toDelete = state.transactions.findIndex(item => item.id === payload);
		state.transactions.splice(toDelete, 1);
	}
};
