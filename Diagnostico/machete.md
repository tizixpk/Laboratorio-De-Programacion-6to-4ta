##1. Estructura Básica y Variables

| Concepto           | C++                | JavaScript (Moderno)   | Nota                                                     |
|--------------------|--------------------|------------------------|----------------------------------------------------------|
| Variable mutable   | `int x = 10;`      | `let x = 10;`          | `let` reemplaza a cualquier tipo (`int`, `double`, `string`). |
| Constante          | `const int X = 10;`| `const X = 10;`        | Úsala por defecto si el valor no va a cambiar.          |
| Salida             | `cout << "Hola";`  | `console.log("Hola");` | Muy similar a `printf` o `cout`.                        |
| Entrada            | `cin >> x;`        | `x = prompt();`        | Ojo: `prompt` siempre devuelve texto (`string`).        |

## Conversiones de tipos

| Acción            | C++            | JavaScript                         |
|-------------------|---------------|------------------------------------|
| String a Int      | `stoi(s)`     | `parseInt(s)` o `Number(s)`        |
| String a Float    | `stof(s)`     | `parseFloat(s)`                    |
| Número a String   | `to_string(n)`| `String(n)` o `n.toString()`       |
| Forzar número     | `(int)var`    | `+var` (truco rápido del + unario) |

## Funciones

| Característica   | C++                              | JavaScript                                   |
|------------------|----------------------------------|----------------------------------------------|
| Definición       | `int suma(int a, int b) { ... }` | `function suma(a, b) { ... }`                |
| Retorno          | `return a + b;`                  | `return a + b;`                              |
| Arrow Function   | N/A                              | `const suma = (a, b) => a + b;`              |

## Nota sobre Arrow Functions

Las **arrow functions** son muy usadas en JavaScript moderno, especialmente en callbacks y programación funcional.
