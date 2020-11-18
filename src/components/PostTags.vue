<template>
  <div class="mt-3 mb-3">
    <g-link
      v-for="tag in post.tags"
      :key="tag.id"
      :to="tag.path"
      class="py-1 bg-blue-100 mr-2 px-3 rounded-sm font-medium text-sm text-gray-700"
    >
      {{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>
