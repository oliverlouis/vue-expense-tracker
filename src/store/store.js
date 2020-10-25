import { createStore } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const store = createStore({
	state() {
		return {
			transactions: [
				{
					id: 1,
					type: 'inc',
					description: 'Paycheck',
					amount: 2000
				},
				{
					id: 2,
					type: 'exp',
					description: 'Rent',
					amount: 500
				},
				{
					id: 3,
					type: 'inc',
					description: 'Project',
					amount: 700
				},
				{
					id: 4,
					type: 'exp',
					description: 'Car Loan',
					amount: 400
				}
			]
		};
	},

	getters,
	actions,
	mutations
});

export default store;
