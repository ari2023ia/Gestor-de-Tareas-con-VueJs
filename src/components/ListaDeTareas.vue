    <template>
    <div class="contenedor-tareas">
      <h2>Lista de Tareas</h2>
      <button @click="obtenerTareas">Obtener Tareas</button>
      <div v-for="(tarea, index) in tareas" :key="index" class="tarea-contenedor">
        <span :class="{ completada: tarea.completada }" class="tarea-texto">{{ tarea.title }}</span>
        <div class="botones-contenedor">
          <button @click="completarTarea(index)" class="boton">Completar</button>
          <button @click="eliminarTarea(index)" class="boton">Eliminar</button>
        </div>
        <span class="estado-texto">{{ tarea.estado }}</span>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        tareas: []
      }
    },
    methods: {
      async obtenerTareas() {
        try {
          const respuesta = await axios.get('https://dummyjson.com/todos')
          this.tareas = respuesta.data.todos.map(tarea => ({
            title: tarea.todo,
            completada: false,
            estado: 'Pendiente'
          }))
        } catch (error) {
          console.error(error)
        }
        console.log(this.tareas)
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
    width: 300px;
  }
  
  .tarea-texto {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  
  .completada {
    text-decoration: line-through;
  }
  
  .botones-contenedor {
    display: block;
    margin-top: 10px;
  }
  
  .boton {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #f0f0f0;
    margin: 5px;
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