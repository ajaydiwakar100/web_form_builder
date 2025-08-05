module.exports = {
    apps: [
        {
            name: "xeditor-clientapp",
            script: "yarn run dev",
            watch: false,
            env: {
                NODE_ENV: "development",
                PORT: 3000
            }
        }
    ]
}
