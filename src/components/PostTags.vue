<template>
  <div class="mt-3 mb-3">
    <g-link
      v-for="tag in post.tags"
      :key="tag.id"
      :to="tag.path"
      class="mr-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-200 text-gray-700 rounded-full"
    >
      #{{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>
