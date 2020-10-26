<template>
  <div class="form-container">
    <form @submit.prevent="submitTransaction">
      <h3 class="input-heading">
        Enter new
        <span
          :style="{
            color: setHeadingColor,
          }"
          >{{ setHeadingTitle }}</span
        >
      </h3>
      <input type="text" placeholder="Description" v-model="description" />
      <input type="number" placeholder="Amount" v-model="amount" />
      <DefaultButton type="button" @click.stop="submitTransaction"
        >Submit</DefaultButton
      >
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
      const generatedId = function () {
        return "_" + Math.random().toString(36).substr(2, 9);
      };

      const transaction = {
        id: generatedId(),
        type: this.type,
        description: this.description,
        amount: +this.amount,
      };

      this.$store.dispatch("ADD_TRANSACTION", transaction);
      this.$emit("close-modal", false);
    },
  },

  computed: {
    setHeadingTitle() {
      return this.type === "inc" ? "Income" : "Expense";
    },

    setHeadingColor() {
      return this.type === "inc" ? "#99c34b" : "#e6494e";
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  width: 40%;
  justify-self: center;
}
form {
  width: 100%;
  padding: 50px 40px;
  border-radius: 15px;
  margin: 40px auto 40px 65%;
  background-color: #fff;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(168, 168, 168, 0.36);
  box-shadow: 0px 3px 6px 0px rgba(168, 168, 168, 0.36);

  .input-heading {
    margin-bottom: 20px;
  }

  input {
    display: block;
    border: none;
    width: 80%;
    border-bottom: 1px solid grey;
    padding: 15px 10px;

    &:not(:last-child) {
      margin-bottom: 30px;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>