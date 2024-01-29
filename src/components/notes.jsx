const notes = [];

// Manually specify titles and contents
const titles = ["Note on Science", "History Summary", "Book Review", "Travel Diary", "Recipe Notes", "Workout Plan", "Meeting Minutes", "Learning JavaScript", "Gardening Tips", "Music Playlist"];
const contents = [
    "Physics concepts and theories.",
    "Overview of the World War II.",
    "Review of 'To Kill a Mockingbird'.",
    "Memories from my trip to Paris.",
    "Recipe for chocolate cake.",
    "Weekly workout routine plan.",
    "Minutes from the team meeting.",
    "Basics of JavaScript programming.",
    "How to care for roses.",
    "Favorite songs and artists."
];

for (let i = 0; i < 10; i++) {
    notes.push({
        key: i + 1,
        title: titles[i],
        content: contents[i]
    });
}

export default notes
