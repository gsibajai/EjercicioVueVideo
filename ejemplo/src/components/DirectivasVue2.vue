<template>
    <div>
        <h2>Lista de Tareas</h2>
        <ul>
            <li v-for="task in tasks" :key="task.id">
                {{ task.title }}
                <button v-if="!task.completed" @click="completeTask(task)">Completar</button>
                <span v-else>Completada</span>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            tasks: [
                { id: 1, title: 'Completar proyecto', completed: false },
                { id: 2, title: 'Enviar informe', completed: true },
                { id: 3, title: 'Reunión de equipo', completed: false },
                { id: 4, title: 'Lavara traster', completed: false },
                { id: 5, title: 'Barrer', completed: false }
            ]
        };
    },
    methods: {
        completeTask(task) {
            task.completed = true;
        }
    }
};
</script>
  