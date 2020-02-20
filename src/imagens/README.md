# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker Edition](#6-hacker-edition)
* [7. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

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

- [x ] Diseñar la aplicación pensando y entendiendo al usuario.
- [ x] Crear prototipos para obtener feedback e iterar.
- [ x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).

### HTML y CSS

- [x ] Uso correcto de HTML semántico.
- [x ] Uso de selectores de CSS.
- [ ] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM

- [ ] Uso de selectores del DOM.
- [ x] Manejo de eventos del DOM.
- [ ] Manipulación dinámica del DOM.

### Javascript

- [x ] Manipulación de strings.
- [x ] Uso de condicionales (if-else | switch).
- [ x] Uso de bucles (for | do-while).    
- [ x] Uso de funciones (parámetros | argumentos | valor de retorno).
- [ x] Declaración correcta de variables (const & let).

### Testing
- [ x] Testeo de tus funciones.

### Git y GitHub
- [ x] Comandos de git (add | commit | pull | status | push).
- [x ] Manejo de repositorios de GitHub (clone | fork | gh-pages).

### Buenas prácticas de desarrollo
- [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica).
- [ ] Uso de linter para seguir buenas prácticas (ESLINT).


**`README.md`**

Pasword Creater

Es una aplicación que crea contraseñas de alta seguridad para los colaboradores de una empresa.

![passwordcreater](src="./imagens/passwordcreater.png") imagen
Esta aplicación es de uso empresarial con el objetivo de generar contraseñas de alta seguridad para cada colaborador, ya que cada inicio de mes hay que hacer cambio de esta.

Los colaboradores reciben en sus correos  una palabra  y el número de offset a introducir en la app de Password Creater y de manera inmediata obtendrán su contraseña.

 ![sketch](scr="./imagens/sketch.jpg")

Durante la sesiones de feedback me pidieron que explicara como el usuario sabria que número de ofsset a utilizar, por lo cual se deja en claro que este es indicado así como la palabra en el correo eléctronico de cada usuario. En la aplicación solo se introduce los datos indicados. También se hace las especificaciones de que solo se aceptan las letras mayúsculas.

![prototipo](src="./imagens/prototipo.png")
