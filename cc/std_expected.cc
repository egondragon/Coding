#include <iostream>
#include <expected>

std::expected<double, parse_error>
double parse_number(std::string_view& sz_double) {
    const char* begin = sz.data();
    char* end;
    double retval = std::strtod(begin, &end);

    if (begin == end) {
        return std::unexpected(invalid_char);
    } else if (retval == HUGE_VAL) {
        return std::unexpected(overflow);
    }

    str.remove_prefix(end - begin);
    return retval;
}

int main(int ac, char **av) {
    std::string_view src = "meow";
    double num = parse_number(src);
    std::cout << num << std::endl;

    return 0;
}
