<template>
  <div class="transaction">
    <div class="transaction__values">
      <h3>{{ description }}</h3>
      <h4 :style="{ color: setItemColor }">
        {{ setTransactionSymbol }}${{ amount }}
      </h4>
    </div>
    <div>
      <DeleteButton @click="deleteTransaction">Delete</DeleteButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionItem",

  props: ["description", "amount", "id", "type"],

  methods: {
    deleteTransaction() {
      this.$store.dispatch("DELETE_TRANSACTION", this.id);
    },
  },

  computed: {
    setTransactionSymbol() {
      return this.type === "inc" ? "+" : "-";
    },

    setItemColor() {
      return this.type === "inc" ? "#99c34b" : "#e6494e";
    },
  },
};
</script>

<style lang="scss" scoped>
.transaction {
  // border: 1px solid rgb(231, 231, 231);
  background-color: rgb(251, 251, 251);
  width: 100%;
  padding: 5px 35px;
  margin-bottom: 35px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(168, 168, 168, 0.36);
  box-shadow: 0px 3px 6px 0px rgba(168, 168, 168, 0.36);

  &__values {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>