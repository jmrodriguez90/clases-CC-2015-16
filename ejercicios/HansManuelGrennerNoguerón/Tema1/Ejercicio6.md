##Ejercicio 6

**Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (vamos, lo que viene siendo TDD).**

Se usará el framework de testing para Python llamado [unittest](https://docs.python.org/2/library/unittest.html#module-unittest). En la misma documentación podremos encontrar un [ejemplo básico de test](https://docs.python.org/2/library/unittest.html#basic-example) que realiza pruebas sobre cadenas de Strings.

Añadiremos a dicho test una prueba sobre la base de datos, tanto de conexión a la base de datos como de poder buscar con éxito a un usuario ya preestablecido.

```
def test_MongoDBCon(self):
	client = MongoClient()
	db = client.usuarios

def test_FindUserDB(self):
	client = MongoClient()
	db = client.usuarios
	posts = db.posts
	query = posts.find({"user":"admin"})
	self.assertEqual(query.count(), 1)
```
