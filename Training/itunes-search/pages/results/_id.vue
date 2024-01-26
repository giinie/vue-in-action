<template>
  <div>
    <h1>{{ $route.params.id }}에 대한 결과</h1>
    <div v-if="albumData">
      <div v-for="(album, index) in albumData" :key="index">
        <Card
          :title="album.collectionCensoredName"
          :image="album.artworkUrl60"
          :artistName="album.artistName"
          :url="album.artistViewUrl"
          :color="picker(index)"
        ></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue';

export default {
  name: '_id',
  components: {
    Card,
  },
  methods: {
    picker(index) {
      const colors = ['red', 'green', 'blue', 'orange', 'pink'];
      return colors[index % colors.length];
    },
  },
  computed: {
    albumData() {
      return this.$store.state.albums;
    },
  },
  middleware: 'search',
};
</script>

<style scoped></style>
