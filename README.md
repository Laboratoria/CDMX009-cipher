# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Primer proyecto. PASSWORD CIPHER](#6-primer-proyecto-password-cipher)

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Resumen del proyecto

¿Qué tengo que hacer exactamente? En este proyecto crearás la primera aplicación
web del _bootcamp_. Servirá para que el usuario pueda cifrar y descifrar un
texto indicando un desplazamiento específico de caracteres (_offset_).

La temática es libre. Tú debes pensar en qué situaciones de la vida real se
necesitaría cifrar un mensaje y pensar en cómo debe ser esa experiencia de uso
(qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc. Algunas ideas de
ejemplo:

* Crear claves seguras para el email.
* Encriptar/cifrar una tarjeta de crédito.
* Herramienta de mensajería interna de una organización de derechos humanos en
  una zona de conflicto.
* Mensajería secreta para parejas.

## 3. Objetivos de aprendizaje

El objetivo principal de aprendizaje es adquirir experiencia desarrollando
aplicaciones web (WebApp) que interactúen con el usuario a través del navegador
y la lógica, utilizando HTML5, CCS3 y JavaScript como herramientas.

Reflexiona y luego marca los objetivos que has llegado a **entender** y **aplicar** en tu proyecto.

### UX

- [X] Diseñar la aplicación pensando y entendiendo al usuario.
- [X] Crear prototipos para obtener feedback e iterar.
- [X] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).

### HTML y CSS

- [X] Uso correcto de HTML semántico.
- [X] Uso de selectores de CSS.
- [X] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM

- [X] Uso de selectores del DOM.
- [X] Manejo de eventos del DOM.
- [X] Manipulación dinámica del DOM.

### Javascript

- [X] Manipulación de strings.
- [ ] Uso de condicionales (if-else | switch).
- [X] Uso de bucles (for | do-while).    
- [X] Uso de funciones (parámetros | argumentos | valor de retorno).
- [X] Declaración correcta de variables (const & let).

### Testing
- [ ] Testeo de tus funciones.

### Git y GitHub
- [X] Comandos de git (add | commit | pull | status | push).
- [X] Manejo de repositorios de GitHub (clone | fork | gh-pages).

### Buenas prácticas de desarrollo
- [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica).
- [ ] Uso de linter para seguir buenas prácticas (ESLINT).


## 4. Consideraciones generales

* Este proyecto se debe resolver de manera individual.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando GitHub pages. Si no sabes lo que es GitHub, no
  te preocupes, lo aprenderás durante este proyecto.
* Tiempo para completarlo: Toma como referencia 2 semanas. Trabaja durante el
  primer Sprint (una semana) y al final, trata de fijar un estimado de cuándo lo
  terminarás.

## 5. Criterios de aceptación mínimos del proyecto

Usa este alfabeto simple (solamente mayúsculas y sin ñ).

* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

La interfaz debe permitir al usuario:

* Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que
  el cifrado desplace cada caracter.
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.



# Primer Proyecto: PassWord Cipher


Es una aplicación que ayuda al usuario a crear contraseñas seguras para sus redes sociales utilizando el Cifrado César, el usuario puede cifrar y descifrar su contraseña utilizando una sencilla interfaz.


	
![prototipo sobre papel](https://github.com/YazTepRod/CDMX009-cipher/blob/master/src/prototipo%20sobre%20papel.jpg)



# Investigación UX

El usuario para el que va dirigida esta aplicación, a aquellos que cuentan con diversas RR.SS y desean mantener sus contraseñas seguras.

# Objetivos:
Darle al usuario una herramienta que mantenga seguras sus contraseñas para RR.SS
Permitir una experiencia de una interfaz sencilla y fácil de manejar.

# ¿Cómo resuelve el problema del usuario?

Ayuda al usuario a mantener sus contraseñas seguras, evita que terceros puedan tener acceso a ellas, el usuario solo debe de recordar el número de desplazamientos con la que creo su contraseña. 


# Resumen de Feedback:

(Sobre primer prototipo)
De acuerdo al feedback recibido realice los siguientes cambios:

•	Disminuir el número de pantallas a sólo 5 

•	Cambiar posición de botones y reducirlos a 2 para que el usuario pudiera hacer menos clicks posibles

•	En el menú, cambiar la numeración por RadioBotton.

•	Agregar un botón para salir de la App.


![prototipo final](https://github.com/YazTepRod/CDMX009-cipher/blob/master/src/prototipo%20final.png)
