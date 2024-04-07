#include <iostream>
#include <memory>

template <typename T>
struct Deleter {
    void operator() (T *t) const {
        std::cout << "Delete memory from function object" << std::endl;
        delete t;
    }
};

int main(int ac, char **av) {
    std::shared_ptr<double> sp1;
 
    std::shared_ptr<double> sp2(nullptr);

    // Deleter as function object
    std::shared_ptr<double> sp31(new double(148.413), Deleter<double>());

    // Deleter as lambda
    std::shared_ptr<double> sp32(new double(148.413), [](double* p) {
        std::cout << "Bye" << std::endl;
        delete p;
    });
    
    auto deleter = [](double *p) {
        std::cout << "Bye" << std::endl;
        delete p;
    };

    std::shared_ptr<double> sp33(new double(148.413), deleter);
    std::shared_ptr<double> sp5(sp4);

    // The number of shared owners
    std::cout << "SP2 shared: " << sp2.use_count() << std::endl;    
    std::cout << "SP3 shared: " << sp3.use_count() << std::endl;    
    std::cout << "SP4 shared: " << sp4.use_count() << std::endl;    

    sp3 = sp2;

    std::cout << "SP3 shared: " << sp3.use_count() << std::endl;    
    std::cout << "SP4 shared: " << sp4.use_count() << std::endl;    

    return 0;
}
