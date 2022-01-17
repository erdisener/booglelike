<template>
  <div>
    <div class="p-2 grid grid-cols-8 gap-4">
      <BookmarkListItem v-for="i in 10" :key="i" />
    </div>
  </div>
</template>

<script>
import BookmarkListItem from "@/components/Main/appBookmarkList/BookmarkListItem";

export default {
  components: {
    BookmarkListItem,
  },
};
</script>
