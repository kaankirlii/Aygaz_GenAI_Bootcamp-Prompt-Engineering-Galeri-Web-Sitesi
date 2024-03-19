// Galeri resimlerinin dinamik olarak oluşturulması
const gallerySection = document.getElementById('gallery');

// Örnek resimler (gerçek projede veritabanından veya başka bir kaynaktan alınacak)
const images = [
    '1fil.jpg',
    '2astronot.jpg',
    '3havaciejderha.jpg',
    '4dali.jpg',
    '5kilic.jpg',
    '6esek.jpg'
    // Diğer resimler...
];

// Galeri resimlerinin HTML içine eklenmesi
images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = 'images/' + image; // Resimlerin bulunduğu klasöre göre yol belirtilmeli
    imgElement.alt = 'Sürrealizm Resmi';
    gallerySection.appendChild(imgElement);
});
