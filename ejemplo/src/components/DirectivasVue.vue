<template>
    <div>
        <h2>Validación de edad</h2>
        <p v-if="edad >= 18">Eres mayor de edad.</p>
        <p v-else>Eres menor de edad.</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            edad: 18
            
        };
    }
};
</script>
  