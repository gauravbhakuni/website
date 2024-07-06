// app/collections/page.jsx
import ProductDetailsClient from '@/components/PoductDetailsClient';
import { Suspense } from 'react';

const ProductDetailsPage = () => {
    return (
        <Suspense fallback={<div className='h-screen flex justify-center items-center text-black bg-white text-6xl'>Loading...</div>}>
            <ProductDetailsClient />
        </Suspense>
    );
};

export default ProductDetailsPage;
