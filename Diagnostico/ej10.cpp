#include <iostream>
using namespace std;

float suma(float num1, float num2) {
    return num1 + num2;
}

float resta(float num1, float num2) {
    return num1 - num2;
}

float multiplicacion(float num1, float num2) {
    return num1 * num2;
}

float division(float num1, float num2) {
    if (num2 == 0) {
        cout << "Error: División por cero no permitida." << endl;
        return 0; // Devuelve 0 para evitar errores.
    }
    return num1 / num2;
}

int main() {
    int op;
    float num1, num2;

    do {
        cout << "------- MENU ------" << endl;
        cout << "1 - Suma" << endl;
        cout << "2 - Resta" << endl;
        cout << "3 - Multiplicacion" << endl;
        cout << "4 - Division" << endl;
        cout << "5 - Salir" << endl;
        cout << "Elige una opcion: ";
        cin >> op;

        if (op >= 1 && op <= 4) {
            cout << "Ingresa el primer numero: ";
            cin >> num1;
            cout << "Ingresa el segundo numero: ";
            cin >> num2;
        }

        switch (op) {
            case 1:
                cout << "Resultado: " << suma(num1, num2) << endl;
                break;
            case 2:
                cout << "Resultado: " << resta(num1, num2) << endl;
                break;
            case 3:
                cout << "Resultado: " << multiplicacion(num1, num2) << endl;
                break;
            case 4:
                cout << "Resultado: " << division(num1, num2) << endl;
                break;
            case 5:
                cout << "Saliendo del programa..." << endl;
                break;
            default:
                cout << "Opción no válida. Intenta de nuevo." << endl;
        }
    } while (op != 5);

    return 0;
}
