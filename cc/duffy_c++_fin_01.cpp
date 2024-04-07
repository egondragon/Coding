// std::shared_ptr
#include <iostream>
#include <memory>

int main() {

    std::shared_ptr<double> sp1;
    std::shared_ptr<double> sp2(nullptr);

    std::shared_ptr<double> sp3(new double(148.413));
    std::shared_ptr<double> sp4(sp3);
    std::shared_ptr<double> sp5(sp4);

    // NB of shared owners
    std::cout << "SP2 shared # " << sp2.use_count() << std::endl;
    std::cout << "SP3 shared # " << sp3.use_count() << std::endl;
    std::cout << "SP4 shared # " << sp4.use_count() << std::endl;

    sp3 = sp2;
    std::cout << "SP3 shared # " << sp3.use_count() << std::endl;
    std::cout << "SP4 shared # " << sp4.use_count() << std::endl;


}
