<template>
  <div>
    <form @submit.prevent="submitTransaction">
      <input type="text" placeholder="Description" v-model="description" />
      <input type="number" placeholder="Amount" v-model="amount" />
      <button type="button" @click.stop="submitTransaction">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["type"],
  emits: ["close-modal"],

  data() {
    return {
      description: "",
      amount: null,
    };
  },

  methods: {
    submitTransaction() {
      const transaction = {
        id: new Date().toISOString(),
        type: this.type,
        description: this.description,
        amount: this.amount,
      };

      this.$store.dispatch("ADD_TRANSACTION", transaction);
      this.$emit("close-modal", false);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>