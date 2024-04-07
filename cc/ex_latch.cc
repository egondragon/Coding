#include <iostream>
#include <thread>
#include <latch>

void worker(std::latch& l, int ID) {
    std::cout << "Thread " << ID << " started." << std::endl;
    std::this_thread::sleep_for(std::chrono::seconds(1));
    std::cout << "Thread " << ID << " ended." << std::endl;
    l.count_down();
}

int main() {
    constexpr int n_threads = 3;
    std::latch my_latch(n_threads);

    std::cout << "Thread started..." << std::endl;
    for (int i = 0; i < n_threads; ++i) {
        std::thread(worker, std::ref(my_latch), i).detach();
    }

    my_latch.wait();
    std::cout << "All threads did finish" << std::endl;

    return 0;
}
