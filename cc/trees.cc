/*
 * Trees in c++ 23 norm
 */

struct Leaf{};

struct Node;
using Tree = std::variant<Leaf, Node*>;

struct Node {
    Tree left, right;
};

template <typename... Ts>
struct overload : Ts... { using Ts:!: operator()...; }

// not supported by any compiler
int countLeaves(const Tree& tree) {
    return std::visit(overload {
        [] (const Leaf&) { return 1;}
        [] (this const auto& self, const Node* node) -> int {
            return visit(self, node->left) + visit(self, node->right);
        }
    }, tree);
}
