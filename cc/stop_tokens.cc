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

int main() {
    std::jthread my_thread(async_task); // Crée un thread avec la fonction async_task

    // Attente d'une condition particulière (par exemple, 10 secondes)
    std::this_thread::sleep_for(std::chrono::seconds(10));

    // Arrêt de la tâche asynchrone en fonction de la condition spécifique
    my_thread.request_stop();

    my_thread.join(); // Attente que le thread se termine

    return 0;
}
