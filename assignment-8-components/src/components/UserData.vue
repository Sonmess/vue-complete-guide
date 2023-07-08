<template>
    <form>
        <h2>User data</h2>
        <div>
            <label for="name">Name</label>
            <input @input="$emit('name-changed', name)" id="name" type="text" v-model="name" />
        </div>
        <div>
            <label for="age">Age</label>
            <input @input="$emit('age-changed', age)" id="age" type="number" v-model="age" />
        </div>
    </form>
</template>

<script>
export default {
    emits: ['name-changed', 'age-changed'],
    data() {
        return {
            name: '',
            age: null
        }
    }
}
</script>

<style scoped>
form {
    text-align: center;
    border: 2px solid grey;
    border-radius: 5px;
    margin: 20px auto;
    padding: 20px;
    background-color: aliceblue;
}
form div {
    padding: 6px;
    margin-bottom: 6px;
}
form div label {
    font-weight: bold;
    margin-right: 10px;
    width: 40px;
    text-align: right;
    display: inline-block;
    font-family: 'Courier New', Courier, monospace;
}
form div input {
    font-family:'Courier New', Courier, monospace;
    padding: 4px;
}
</style>