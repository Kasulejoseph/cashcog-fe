<template>
  <v-card class="mx-auto" max-width="95%" shaped>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-subtitle v-text="employee"></v-list-item-subtitle>
        <v-list-item-title style="color:#FEC42E" class="headline mb-1" v-text="currency"></v-list-item-title>
        <div class="subtitle-1 font-weight-regular" v-text="description"></div>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-chip-group v-model="status" column mandatory>
        <v-chip
          filter
          outlined
          color="#FEC42E"
          text-color="red"
          @click="updateStatus({status:'declined', id:item.uuid})"
        >Declined</v-chip>
        <v-chip
          filter
          outlined
          color="#FEC42E"
          text-color="green"
          @click="updateStatus({status:'approved', id:item.uuid})"
        >Approved</v-chip>
      </v-chip-group>
      <v-spacer></v-spacer>
      <v-card-subtitle class="text-sm-left" v-text="created_at"></v-card-subtitle>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ExpenseCard",
  props: [
    "currency",
    "description",
    "created_at",
    "employee",
    "passStatus",
    "item"
  ],
  computed: {
    status: {
      get: function() {
        let toUpdate =
          this.passStatus === "approved"
            ? 1
            : this.passStatus === "declined"
            ? 0
            : "";
        return toUpdate;
      },
      set: function(value) {
        return value;
      }
    }
  },
  methods: {
    updateStatus(status) {
      this.$emit("updateStatus", status);
    }
  }
};
</script>

<style lang="scss">
.subtitle-1 {
  height: 50px;
  overflow: auto;
}
</style>
