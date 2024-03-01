# 📕 Mattel® See ‘N’ Say Storymaker
Emulating a Classic Toy with a Web App

### 🚀 Feature
- By clicking the button, the built-in TextToSpeech API will read the words aloud (in every browser except MSIE – but Edge is fine).
- There are 5 buttons – each one will pick a random phrase.
- "Play story" button that concatenates those five words and reads out loud.
- "Random story" button that generates a random story with one click.
- A reset button so that another story can be created

### 💭 Process
At first, use an approach that adds new \<p> to HTML, and delete that \<p> when refreshing it. However, it causes conflict because they also delete \<div> to store a newly selected phrase. Therefore, I changed an approach that set \<p> beforehand and updated it instead of adding and deleting multiple times.

### 🗒 Learning
<ul>
  <li>Reset button function</li>
  <li>Make it only accept one word at a time</li>
</ul>


### 💻 Running the Project
Visit the website and have some fun!! :rainbow:  <https://ianteddy.github.io/Story-maker-book/> <br/>
:warning: Don't forget to unmute audio to listen the sound


### 🎥 Vide

https://github.com/IanTeddy/Story-maker-book/assets/136382277/2501728b-ece9-47cc-b938-95acf7709aa3
