// Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

// Exercise Page
const exercises = [
  {
    name: "Bench Press",
    machine: "Bench + Barbell",
    time: "10 min",
    difficulty: "Intermediate",
    type: "Strength",
    muscleGroup: "Chest",
    equipmentRequired: true,
    image: "images/bench-press.jpg"
  },
  {
    name: "Treadmill Running",
    machine: "Treadmill",
    time: "20 min",
    difficulty: "Beginner",
    type: "Cardio",
    muscleGroup: "Full Body",
    equipmentRequired: true,
    image: "images/running.jpg"
  },
  {
    name: "Push-Ups",
    machine: "None",
    time: "5 min",
    difficulty: "Beginner",
    type: "Strength",
    muscleGroup: "Chest / Arms",
    equipmentRequired: false,
    image: "images/push-up.jpg"
  },
  {
    name: "Pull-up",
    machine: "Pull Up Bar",
    time: "10 min",
    difficulty: "Intermediate",
    type: "Strength",
    muscleGroup: "Back",
    equipmentRequired: true,
    image: "images/pull-up.jpg"
  },
  {
    name: "Plank",
    machine: "Mat",
    time: "3 min",
    difficulty: "Intermediate",
    type: "Core",
    muscleGroup: "Abs",
    equipmentRequired: false,
    image: "images/plank.jpg"
  },
  {
    name: "Bicep Curl",
    machine: "Dumbbells or Cable Machine",
    time: "6 min",
    difficulty: "Beginner",
    type: "Strength",
    muscleGroup: "Arms",
    equipmentRequired: true,
    image: "images/biceps.jpg"
  },
  {
    name: "Jump Rope",
    machine: "None",
    time: "10 min",
    difficulty: "Intermediate",
    type: "Cardio",
    muscleGroup: "Full Body",
    equipmentRequired: true,
    image: "images/jump-rope.jpg"
  },
  {
    name: "Squats",
    machine: "None",
    time: "12 min",
    difficulty: "Intermediate",
    type: "Strength",
    muscleGroup: "Legs",
    equipmentRequired: true,
    image: "images/squats.jpg"
  },
  {
    name: "Bulgarian Squats",
    machine: "None",
    time: "7 min",
    difficulty: "Advanced",
    type: "Cardio / Strength",
    muscleGroup: "Legs",
    equipmentRequired: true,
    image: "images/bulgarian-squats.jpg"
  }
];

// Reference to the container
const container = document.getElementById("exercise-container");

// Create cards for each exercise
exercises.forEach(exercise => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
      <img src="${exercise.image}" alt="${exercise.name}" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;">
      <h2>${exercise.name}</h2>
      <p><strong>Machine:</strong> ${exercise.machine}</p>
      <p><strong>Time:</strong> ${exercise.time}</p>
      <p><strong>Difficulty:</strong> ${exercise.difficulty}</p>
      <p><strong>Type:</strong> ${exercise.type}</p>
      <p><strong>Muscle Group:</strong> ${exercise.muscleGroup}</p>
      <p><strong>Equipment:</strong> ${exercise.equipmentRequired ? "Yes" : "No"}</p>
      <button class="btn">Start Exercise</button>
      <button class="btn">☆ Add to Favorites ☆</button>
      `;
  container.appendChild(card);
});


// Function for clean and show only filtered exercises
function filterExercisesByMuscle(muscle) {
  container.innerHTML = "";

  const filtered = muscle === "All" ? exercises :
    exercises.filter(ex => ex.muscleGroup.toLowerCase().includes(muscle.toLowerCase()));

  if (filtered.length === 0) {
    container.innerHTML = "<p>No exercises found for that muscle group.</p>";
    return;
  }

  filtered.forEach(exercise => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${exercise.image}" alt="${exercise.name}" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;">
      <h2>${exercise.name}</h2>
      <p><strong>Machine:</strong> ${exercise.machine}</p>
      <p><strong>Time:</strong> ${exercise.time}</p>
      <p><strong>Difficulty:</strong> ${exercise.difficulty}</p>
      <p><strong>Type:</strong> ${exercise.type}</p>
      <p><strong>Muscle Group:</strong> ${exercise.muscleGroup}</p>
      <p><strong>Equipment:</strong> ${exercise.equipmentRequired ? "Yes" : "No"}</p>
      <button class="btn">Start Exercise</button>
      <button class="btn">☆ Add to Favorites ☆</button>
    `;
    container.appendChild(card);
  });
}

// Event listeners for each muscle group
const muscleFilters = ["All", "Chest", "Arms", "Legs", "Back", "Abs", "Full Body"];

muscleFilters.forEach(muscle => {
  const id = muscle.toLowerCase().replace(" ", "");
  document.getElementById(id).addEventListener("click", (event) => {
    event.preventDefault();
    filterExercisesByMuscle(muscle);
  });
});

//Instead of doing all this chunck of code i used a loop instead
// document.getElementById("all").addEventListener("click", (event) => {
//   event.preventDefault();
//   filterExercisesByMuscle("All");
// });
// document.getElementById("chest").addEventListener("click", (event) => {
//   event.preventDefault();
//   filterExercisesByMuscle("Chest");
// });
// document.getElementById("arms").addEventListener("click", (event) => {
//   event.preventDefault();
//   filterExercisesByMuscle("Arms");
// });
// document.getElementById("legs").addEventListener("click", (event) => {
//   event.preventDefault();
//   filterExercisesByMuscle("Legs");
// });
// document.getElementById("back").addEventListener("click", (event) => {
//   event.preventDefault();
//   filterExercisesByMuscle("Back");
// });
// document.getElementById("abs").addEventListener("click", (event) => {
//   event.preventDefault();
//   filterExercisesByMuscle("Abs");
// });
// document.getElementById("fullbody").addEventListener("click", (event) => {
//   event.preventDefault();
//   filterExercisesByMuscle("Full Body");
// });

// Show all exercises by default when the page loads
filterExercisesByMuscle("All");

//create objects for handeling events
// const chest = document.getElementById('chest');
// const arms = document.getElementById('arms');
// const legs = document.getElementById('legs');
// const back = document.getElementById('back');
// const abs = document.getElementById('abs');
// const fullbody = document.getElementById('fullbody');

// fullbody.addEventListener("click", () => {
//   createTemplesCards(exercises); 
//   title.innerHTML ='Fullbody'
// });