import { createStore } from 'vuex';
import getters from './getters';

const store = createStore({
	state() {
		return {
			transactions: [
				{
					id: 1,
					type: 'inc',
					description: 'Paycheck',
					amount: 2000,
					date: new Date().getDay()
				},
				{
					id: 2,
					type: 'exp',
					description: 'Rent',
					amount: 500,
					date: new Date().getDay()
				},
				{
					id: 3,
					type: 'inc',
					description: 'Project',
					amount: 700,
					date: new Date().getDay()
				},
				{
					id: 4,
					type: 'exp',
					description: 'Car Loan',
					amount: 400,
					date: new Date().getDay()
				}
			]
		};
	},

	getters
});

export default store;
