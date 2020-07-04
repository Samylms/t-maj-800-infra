db.createUser(
        {
            user: "devapi",
            pwd: "devapi",
            roles: [
                {
                    role: "readWrite",
                    db: "t-maj-api"
                }
            ]
        }
);