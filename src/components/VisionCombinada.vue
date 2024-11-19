<template>
    <div>
      <h2>Vista Combinada</h2>
      <AgregarTareas />
      <ListaDeTareas />
    </div>
  </template>
  
  <script>
  import AgregarTareas from './AgregarTareas.vue'
  import ListaDeTareas from './ListaDeTareas.vue'
  
  export default {
    components: { AgregarTareas, ListaDeTareas }
  }
  </script>
  
  <style scoped>
  /* Estilos para el componente */
  </style>