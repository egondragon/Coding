#include <iostream>

class Person  {
    int age;
    std::string sz_name;
public:
    Person() = default;
    
    // Move CTOR and move assignment are defined
    Person(Person&&) = default;
    Person& operator = (Person&&) = default;

    Person(const Person&) = delete;
    Person& operator = (const Person&) = delete;

    virtual ~Person() = default;

    void m_display() {
        std::cout << "I'm " << this->sz_name
                  << " and I'm " << this->age << " old" << std::endl;
    }
};

int main(int ac, char **av) {
    std::cout << "hi" << std::endl;
    return 0;
}
