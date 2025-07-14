<script setup>

const {
  status,
  data,
  error
} = menuGet()

</script>
<template>
  <WidgetsLoader v-if="status === 'pending'"/>
  <WidgetsError v-else-if="error"/>
  <nav class="" aria-label="Global" v-else>
    <ul class="" id="navigationTop">
      <li v-for="item in data" :key="item.blogid">
        {{ item.name }}
        <ul>
          <li v-for="child in item.items" :key="child.ID">
            {{ child.title }}
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
