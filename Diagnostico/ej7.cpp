#include <iostream>
using namespace std;
int main() {
    int v[10];
    for (int i=0; i < 10; i++) {
       cout << "ingrese un num";
       cin >> v[i];
       v[i] = v[i] * 10;
    }
     for (int i=0; i < 10; i++) {
        cout<< "fila" << i << v[i] << endl;
     }
    return 0;
}
