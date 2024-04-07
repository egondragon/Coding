#include <iostream>
#include <string>

name: () -> std::string = {
 s: std::strin = "world";
 decorate(s);
 return s;
}
  
decorate: (inout s: std::string) =
  s = "[" + s "]";

auto main() -> int {
  std::cout << "Hello " << name() << std::endl;
}
