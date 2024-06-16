document.getElementById('activity-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const activity = document.getElementById('activity').value;
    const duration = parseInt(document.getElementById('duration').value);
    
    const activityList = document.getElementById('activity-list');
    const newActivity = document.createElement('li');
    
    const caloriesBurned = calculateCalories(activity, duration);
    
    newActivity.textContent = `${activity} - ${duration} minutes - ${caloriesBurned} 🔥 calories burned`;
    activityList.appendChild(newActivity);
  
    updateRecommendations(duration);
  
    document.getElementById('activity-form').reset();
  });
  
  function calculateCalories(activity, duration) {
    const caloriesPerMinute = {
        'Running': 10,
        'Cycling': 8,
        'Swimming': 9,
        'Walking': 4,
        'Gym Workout': 7,
        'Yoga': 3
    };
    return caloriesPerMinute[activity] * duration;
  }
  
  function updateRecommendations(duration) {
    const recommendationText = document.getElementById('recommendation-text');
    
    if (duration < 30) {
        recommendationText.textContent = "Great start! Try to aim for at least 30 minutes of exercise a day.";
    } else if (duration < 60) {
        recommendationText.textContent = "Good job! Keep up the good work and aim for 60 minutes for optimal benefits.";
    } else {
        recommendationText.textContent = "Excellent! You're exceeding the recommended daily exercise time. Keep it up!";
    }
  }
  