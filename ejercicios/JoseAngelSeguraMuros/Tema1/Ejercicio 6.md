##Ejercicio6

###Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (vamos, lo que viene siendo TDD).

Primero probamos los assert para ver su funcionamiento, despues se crea una funcion sumar simple y se hacen 2 tests: Un preparado para fallar y otro para acertar.

```python

import unittest

def sumar(a+b):
	return a+b


class Tests(unittest.TestCase):

  def test1(self):
      self.assertEqual('aaaa', 'aaa')

  def test2(self):
      self.assertEqual('aaaa'.upper(), 'AAA')

  def test3r(self):
      self.assertEqual(2+3, 5)

  def testSumarAcierto(self):
      self.assertEqual(sumar(2,5), 7)

  def testSumarFallo(self):
      self.assertEqual(sumar(2,5), 8)


if __name__ == '__main__':
  suite = unittest.TestLoader().loadTestsFromTestCase(Tests)
  unittest.TextTestRunner(verbosity=2).run(suite)

```
