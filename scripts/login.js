new Vue({
    el: "#app",

    data: () => ({
        user_name: "",
        password: "",
        // password_length: "",
        errors: {},
    }),

    methods: {
        checkUserData(e) {
            this.errors = {};

            if (!this.user_name) {
                Vue.set(
                    this.errors, "username", "نام کاربری خود را وارد نمایید"
                );
            }

            if (!this.password) {
                Vue.set(
                    this.errors, "password", "رمز عبور خود را وارد نمایید"
                );
            }

            if (this.password.length < 8) {
                Vue.set(
                    this.errors, "password_length", "رمز عبور باید بیش از 8 کاراکتر باشد"
                );
            }

            if (!this.errors.username && !this.errors.password && !this.errors.password_length) {
                alert("خوش آمدید");
            }

            e.preventDefault();
        },
    },
});