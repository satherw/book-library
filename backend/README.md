# Book Library

A springboot RESTful API endpoint that manages a list of books and persists the books in a MySQL database. End goal is to provide enough functionality to hold a majority of the Tanzu Labs recommended books and be able to organize them. 

## Testing

The JUnit tests are configured with a "test" profile which specifies a different application-test.properties file which changes the database configuration to use H2.  This allows for the repository functions to be tested without using the MySQL database.  See ```data.sql``` and ```application-test.properties```. 

## Docker MySQL Configuration

- Container name: _library-db_
- Root PW: _library-pw_
- Image tag: _mysql/mysql-server:latest_

### Springboot MySQL DB Credentials
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
