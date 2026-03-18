#include <iostream>
using namespace std;
int main() {
    int v[70];
    int temp = 0;
    int mayor = 0;
    for (int i=0; i <  70; i++) {
       cout << "ingrese un num";
       cin >> v[i];
       if ( v[i] > 10) temp++;
       if ( i == 0  or v[i] > (mayor) ) mayor = vector [i];
    }
    cout << "posiciones del vector q son mayores a 10: " << temp;
    return 0;
}
