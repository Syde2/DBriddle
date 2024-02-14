<script setup>
import {icons}  from '../assets/icons/index.js'
console.log(icons)
</script>


<template>
	<div class="card">
    <img :src="icons.Chip" style="color: white; height: 3rem;"  />
		<span class="material-symbols-outlined">search</span>
	</div>
</template>

<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>
