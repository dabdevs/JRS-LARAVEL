import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen w-full sm:justify-center items-center sm:pt-0 bg-gray-100">
            <Navbar />

            <main className="w-full">
            
                {children}

            </main>

            <Footer />
        </div>
    );
}
