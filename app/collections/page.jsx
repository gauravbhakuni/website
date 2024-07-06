// app/collections/page.jsx
import { Suspense } from 'react';
import CollectionClient from '@/components/CollectionClient';

const CollectionPage = () => {
    return (
        <Suspense fallback={<div className='h-screen flex justify-center items-center text-black bg-white text-6xl'>Loading...</div>}>
            <CollectionClient />
        </Suspense>
    );
};

export default CollectionPage;
