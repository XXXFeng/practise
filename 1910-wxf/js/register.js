class Register{
    constructor() {
        this.user = document.getElementById("user");
        this.pass = document.getElementById("pass");
        this.apass = document.getElementById("apass");
        this.submit = document.getElementById("submit");
        this.init();
    }
    init(){
        var that = this;
        submit.onclick = function(){
            this.u = that.user.value;
            this.p = that.pass.value;
            this.ap = that.apass.value;
            if(this.u && this.p && this.ap && this.p === this.ap){
                alert("注册成功,请登陆")
                setCookie(this.u, this.p,{
                    path:"1910-wxf",
                    expires: 1000
                })
            }else if(this.u && this.p && this.ap && this.p !== this.ap){
                alert("两次密码输入不一致！")
            }else{
                alert("注册失败，请确认无误后再注册！")
            }
        }
    }
}
new Register;


