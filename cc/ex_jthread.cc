#include <iostream>
#include <thread>
#include <stop_token>

void async_task(std::stop_token tok) {
    auto callback = tok.register_callback([] {
        std::cout << "Callback called !" << std::endl;
    });

    while (!tok.stop_requested()) {
        std::cout << "Async task is running..." << std::endl;
        std::this_thread::sleep_for(std::chrono::seconds(1));
    }

    std::cout << "Async task stopped !" << std::endl;
}

int main() {
    std::jthread my_thread(async_task);

    std::cout << "Thread ID: " << my_thread.get_id() << std::endl;

    // Specific condition
    std::this_thread::sleep_for(std::chrono::seconds(5));

    // Stop async task regarding specific condition
    my_thread.request_stop();

    std::cout << "Thread stopping asked ..." << std::endl;

    // Wait the thread end
    my_thread.join();
    std::cout << "Thread finished!" << std::endl;

    return 0;
}
