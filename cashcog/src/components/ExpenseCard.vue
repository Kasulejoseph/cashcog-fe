<template>
  <v-card class="mx-auto" max-width="95%" shaped>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-subtitle v-text="employee"></v-list-item-subtitle>
        <v-list-item-title
          style="color:#FEC42E"
          class="headline mb-1"
          v-text="currency"
        ></v-list-item-title>
        <div class="subtitle-1 font-weight-regular" v-text="description"></div>
        <span class="mb-2 mt-3"></span>
        <v-chip-group v-model="status" column mandatory>
          <v-chip filter outlined @click="updateStatus(status='approved')">Aprroved</v-chip>
          <v-chip filter outlined @click="updateStatus(status='rejected')">Rejected</v-chip>
        </v-chip-group>
      </v-list-item-content>
      {{status}}
    </v-list-item>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-card-subtitle
        class="text-sm-left"
        v-text="created_at"
      ></v-card-subtitle>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ExpenseCard",
  props: ["currency", "description", "created_at", "employee"],
  data() {
    return {
      status: ''
    };
  },
  methods: {
    updateStatus(status) {
      this.$emit('updateStatus', this.status)
    }
  }
};
</script>
