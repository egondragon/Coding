#include <iostream>
#include <memory>

class Point2D {
    int x;
    int y;
    
public:
    Point2D() {
        std::cout << "Constructor called" << std::endl;
    }

    ~Point2D() {
        std::cout << "Destructor called" << std::endl;
    }

    void m_display() {
        std::cout << "Hi, I am Point2D class" << std::endl;
    }
};

int main(int ac, char **av) {
    // create an unique ptr pointing on Point2D class
    std::unique_ptr<Point2D> p1(new Point2D());

    // Use deref operator to call some method
    p1->m_display();

    // transfer the property to another unique_ptr
    std::unique_ptr<Point2D> p2 = std::move(p1);

    // Try to access via the old unique_ptr
    // but this one is not valid anymore
    p1->m_display(); // shouldn't compile

    // p2 => ok
    p2->m_display();

    // automatic deletion of memory when p2 is out of scope
    return 0;
}

