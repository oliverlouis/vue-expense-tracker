<template>
  <div class="display">
    <h3>{{ getTotalIncome }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    getTotalIncome() {
      return this.$store.getters.totalIncome;
    },
  },
};
</script>

<style lang="scss" scoped>
.display {
  width: 100%;
}
</style>