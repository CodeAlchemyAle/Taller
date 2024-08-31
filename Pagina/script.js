const aboutText = document.getElementById('about-text');
const addAbout = document.getElementById('add-about');
const editAbout = document.getElementById('edit-about');
const deleteAbout = document.getElementById('delete-about');


function addAboutText() {
  aboutText.innerHTML += '<p>Nuevo texto aquí</p>'; 
}

function editAboutText() {
}

function deleteAboutText() {
  aboutText.innerHTML = ''; 
}

addAbout.addEventListener('click', addAboutText);
editAbout.addEventListener('click', editAboutText);
deleteAbout.addEventListener('click', deleteAboutText);
// ... (Existing code from previous response)

// Skills Section
const skillsList = document.getElementById('skills-list');
const addSkill = document.getElementById('add-skill');
const editSkill = document.getElementById('edit-skill');
const deleteSkill = document.getElementById('delete-skill');

// Function to add a new skill
function addSkillText() {
  const newSkillItem = document.createElement('li');
  newSkillItem.textContent = 'Nueva habilidad aquí'; // Placeholder text
  skillsList.appendChild(newSkillItem);
}

// Function to edit a skill 
function editSkillText() {
  // This function is a bit more complex as it needs to identify 
  // which skill to edit. You'll need to add logic to:
  // 1. Allow the user to select the skill to edit 
  // 2. Update the content of the selected skill 
}

// Function to delete a skill
function deleteSkillText() {
  // You'll need to implement logic here to:
  // 1. Allow the user to select the skill to delete
  // 2. Remove the selected skill from the list
}

// Event listeners for the skills buttons
addSkill.addEventListener('click', addSkillText);
editSkill.addEventListener('click', editSkillText);
deleteSkill.addEventListener('click', deleteSkillText);

// ... (Rest of your JavaScript code)
