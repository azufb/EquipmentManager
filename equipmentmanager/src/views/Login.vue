<template>
    <div class='login'>
        <!--ログインコンポーネント-->
        <amplify-authenticator :authConfig='authConfig'></amplify-authenticator>
        <amplify-sign-out v-bind:signOutConfig='signOutConfig'></amplify-sign-out>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            authConfig: {
                usernameAttributes: 'Email',
                signUpConfig: {
                    header: 'Sign Up',
                    hideAllDefaults: true,
                    defaultCountryCode: '1',
                    signUpFields: [
                        {
                            label: 'Email',
                            key: 'username',
                            required: true,
                            displayOrder: 1,
                            type: 'string'
                        },
                        {
                            label: "Password",
                            key: "password",
                            required: true,
                            displayOrder: 2,
                            type: "password"
                        }
                    ]
                }
            },
            signOutConfig: {
                msg: 'Sign Out',
                signOutButton: 'Sign Out'
            }
        };
    }
};
</script>