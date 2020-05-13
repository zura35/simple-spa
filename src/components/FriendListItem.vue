<template>
  <v-list-item @click="show">
    <v-list-item-icon>
      <v-avatar>
        <img :src="friend.picture" />
      </v-avatar>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>
        {{ friend.name.first + " " + friend.name.last }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  export default {
    props: ['friend'],

    name: 'FriendListItem',

    methods: {
      show: function() {
        this.$emit('show')
      }
    }
  }
</script>
