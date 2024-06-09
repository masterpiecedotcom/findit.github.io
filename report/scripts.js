document.addEventListener('DOMContentLoaded', () => {
    const reportForm = document.getElementById('reportForm');

    if (reportForm) {
        reportForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const itemName = document.getElementById('itemName').value;
            const dateLost = document.getElementById('dateLost').value;
            const itemImage = document.getElementById('itemImage').files[0];
            const lastLocation = document.getElementById('lastLocation').value;

            const lostItemsGrid = document.getElementById('lostItemsGrid');

            // Function to create and append the new grid item
            function addNewItem(imageUrl = '') {
                const newItem = document.createElement('div');
                newItem.classList.add('grid-item');

                newItem.innerHTML = `
                    ${imageUrl ? `<img src="${imageUrl}" alt="${itemName}">` : ''}
                    <p>Item Name: ${itemName}</p>
                    <p>Date Lost: ${dateLost}</p>
                    <p>Last Location: ${lastLocation}</p>
                `;

                lostItemsGrid.appendChild(newItem);
                reportForm.reset();
                alert('Lost item reported successfully!');
            }

            if (itemImage) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const imageUrl = event.target.result;
                    addNewItem(imageUrl);
                };
                reader.readAsDataURL(itemImage);
            } else {
                const confirmation = confirm("You haven't uploaded an image. Do you want to proceed without an image?");
                if (confirmation) {
                    addNewItem();
                }
            }
        });
    }
});
