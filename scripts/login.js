new Vue({
    el: "#app",

    data: () => ({
        user_name: "",
        password: "",
        errors: {},
    }),

    methods: {
        checkUserData(e) {
            this.errors = {};

            if (!this.user_name) {
                Vue.set(
                    this.errors,
                    "username",
                    "نام کاربری خود را وارد نمایید"
                );
            }

            if (!this.password) {
                // this.error += '<br/>رمز عبور خود را وارد نمایید';
                Vue.set(this.errors, "password", "رمز عبور خود را وارد نمایید");
            }

            if (!this.errors.username && !this.errors.password) {
                alert("خوش آمدید");
            }
            console.log(this.errors);

            e.preventDefault();
        },
    },
});
