#include <iostream>

template<typename T>
concept SupportsLessThan = requires (T x) { x < x; }

template<typename T>
requires std::copyable<T> && SupportsLessThan<T>
T mymax(T a, T b) {
    return b < a ? a : b;
}

template<typename T1, typename T2>
void print(const T1 &val1, const T2& val2) {
    std::cout << val1 << ' ' << val2 << std::endl;
}

int main(int ac, char **av) {
    int i1 = 42;
    int i2 = 77;

    std::cout << mymax(i1, i2) << std::endl;
    std::cout << mymax(0.7, 33.4) << std::endl;

    std::complex<double> c1, c2;
    std::cout << mymax(c1, c2);

    std::atomic<double> a1{8}, a2{15};
    std::cout << mymax(a1, a2);
#if 0    
    std::string s{"hi"};
    std::string t{"world"};

    std::cout << mymax(s, t) << std::endl;

    std::string col1{"HiWorld"};
    for (const auto& item: col1) {
        std::cout << item << std::endl;
    }
#endif

    return 0;
}
