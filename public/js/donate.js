function closemodal() {
    document.getElementById('bookDescriptionModal').classList.add('hidden');
}     

document.getElementById('triggerBookModal').addEventListener('click', function () {
    document.getElementById('bookDescriptionModal').classList.remove('hidden');
});

function changeInterestCount() {
    var interestCountDiv = document.getElementById('interestCount');
    // This is where you define what the new text should be
    var newText = '1 people is interested'; // Update this as needed

    // Change the text of the div
    interestCountDiv.textContent = newText;

    closemodal();
}     