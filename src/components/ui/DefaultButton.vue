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
  background-color: #ffcb74;
  cursor: pointer;
  border: none;
  color: #fff;
  transition: all 0.2s;
  font-weight: 500;

  &:active {
    outline: none;
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>