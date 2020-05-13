<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      hide-on-scroll
    >
      <v-spacer />
      <v-toolbar-title> All Friends </v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <v-content>
      <v-list>
        <friend-list-item v-for="(friend, i) in response" :key="i" @show="showDetails(friend)" :friend="friend" />
      </v-list>
      <friend-details v-model="dialog" @close="closeDetails" :friend="selected" :mapKey="apiKey" />
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';
import FriendListItem from './components/FriendListItem.vue'
import FriendDetails from './components/FriendDetails.vue'

export default {
  name: 'App',

  created: function() {
    axios
      .get('https://next.json-generator.com/api/json/get/41P1_UhSI')
      .then(response => this.response = response.data)
  },

  components: {
    'friend-list-item': FriendListItem,
    'friend-details': FriendDetails,
  },

  data: () => ({
    apiKey: "",
    response: null,
    selected: null,
    dialog: false,
  }),

  methods: {
    showDetails: function(person) {
      this.selected = person
      this.dialog = true
    },

    closeDetails: function() {
      this.dialog = false
      this.selected = null
    }
  },
};
</script>
