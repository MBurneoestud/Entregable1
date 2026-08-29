# Entregable 1

## Descripción
 Repositorio para el Entregable 1: Laboratorio de Intenciones Tipadas

## Intención Inicial
- Programa para crear listas (ejercitos) para el juego de mesa Warhammer 40,000.
- Las listas en el juego son creadas en base a un sistema de puntos. Cada unidad (soldado, vehiculo, etc.) tiene un valor de puntos, y las listas tienen un valor mínimo y maximo de puntos dependiendo del formato de juego

## Intencion Auditable
- El programa se compone de 3 partes: 
    + Lista o ejercito: formato mas grande, tiene un nombre asignado por el usuario. Contiene las unidades individuales. Existe un valor minimo y maximo de puntos que debe tener la lista para ser valida.
    + Unidad: Los soldados, vehiculos, etc. que componen una lista. Cada uno tiene una o mas armas que contribuyen a su valor de puntos. Las unidades tienen tipos: "linea de batalla", "infanteria", "montado" "vehiculo" y "personaje". Las unidades tambien tienen un valor de puntos inicial antes de asignarles sus armas. Ciertas armas solo son compatibles con ciertas unidades
    + Arma: Tiene valor de puntos que se suma junto con el valor de otras armas y el valor base de la unidad para calcular el valor total de la unidad. Hay armas de combate cercano y combate lejano, armas que funcionan mejor para combatir con grupos y armas que funcionan mejor para combate con enemigos individuales (por ejemplo, un lanzallamas es bueno para lidear con grupos en combate cercano, un francotirador es bueno para enemigos individuales en combate lejano).
- Se generan errores si no se cumplen ciertas condiciones. Por ejemplo, si no se nombra la lista, si el valor total de puntos no llega al minimo o se pasa del maximo, si no se asignan armas compatibles a las unidades, etc.

## Restricciones 
- El programa se limita a texto
- El programa se limita a ejecucion desde la terminal 
- El programa se limitara a una sola faccion, Space Marines, para evitar complejidad excesiva
- El programa incluira 4 o 5 unidades de cada tipo, para evitar complejidad excesiva
- El programa incluira 4 o 5 armas por tipo de unidad, para evitar complejidad excesiva
- La lista tiene un valor maximo de 1,000 puntos y un valor minimo de 500 puntos, caso contrario se retorna un error
- La lista debe tener un nombre asignado por el usuario, , caso contrario se retorna un error
- La lista debera incluir una unidad de tipo personaje por defecto, , caso contrario se retorna un error
- Armas asignadas a unidades no compatibles generaran un error en el programa

