<template>
    <div>
        <form v-if="!submitted">
            <fieldset>
                <legend>Add new user</legend>
                <p>Name<sub>*</sub>: <input required v-model="user.name" type="text"/><br></p>
                <p>Country: <input v-model="user.country" type="text"/><br></p>
                <p>Email: <input v-model="user.email" type="email"/><br></p>
                <p>Date of birth: <input v-model="user.birthday" type="text"/></p>
                <p>Password: <input v-model="user.password" type="password"/></p>
                <p>Notes: <textarea noresize v-model="user.notes"></textarea></p>
                <p> Superuser: <input v-model="user.isSuperUser" type="checkbox"/></p>

                <button v-on:click.prevent="post" v-bind:disabled="!user.name">Save</button>
            </fieldset>
        </form>
        <div v-if="submitted">
            New user has been added successfully!
        </div>
    </div>
</template>

<script>
  export default {
    name: 'AddUser',
    data() {
      return {
        user: {
          name: '',
          email: '',
          age: '',
          phone: '',
          country: '',
          birthday: '',
          isSuperUser: false,
          notes: '',
        },
        submitted: false,
      };
    },
    methods: {
      post() {
        this.$http.post(`${this.$router.options.server}/api/users`, this.user)
          .then(() => {
            this.submitted = true;
            window.setTimeout(() => {
              this.$router.push({name: 'HOME PAGE'});
            }, 1000);
          })
          .catch((data) => {
            window.console.error('Error: ', data);
          });

      },
    },
  };
</script>


<style scoped>
    form {
        width: 50%;
        border: 1px solid black;
        text-align: left;
        padding: 20px;
        margin: 0 auto 20px auto;
        background: #fff0e3;
    }
    fieldset{
        border: none;
    }
    legend{
        font-size: 16px;
        font-weight: bold;
    }

    p {
        display: flex;
        text-align: left;
        justify-content: space-between;

    }

    input, textarea {
        width: 70%;
        margin-left: auto;
        resize: none;
    }

    input[type="checkbox"] {
        margin-right: auto;
        margin-left: 50px;
        width: auto;
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

    button:disabled {
        cursor: default;
    }


</style>
