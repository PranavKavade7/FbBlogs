// Function to save content to localStorage
function saveContent(id) {
    const content = document.getElementById(id).innerHTML;
    localStorage.setItem(id, content);
}

// Function to load content from localStorage
function loadContent(id) {
    const savedContent = localStorage.getItem(id);
    if (savedContent) {
        document.getElementById(id).innerHTML = savedContent;
    }
}

// List of element IDs to be saved
const editableFields = ['blog-title', 'intro-text', 'intro-text-2', 'experience-text', 'social-life-text', 'about-text'];

// Load saved content when the page loads
window.onload = function() {
    editableFields.forEach(id => {
        loadContent(id);
    });
};

// Save content when editing is done
editableFields.forEach(id => {
    document.getElementById(id).addEventListener('blur', () => {
        saveContent(id);
    });
});
