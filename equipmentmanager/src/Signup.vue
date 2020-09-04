<template>
    <div class='signup'>
        <table>
            <tr>
                <th>メールアドレス：</th>
            </tr>
            <tr>
                <td><input type='email' v-model='mailaddress' /></td>
            </tr>
            <tr>
                <th>パスワード</th>
            </tr>
            <tr>
                <td><input type='password' v-model='password' /></td>
            </tr>
        </table>
        <button @click='signup'>登録</button>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'signup',
    data() {
        return {
            mailaddress: '',
            password: ''
        }
    },
    methods: {
        signUp: function() {
            firebase.auth().createUserWithEmailAndPassword(this.mailaddress, this.password)
            .then(user => {
                alert('Create Account:', user.email)
            })
            .catch(error => {
                alert(error.message)
            })
        }
    }
}
</script>