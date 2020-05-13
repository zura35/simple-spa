<template>
  <v-dialog :value="value" fullscreen>
    <v-toolbar>
      <v-btn icon @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card flat v-if="friend != null">
      <v-card-text>
        <div>
          <iframe
            width="100%"
            height="450"
            frameborder="0"
            style="border:0"
            :src="embedAPI" allowfullscreen>
          </iframe>
        </div>
        <v-divider />
        <v-list-item>
          <v-list-item-icon>
            <v-avatar>
              <img :src="friend.picture" />
            </v-avatar>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ fullname }}
            </v-list-item-title>
            <v-list-item-subtitle> {{ friend.email }} </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card-text>
    </v-card>
    <div v-else>
      No details available.
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: ['value', 'friend', 'mapKey'],

  name: 'FriendDetails',

  computed: {
    fullname: function() {
      return this.friend?.name?.first + ' ' + this.friend?.name?.last
    },

    embedAPI: function() {
      if (this.friend == null) return null
      let lat = this.friend.location.latitude == null ? 0 : this.friend.location.latitude
      let long = this.friend.location.longitude == null ? 0 : this.friend.location.longitude
      return 'https://www.google.com/maps/embed/v1/place?' +
      'key=' + this.mapKey + '&q=' + lat + ',' + long +
      '&zoom=4'
    }
  },

  methods: {
    close: function() {
      this.$emit('close')
    }
  }
}
</script>
