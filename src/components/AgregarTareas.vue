<template>
    <div class="contenedor-tareas">
      <h2>Agregar Tareas</h2>
      <form @submit.prevent="agregarTarea">
        <input type="text" v-model="nuevaTarea" placeholder="Ingrese tarea">
        <button type="submit">Agregar</button>
      </form>
      <div v-for="(tarea, index) in tareas" :key="index" class="tarea-contenedor">
        <span :class="{ completada: tarea.completada }" class="tarea-texto">{{ tarea.descripcion }}</span>
        <div class="botones-contenedor">
          <button @click="completarTarea(index)" class="boton">Completar</button>
          <button @click="eliminarTarea(index)" class="boton">Eliminar</button>
        </div>
        <span class="estado-texto">{{ tarea.estado }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nuevaTarea: '',
        tareas: []
      }
    },
    methods: {
      agregarTarea() {
        this.tareas.push({
          descripcion: this.nuevaTarea,
          completada: false,
          estado: 'Pendiente'
        })
        this.nuevaTarea = ''
      },
      completarTarea(index) {
        this.tareas[index].completada = !this.tareas[index].completada
        this.tareas[index].estado = this.tareas[index].completada ? 'Completada' : 'Pendiente'
      },
      eliminarTarea(index) {
        this.tareas.splice(index, 1)
      }
    }
  }
  </script>
  
  <style scoped>
 .tarea-contenedor {
  border: 1px solid #87CEEB; /* Celeste */
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.tarea-texto {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.completada {
  text-decoration: line-through;
}

.boton {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f0f0f0;
}

.estado-texto {
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-top: 5px;
}

.contenedor-tareas {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
}

h2 {
  color: #00BFFF; /* Azul agua */
}
  </style>