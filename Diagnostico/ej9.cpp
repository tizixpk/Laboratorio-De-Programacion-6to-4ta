#include <iostream>
using namespace std;
float doble(float n) { 
    return n * 2;
}
int main() {
    float x;
    cout << "Ingrese un num";
    cin >> x;
    cout << "su doble es " << doble(x);
    return 0;
}
