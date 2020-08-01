export default {
    name: 'Login',
    data() {
        return {
            username: "",
            pwd: "",
            isEye: true,
            pwdEye: "eye",
            isUserEmpty: true,
            isPwdEmpty: true,
            // 用户名验证
            myUserRules: {
                required: true,
                message: "账号格式不正确，请重新输入",
                pattern: /^(13|14|15|17|18)[0-9]{9}$|^[\w-]+(\.[\w-]+)*@([\w-]+\.)+\w{2,14}$/
            },
            //   密码验证
            myPwdRules: {
                required: true,
                message: "密码包含数字,英文,字符中的两种以上，长度6-20位",
                pattern: /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/
            }
        };
    },
    methods: {
        // 密码显示 隐藏 图标切换
        eyes() {
            console.log(123132);
            this.isEye = !this.isEye;
            if (this.isEye) {
                this.pwdEye = "eye";
            } else {
                this.pwdEye = "closed-eye";
            }
        },
        // 输入框 判断内容是否为空 为空时不进行用户名验证
        inputUserChange() {
            //   console.log(666);
            if (this.username) {
                this.isUserEmpty = false;
            } else {
                this.isUserEmpty = true;
            }
        },
        // 输入框 判断内容是否为空 为空时不进行密码验证
        inputPwdChange() {
            // console.log(666);
            if (this.pwd) {
                this.isPwdEmpty = false;
            } else {
                this.isPwdEmpty = true;
            }
        }
    }
};