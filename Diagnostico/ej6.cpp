#include <iostream>
using namespace std;
int main() {
    int num;
    do {
        cout << "ingresa un numero";
        cin >> num;
        for (int i=0; i < num;i++){
            cout << i << endl;
        }
    }while(num ==0);
    return 0;
}
