const references = [
    "https://doi.org/10.3390/jcm10225358",
    "https://doi.org/10.1016/j.archger.2021.104427",
    "https://doi.org/10.1111/ejn.14989",
    "https://doi.org/10.1038/s41598-021-86579-3",
    "https://doi.org/10.3390/ijerph20085464",
    "https://doi.org/10.1016/j.gerinurse.2022.03.003",
    "https://doi.org/10.1016/j.ibror.2020.06.006",
    "https://doi.org/10.1007/s00429-024-02873-6",
    "https://doi.org/10.1016/j.neuropsychologia.2020.107714",
    "https://doi.org/10.1177/02692155231216621",
    "https://doi.org/10.3390/brainsci12080968",
    "https://doi.org/10.3233/JAD-210690",
    "https://doi.org/10.1016/j.exger.2022.111743",
    "https://doi.org/10.1007/s40520-013-0046-5",
    "https://doi.org/10.3390/ijerph17218129",
    "https://doi.org/10.1186/s12877-023-04427-7",
    "https://pubmed.ncbi.nlm.nih.gov/34253162/",
    "https://pubmed.ncbi.nlm.nih.gov/20445152/"
];

function displayReferences() {
    const referencesList = document.getElementById('referencesList');
    referencesList.innerHTML = '';
    
    references.forEach((ref, index) => {
        const card = document.createElement('div');
        card.className = 'reference-card';
        
        const number = document.createElement('div');
        number.className = 'reference-number';
        number.textContent = `Reference ${(index + 1).toString().padStart(2, '0')}`;
        
        const link = document.createElement('a');
        link.href = ref;
        link.className = 'reference-link';
        link.textContent = ref;
        link.target = '_blank';
        
        card.appendChild(number);
        card.appendChild(link);
        
        // Add animation delay
        card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
        card.style.opacity = '0';
        
        referencesList.appendChild(card);
    });
}

function updateDate() {
    const currentDate = document.getElementById('currentDate');
    const date = new Date();
    currentDate.textContent = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayReferences();
    updateDate();
}); 