import { createStore } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const store = createStore({
	state() {
		return {
			transactions: [
				{
					id: new Date().toISOString(),
					type: 'inc',
					description: 'Paycheck',
					amount: 2000
				},
				{
					id: new Date().toISOString(),
					type: 'exp',
					description: 'Rent',
					amount: 500
				},
				{
					id: new Date().toISOString(),
					type: 'inc',
					description: 'Project',
					amount: 700
				},
				{
					id: new Date().toISOString(),
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
