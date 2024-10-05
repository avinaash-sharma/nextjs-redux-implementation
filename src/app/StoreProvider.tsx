'use client';

import { add } from '@/lib/store/features/cart/cartSlice';
import { AppStore, makeStore } from '@/lib/store/store';
import React, { useRef } from 'react'
import { Provider } from 'react-redux';

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()

        //add intial state data
        // storeRef.current.dispatch(add('testCheck'))
    }
    return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider;