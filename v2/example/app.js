const app = new Vue({
  el: "#app",
  data: {
    message1: "Hello, Vue!",
    message2: "You loaded this page on " + new Date().toLocaleString(),
    seen: true,
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ],
    messageToBeReversed: "Hello, Vue!",
    messageModel: "Edit this message",
  },
  methods: {
    reverseMessage() {
      this.messageToBeReversed = this.messageToBeReversed
        .split("")
        .reverse()
        .join("");
    },
  },
});
