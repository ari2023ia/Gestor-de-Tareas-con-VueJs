<script setup>

</script>

<template>
  <div class="contenedor-tareas">
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/agregartareas">Agregar Tarea</router-link> |
      <router-link to="/listadetareas">Lista de Tareas</router-link> |
      <router-link to="/visioncombinada">Vista Combinada</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.contenedor-tareas {
  text-align: center;
  margin-top: 50px;
}
</style>
