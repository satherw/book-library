## Docker MYSQL Configuration

- Container name: _library-db_
- Root PW: _library-pw_
- Image tag: _mysql/mysql-server:latest_


### Springboot DB Credentials
- user: 'springboot-app'
- pw: 'springboot-app-pw'

To start a mysql bash instance, run:

```
sudo docker exec -it library-mysql bash
mysql -uroot -p
```

Book database object design

```
Book: {
    id: _AUTO_GENERATED_
    name: String
    author: String
    tags: String[]
    summary: String?
}
```
