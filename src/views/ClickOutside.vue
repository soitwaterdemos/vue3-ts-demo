<template>
  <div class="ClickOutside">
    <div>
      <span>当前鼠标单击位置是否在绿色div在之外?</span>
      <span>{{isClickOutside ? '是(不包括)' : '否(包括)'}}</span>
    </div>
    <div id="green-box" style="width:200px;height:200px;background:green;"></div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  onMounted,
  onUnmounted,
  watch,
  ref,
  Ref,
  toRefs,
} from "vue";

const useClickOutside = (elementSelector: string) => {
  const isClickOutside = ref(false);
  let elementRef = ref<null | HTMLElement>(null);
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        console.log("包括");
        isClickOutside.value = false;
      } else {
        console.log("不包括");
        isClickOutside.value = true;
      }
    }
  };

  onMounted(() => {
    elementRef = ref(document.querySelector(elementSelector) as HTMLElement);
    document.addEventListener("click", handler);
  });

  onUnmounted(() => {
    document.removeEventListener("click", handler);
  });

  return isClickOutside;
};

export default defineComponent({
  setup(props, context) {
    const isClickOutside = useClickOutside("#green-box");
    return { isClickOutside };
  },
});
</script>