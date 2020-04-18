export default function speakText(text) {
    const message = new SpeechSynthesisUtterance();
    message.lang = "en-US";
    message.text = text;
    window.speechSynthesis.speak(message);
  }