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
    name: "Squats",
    machine: "Rack or Free",
    time: "15 min",
    difficulty: "Intermediate",
    type: "Strength",
    muscleGroup: "Legs",
    equipmentRequired: true,
    image: "images/squats.jpg"
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

const container = document.getElementById("exercise-container");

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

