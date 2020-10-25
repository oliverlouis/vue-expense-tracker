<template>
  <button class="delete-button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.delete-button {
  width: 70px;
  padding: 10px 10px;
  border-radius: 10px;
  background-color: #e6494e;
  cursor: pointer;
  border: none;
  color: #fff;
  transition: all 0.2s;

  &:active {
    outline: none;
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>