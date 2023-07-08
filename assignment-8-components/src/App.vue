<template>
    <section class="container">
        <h1>Section 8 Components Assignment</h1>
        <user-data class="component" @name-changed="nameChanged" @age-changed="ageChanged" />
        <active-user class="component" :name="name" :age="age" />
    </section>    
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: null,
        }
    },
    methods: {
        nameChanged(name) {
            this.name = name;
        },
        ageChanged(age) {
            this.age = age;
        }
    }
}
</script>

<style scoped>
    section.container {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }
    section h1 {
        flex-basis: 100%;
    }
    section .component {
        flex-basis: 50%;
    }
</style>