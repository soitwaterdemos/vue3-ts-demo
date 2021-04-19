<template>
  <div class="MousePosition">
    <div>
      <span>鼠标单击显示鼠标位置: </span>
      <span>{{x}}, </span>
      <span>{{y}}</span>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  toRefs,
} from "vue";

function useMousePosition() {
  const x = ref(0);
  const y = ref(0);
  const updateMouse = (e: MouseEvent) => {
    x.value = e.clientX;
    y.value = e.clientY;
  };
  onMounted(() => {
    document.addEventListener("click", updateMouse);
  });
  onUnmounted(() => {
    document.removeEventListener("click", updateMouse);
  });

  return { x, y };
}

export default defineComponent({
  setup(props, context) {
    const proxyPosition = reactive(useMousePosition());
    const toRefsPosition = toRefs(proxyPosition);
    return { ...toRefsPosition };
  },
});
</script>