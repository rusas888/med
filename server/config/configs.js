module.exports = {
    server: {
            host: 'localhost',
            port: 3000
    },
    database: {
        host: 'localhost',
        port: 27017,
        db: 'login',
        url: 'mongodb://127.0.0.1:27017/test1231'
    },
    auth: {
        JWT_SECRET: '1982LvDSm44Xv2jYOh93Y',
        privateKey: '37LvDSm4XvjYOh9Y',
        tokenExpiry: '1d' // 60 second 
    }
}
