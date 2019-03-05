db.createUser(
        {
            user: 'Teamy',
            pwd: 'Teamy',
            roles: [
                {
                    role: "readWrite",
                    db: "teamy"
                }
            ]
        }
);

console.log('user created');
