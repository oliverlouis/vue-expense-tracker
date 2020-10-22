<template>
  <div class="transaction">
    <h3>{{ description }}</h3>
    <h4>{{ amount }}</h4>
    <p>{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: "TransactionItem",

  props: ["description", "amount", "date"],
};
</script>

<style lang="scss" scoped>
.transaction {
  border: 1px solid black;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
}
</style>