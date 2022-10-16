module.exports = {
    apps: [{
        name: "socket-render",
        script: "./app.js",
        instances: "max",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}