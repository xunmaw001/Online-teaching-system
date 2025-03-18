const base = {
    get() {
                return {
            url : "http://localhost:8080/ssm75fr0/",
            name: "ssm75fr0",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm75fr0/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "疫情期间网上授课系统"
        } 
    }
}
export default base
