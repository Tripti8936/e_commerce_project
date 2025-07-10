import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../components/screens/about/About';
import Customer from '../components/screens/customer/index';
import Offerings from '../components/screens/offerings/index'
import Contacts from '../components/screens/contact/Contacts';
import Sales from '../components/screens/sales';
import ProductDetailPage from '../components/screens/sales/product_detail/ProductDetail';
import PrintersPage from '../components/screens/sales/PrintersPage';
import Services from '../components/screens/services';

export default function PublicRouter() {

    return [
        // Route definitions for unauthenticated users
        {
            path: '/',
            element: <Navbar />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: 'contact',
                    element: <Contacts />
                },
                {
                    path: 'about',
                    element: <About />
                },
                {
                    path: 'offerings',
                    // element: <Offerings />
                    element: <Sales />
                },
                {
                    path: 'customers',
                    element: <Customer />
                },
                {
                    path: 'sales',
                    element: <Sales />
                },
                {
                     path: "/printers",
                    element: <PrintersPage />
                },
                {path: "/cpu",
                    element: <PrintersPage />
                    
                },
                {path: "/webCameras",
                    element: <PrintersPage />
                    
                },
                {path: "/scanners",
                    element: <PrintersPage />
                    
                },
                {path: "/lv",
                    element: <PrintersPage />
                    
                },
                {
                    path: "/product/:category/:id",
                    element: <ProductDetailPage />
                },
                {
                    path: 'services',
                    element: <Services />
                },

              
            ],
        },
    ];
}
