<template>
    <div>
        <h2>Contador</h2>
        <p>El valor actual es: {{ contador }}</p>
        <button @click="incrementar">Incrementar</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            contador: 0
        };
    },
    methods: {
        incrementar() {
            this.contador++;
        }
    }
};
</script>
  