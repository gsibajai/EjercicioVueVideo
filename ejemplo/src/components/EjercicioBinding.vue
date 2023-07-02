<template>
    <div>
        <h2>Binding de Datos</h2>
        <p>{{ message }}</p>
        <input type="text" v-model="inputValue" />
        <p>El valor del input es: {{ inputValue }}</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            message: "¡Hola Amigos!",
            inputValue: ""
        };
    }
};
</script>
  