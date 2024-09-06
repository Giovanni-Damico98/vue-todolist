const { createApp } = Vue;
createApp({
  data() {
    return {
      // Lista di todo iniziale
      todoList: [
        {
          text: "Fare i compiti",
          done: false,
        },
        {
          text: "Fare la spesa",
          done: true,
        },
        {
          text: "Pagare l'assicurazione",
          done: false,
        },
        {
          text: "Andare in palestra",
          done: true,
        },
      ],
      // Valori per il nuovo task
      newTaskText: "", // Testo del nuovo task
      newTaskDone: false, // Stato del nuovo task (true o false)
    };
  },
  methods: {
    // Funzione per aggiungere un nuovo task
    addTask() {
      if (this.newTaskText.trim() !== "") {
        // Aggiungi il nuovo task alla lista
        this.todoList.push({
          text: this.newTaskText,
          done: this.newTaskDone,
        });
        // Resetta gli input dopo aver aggiunto
        this.newTaskText = "";
        this.newTaskDone = false;
      }
    },
    // Funzione per rimuovere il task
    removeTask(index) {
      this.todoList.splice(index, 1);
    },
    toggleDone(index) {
      this.todoList[index].done = !this.todoList[index].done;
    },
  },
}).mount("#app");
