#include <iostream>
using namespace std;
float suma ( float num1,float num2) {
    cout << "ingresa los dos numeros";
    cin >> num1;
    cin >> num2;
    return num1 + num2;
}
float resta (float num1,float num2){
    cout << "ingresa los dos numeros";
    cin >> num1;
    cin >> num2;
    return num1 - num2;
}
float multiplicacion (float num1, float num2) {
    cout << "ingresa los dos numeros";
    cin >> num1;
    cin >> num2;
        return num1 * num2;
}
float division (float num1,float num2) {
    cout << "ingresa los dos numeros";
    cin >> num1;
    cin >> num2;
        return num1 /num2 ;
}
int main() {
    int op ;
    float num1;
    float num2;
    do {
        cout << "------- MENU ------" << endl;
        cout << "1 - suma" << endl;
        cout << "2 - Resta " << endl;
        cout << "3 - Division" << endl; 
        cout << "4 - Multiplicacion" << endl;
        cin >> op;
        if ( op == 1) cout << suma(num1,num2);
        if ( op == 2) cout << resta(num1,num2);
        if ( op == 3) cout << multiplicacion(num1,num2);
        if ( op == 4) cout << division(num1,num2);
    }while(op==0);
    return 0;
}
