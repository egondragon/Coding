#include <iostream>
#include <thread>
#include <stop_token>

void async_task(std::stop_token token) {
    while (!token.stop_requested()) {
        // Effectue le travail de la tâche asynchrone
        std::cout << "Tâche asynchrone en cours..." << std::endl;
        std::this_thread::sleep_for(std::chrono::seconds(1));
    }
    std::cout << "Tâche asynchrone arrêtée !" << std::endl;
}

void stoppable(std::token st) {
    while (!st.stop_requested()) {
        std::cout << "stoppable is running" << std::endl;
    }
}

void stopper(std::stop_source src) {
    while (!done()) {
        std::cout << "stopper is running" << std::endl;
    }
    src.request_stop();
}

int main() {
    std::jthread my_thread(async_task); // Crée un thread avec la fonction async_task

    std::this_thread::sleep_for(std::chrono::seconds(5)); // Attend quelques secondes

    my_thread.request_stop(); // Demande l'arrêt du thread

    my_thread.join(); // Attente que le thread se termine

    return 0;
}
