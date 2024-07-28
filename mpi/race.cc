#include <iostream>
#include <unistd.h>
#include <mpi.h>

int main(int ac, char **av) {
  MPI_Init(&ac, &av);

  MPI_Request req;
  MPI_Status status;
  int req_complete = 0;
  
  int rank;
  int size;

  MPI_Comm_rank(MPI_COMM_WORLD, &rank);
  MPI_Comm_size(MPI_COMM_WORLD, &size);

  constexpr int buffer_count = 10;
  int buffer[buffer_count];

  if (rank == 0) {
    std::cout << "Pcs 0 is sending : ";
    for (int i = 0; i < buffer_count; ++i) {
      buffer[i] = i * i;
      std::cout << buffer[i] << " ";
    }
    std::cout << std::endl;

    // Sending the data and wait for 5 secs
    MPI_Isend(buffer, buffer_count, MPI_INT, 1, 0, MPI_COMM_WORLD, &req);
    sleep(5);
  } else {
    // Reset the buffer
    for (int i = 0; i < buffer_count; ++i) {
      buffer[i] = 0;
    }
    MPI_Irecv(buffer, buffer_count, MPI_INT, 0, 0, MPI_COMM_WORLD, &req);
    sleep(5);

    // Print the buffer recv by process 1
    int ite = 0;
    std::cout << "Process 1 received: ";
    for (int i = 0; i < buffer_count; ++i) {
      std::cout << buffer[i] << " ";
    }
    std::cout << std::endl;    
  }
  MPI_Finalize();
}
