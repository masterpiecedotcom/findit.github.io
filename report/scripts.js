document.addEventListener('DOMContentLoaded', () => {
    const reportForm = document.getElementById('reportForm');
    const searchForm = document.getElementById('searchForm');

    if (reportForm) {
        reportForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Lost item reported successfully!');
            reportForm.reset();
        });
    }

    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const searchResults = document.getElementById('searchResults .grid');
            searchResults.innerHTML = '<p>No results found. (This is just a demo, search functionality not implemented.)</p>';
        });
    }
});
