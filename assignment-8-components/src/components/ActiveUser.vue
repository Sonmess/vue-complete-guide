<template>
    <section>
        <h2>Active User</h2>
        <div>Name: <b>{{ name }}</b></div>
        <div>Age: <b>{{ age }}</b></div>
    </section>
</template>

<script>
export default {
    props: ['name', 'age']
}
</script>

<style scoped>
    section {
        background-color: lawngreen;
        border: 2px solid grey;
        border-radius: 6px;
        padding: 20px;
    }

    section div {
        padding: 10px;
        font-family:'Courier New', Courier, monospace;
    }
</style>