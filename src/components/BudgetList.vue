<template>
  <div class="budget-list">
    <BudgetDisplay />
    <IncomeDisplay />
    <ExpenseDisplay />
  </div>
</template>

<script>
import BudgetDisplay from "./BudgetDisplay";
import IncomeDisplay from "./IncomeDisplay";
import ExpenseDisplay from "./ExpenseDisplay";
export default {
  components: {
    BudgetDisplay,
    IncomeDisplay,
    ExpenseDisplay,
  },
};
</script>

<style lang="scss" scoped>
.budget-list {
  width: 200px;
}
</style>