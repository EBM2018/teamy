until mongo --host mongo --eval "print(\"waited for connection\")"
do
    sleep 1
done

// you can add more MongoDB waits here

echo "Adding user to MongoDB..."
mongo --host mongo --eval "db.createUser({ user: \"<user>\", pwd: \"<pass>\", roles: [ { role: \"root\", db: \"admin\" } ] });"
echo "User added."
