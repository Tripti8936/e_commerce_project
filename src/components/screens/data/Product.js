export const products = {
  printers: [
    { id: 1, title: 'Epson Thermal Printer', image: '/images/printer1.jpg' },
    { id: 2, title: 'Canon Label Printer', image: '/images/printer2.jpg' },
    { id: 3, title: 'HP Receipt Printer', image: '/images/printer3.jpg' },
    { id: 4, title: 'Brother POS Printer', image: '/images/printer4.jpg' },
  ],
  cpu: [
    { id: 5, title: 'Intel i5 CPU', image: '/images/cpu1.jpg' },
    { id: 6, title: 'Ryzen 7 CPU', image: '/images/cpu2.jpg' },
    { id: 7, title: 'Intel i7 CPU', image: '/images/cpu3.jpg' },
    { id: 8, title: 'Mini PC', image: '/images/cpu4.jpg' },
  ],
  scanners: [
    { id: 9, title: 'Handheld Barcode Scanner', image: '/images/scanner1.jpg' },
    { id: 10, title: 'QR Code Scanner', image: '/images/scanner2.jpg' },
    { id: 11, title: 'Laser Scanner', image: '/images/scanner3.jpg' },
    { id: 12, title: 'Omnidirectional Scanner', image: '/images/scanner4.jpg' },
  ],
  webCameras: [
    { id: 13, title: 'Logitech HD Camera', image: '/images/cam1.jpg' },
    { id: 14, title: 'Lenovo USB Camera', image: '/images/cam2.jpg' },
    { id: 15, title: 'HP Conference Camera', image: '/images/cam3.jpg' },
    { id: 16, title: 'MI 1080p Camera', image: '/images/cam4.jpg' },
  ]
};

export const getProductById = (id) => {
  return Object.values(products).flat().find(p => p.id === parseInt(id));
};
