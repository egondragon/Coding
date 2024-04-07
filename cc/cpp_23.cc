#include <iostream>

/*
struct X {
    T &value() &;
    const T& value() const&;
    T&& value() &&;
    const T&& value() const&&;
};

struct X {
    T &value(this X&);
    const T& value(this const X&);
    T&& value(this X&&);
    const T&& value(this  const X&&);
};
*/

// CRTP
template <typename Derived>
struct Incrementable {
    Derived& operator++() {
        auto& self = static_cast<Derived&>(*this);
        self.setValue(self.getValue( + 1));
        return self;
    }

    Derived& operator++() {
        auto& self = static_cast<Derived&>(*this);
        Derived tmp = self;
        self.setValue(self.getValue( + 1));
        return tmp;
    }
};

struct Counter: Incrementable<Counter> {
    std::size_t getValue() const;
    void setValue(std::size_t newValue);
private:

};

struct Age: Incrementable<Counter> {
    Age(unsigned short value);
    unsigned short getValue() const;
    void setValue(unsigned short newValue);
private:

};


int main(int ac, char **av) {
    Counter c;
    ++c;
    std::cout << c.value << std::endl;

    auto f = [](this auto &&self, int i) {
        if (i == 0) {
            return 1;
        }
        return i * self(i - 1);
    }

    std::cout << f(5) << std::endl;

    return 0;
}
