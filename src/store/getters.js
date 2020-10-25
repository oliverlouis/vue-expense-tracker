export default {
	transactions(state) {
		return state.transactions;
	},

	totalIncome(state) {
		return state.transactions.filter(item => item.type === 'inc').reduce((acc, cur) => acc + cur.amount, 0);
	},

	totalExpense(state) {
		return state.transactions.filter(item => item.type === 'exp').reduce((acc, cur) => acc + cur.amount, 0);
	}
};
