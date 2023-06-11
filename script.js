

const faq = [
  {
    question: "What is the process to apply for surveyor registration?",
    answer:
      "To apply for surveyor registration, you need to fill out an application form and submit it to the local surveyor registration board. The board will review your application and evaluate your qualifications and experience",
  },
  {
    question: "What documents are required for surveyor registration?",
    answer:
      "The required documents for surveyor registration typically include your educational certificates, proof of work experience, identification documents, and any additional certifications or licenses you may have.",
  },
  {
    question: "How long does the surveyor registration process take?",
    answer:
      "The duration of the surveyor registration process can vary depending on the local regulations and the workload of the registration board. It may take a few weeks to several months to complete the process.",
  },
  {
    question: "What is the land registration process?",
    answer:
      "The land registration process involves recording the ownership and legal rights associated with a piece of land. It typically includes verifying the title, conducting surveys, and updating the land records with the appropriate authorities.",
  },
  {
    question: "Can I register land as a surveyor?",
    answer:
      "As a surveyor, you are not directly involved in land registration. Your role is to provide accurate survey measurements and other related data to assist in the registration process.",
  },
];

const chatMessages = document.getElementById("chat-messages");
const questionInput = document.getElementById("question-input");
const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", handleQuestionSubmit);

// Display default questions
displayDefaultQuestions();

function displayDefaultQuestions() {
  const defaultQuestionsContainer = document.createElement("div");
  defaultQuestionsContainer.classList.add("default-questions");

  for (const item of faq) {
    const defaultQuestion = document.createElement("p");
    defaultQuestion.classList.add("default-question");
    defaultQuestion.textContent = item.question;
    defaultQuestion.addEventListener("click", () => {
      initiateChatWithDefaultQuestion(item.question);
    });
    defaultQuestionsContainer.appendChild(defaultQuestion);
  }

  chatMessages.appendChild(defaultQuestionsContainer);
}

function handleQuestionSubmit() {
  const question = questionInput.value;
  if (question.trim() !== "") {
    displayMessage(question, "user");
    getAnswer(question);
    questionInput.value = "";
  }
}

function initiateChatWithDefaultQuestion(question) {
  questionInput.value = question;
  handleQuestionSubmit();
}

function getAnswer(question) {
  // Simulating a server response delay
  setTimeout(() => {
    const answer = findAnswer(question);
    displayMessage(answer, "bot");
  }, 500);
}

function findAnswer(question) {
  const lowercaseQuestion = question.toLowerCase();
  for (const item of faq) {
    if (lowercaseQuestion.includes(item.question.toLowerCase())) {
      return item.answer;
    }
  }
  return "I'm sorry, but I don't have the answer to that question. You can contact jayaprakash.jaisankar@fssa.freshworks for further assistance.";
}

function displayMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
