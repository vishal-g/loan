const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach(item => {
    const top = item.querySelector('.faq__item-top');
    top.addEventListener('click', function() {
        item.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const selectElements = document.querySelectorAll('.apply__form-select');
    function updateClass(event) {
        const selectElement = event.target;
        if (selectElement.value) {
            selectElement.classList.add('active');
        } else {
            selectElement.classList.remove('active');
        }
    }
    selectElements.forEach(select => {
        select.addEventListener('change', updateClass);
                updateClass({ target: select });
    });
});


function createDocumentBlocks() {
    const tables = document.querySelectorAll('.bank__table');
    const salariedDocs = document.getElementById('docs-salaried');
    const employedDocs = document.getElementById('docs-employed');

    let salariedContent = '';
    let employedContent = '';

    if (window.innerWidth < 769) {
        tables.forEach(table => {
            const rows = table.querySelectorAll('tbody tr');
            rows.forEach((row, rowIndex) => {
                const cells = row.querySelectorAll('td');
                if (rowIndex > 0) {
                    const particular = cells[0].innerText.trim();
                    const salariedValue = cells[1].innerText.trim();
                    const employedValue = cells[2].innerText.trim();

                    salariedContent += `<p class="docs__item"><span class="docs__name">${particular}:</span> ${salariedValue}</p>`;
                    employedContent += `<p class="docs__item"><span class="docs__name">${particular}:</span> ${employedValue}</p>`;
                }
            });
        });

        salariedDocs.querySelector('.docs__content').innerHTML = salariedContent;
        salariedDocs.style.display = 'block';

        employedDocs.querySelector('.docs__content').innerHTML = employedContent;
        employedDocs.style.display = 'block';
    } else {
        salariedDocs.style.display = 'none';
        employedDocs.style.display = 'none';
    }
}
window.addEventListener('resize', createDocumentBlocks);
createDocumentBlocks();


