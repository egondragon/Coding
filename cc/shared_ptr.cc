#include <iostream>
#include <memory>
#include <string>
#include <vector>
#include <boost/pool/pool_alloc.hpp>


struct Point2D {
    double x, y;

    Point2D(): x(0.0), y(0.0) {}
    Point2D(double xVal, double yVal): x(xVal), y(yVal) {}

    void m_display() const {
        std::cout << "(" << x << "," << y << ")" << std::endl;
    }

    ~Point2D() {
        std::cout << "Point destroyed" << std::endl;
    }
};

int main(int ac, char **av) {
    std::vector<std::string> msg {
        "hello",
        "c++",
        "world",
        "from",
        "vs code",
        "and the c++ extension"
    };

    // Construction of shared pointers
    auto sp = std::make_shared<int>(42);
    (*sp)++;
    std::cout << "sp: " << *sp << std::endl;

    auto sp2 = std::make_shared<Point2D>(-1.0, 2.0);
    (*sp2).m_display();

    auto sp3 = std::make_shared<Point2D>();
    (*sp3).m_display();
    
    auto sp4 = std::allocate_shared<int>(std::allocator<int>(), 42);
    (*sp4)++;    
    std::cout << "sp4: " << *sp4 << std::endl;

    auto sp5 = std::allocate_shared<Point2D>(std::allocator<int>(), -1.0, 2.0);    
    (*sp5).m_display();

    // Boost pool allocator
    auto sp6 = std::allocate_shared<Point2D>(
        boost::pool_allocator<Point2D>(), 
        14.45, 28.45
    );
    (*sp6).m_display();

    std::cout << "sp4: " << *sp4 << std::endl;


    try {
        // Unique ptrs
        // Stored lambda function as deleter
        auto deleter = [](double *p) {
            std::cout << "Bye, bye, unique ptr" << std::endl;
            delete p;
        };
        std::unique_ptr<double> sp32(new double(148.413), deleter);
        throw -1;
    } catch (int &n) {
        std::cout << "Error but memory is cleaned up" << std::endl;
    }
    
    return 0;
}
