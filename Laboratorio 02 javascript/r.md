# objetos - oral

## 📌 1. Array de productos
Tengo un array de objetos.  
Cada objeto representa un producto con:
- nombre
- categoria
- precio
- stock

---

## 📌 2. Obtener nombres (map manual)
Recorro el array con un `for` y guardo solo la propiedad `nombre` en un nuevo array.

🔑 Claves:
- Uso `i` para recorrer
- Devuelvo un array nuevo

---

## 📌 3. Filtrar por categoría
Uso un `for` y un `if` para comparar la categoría.  
Si coincide, guardo el producto en otro array.

🔑 Claves:
- `if (categoria === ...)`
- Uso `j` para llenar el nuevo array

---

## 📌 4. Productos sin stock
Es igual al anterior, pero filtro los que tienen `stock === 0`.

💬 Frase pro:
“Estoy aplicando un filtro manual con un for”

---

## 📌 5. Valor total del inventario
Recorro el array y acumulo en una variable el resultado de:
precio * stock

🔑 Claves:
- Variable acumuladora (`total`)
- Uso `+=`

---

## 📌 6. Producto más caro
Supongo que el primero es el más caro.  
Luego comparo con los demás:
- Si encuentro uno más caro → lo reemplazo

💬 Frase pro:
“Uso una comparación iterativa”

---

# 💣 FRASES QUE SUMAN PUNTOS
- Estoy recorriendo el array secuencialmente
- Genero un nuevo array sin modificar el original
- Uso una variable acumuladora
- Aplico una condición con `if`

---

