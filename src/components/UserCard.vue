<template>
    <div class="user-card">
        <div>
            <p>Name: <b>{{ user.name}}</b></p>
            <p>Country: <b>{{ user.country || "-"}}</b></p>
            <p>Email: <b>{{ user.email || "-"}}</b></p>
            <p> Date of birth: <b>{{ user.birthday || "-"}}</b></p>
            <p>Password: <b>**********</b></p>
            <p> Superuser: <b>{{user.isSuperUser ? 'yes' : 'no'}}</b></p>
            <p>Notes: <b>{{ user.notes || "-"}}</b></p>
        </div>
        <button v-on:click.prevent="deleteUser">Delete User</button>
        <button v-on:click="switchMode">Edit User</button>
    </div>

</template>

<script>
export default {
  name: 'UserCard',
  props: ['user', 'switchMode', 'deleteUser'],

};
</script>

<style scoped>
    .user-card {
        width: 80%;
        border: 1px solid black;
        text-align: left;
        padding: 20px;
        margin: 0 auto 20px auto;
        background: ghostwhite;
    }

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
        text-decoration: none;
        display: block;
    }

    button {
        background: white;
        border-radius: 2px;
        margin-right: 10px;
        border: 1px solid #42b983;
        cursor: pointer;
        min-width: 70px;
        font-size: 14px;
        color: #42b983;
        padding: 5px 10px;
    }
</style>
