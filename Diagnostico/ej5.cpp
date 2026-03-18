#include <iostream>
using namespace std;
int main() {
    char l; int a=0, b=0;
    for(int i=0; i<20; i++) {
        cin >> l;
        if(l=='A' || l=='a') a++;
        if(l=='B' || l=='b') b++;
    }
    cout << "A: " << a << " B: " << b << endl;
    if(a > b) cout << "Mas A";
    else if(b > a) cout << "Mas B";
    return 0;
}
