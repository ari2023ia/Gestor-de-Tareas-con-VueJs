<template>
  <div class="contenedor-inicio">
    <h1 class="titulo-principal">Gestor de Tareas Alfa</h1>
    <p class="descripcion">Esta aplicación te permite gestionar tus tareas de manera eficiente. <br>Puedes añadir nuevas tareas manualmente o extraerlas desde una API.</p>
    <h2 class="subtitulo">Secciones de la Aplicación</h2>
    <p><span class="seccion">Añadir Tarea:</span> Gestión de tareas pendientes, permite ingresar tareas manualmente.</p>
    <p><span class="seccion">Lista de Tareas:</span> Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas.</p>
    <p><span class="seccion">Vista Combinada:</span> Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.</p>
  </div>
</template>

<script setup>
// No necesitas nada aquí por ahora
</script>

<style scoped>
.contenedor-inicio {
  text-align: center;
  margin-top: 50px;
}

.titulo-principal {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.descripcion {
  font-size: 18px;
  margin-bottom: 40px;
}

.subtitulo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.seccion {
  font-weight: bold;
  text-decoration: underline;
  font-size: 18px;
}

.titulo-principal,
.subtitulo,
h2 {
  color: #00BFFF; /* Azul agua */
}
</style>