<template>
  <div class="display">
    <h3>{{ getTotalExpense }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    getTotalExpense() {
      return this.$store.getters.totalExpense;
    },
  },
};
</script>

<style lang="scss" scoped>
.display {
  width: 100%;
}
</style>