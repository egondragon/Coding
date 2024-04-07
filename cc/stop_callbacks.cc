#include <iostream>
#include <thread>
#include <stop_token>

void callback_func() {
    std::cout << "Callback done" << std::endl;
}

void async_task(std::stop_token tok) {
    // record a callback to be called when stop_token is requested
    auto callback = tok.register_callback(callback_func);
    while (!tok.stop_requested()) {
        std::cout << "Async task running..." << std::endl;
        std::this_thread::sleep_for(std::chrono::seconds(1));
    }

    // This callback  is automatically canceled when stop token is destroyed
    std::cout << "Async task stopped !" << std::endl;
}

int main(int ac, char **av) {
    std::jthread my_thread(async_task);

    // Wait for a specific conditiion
    std::this_thread::sleep_for(std::chrono::seconds(5));

    // Stop the async tsk on a condition
    my_thread.request_stop();
    my_thread.join();

    return 0;
}
