import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/product/productSlice';

//store variable is a global variable

//dont do this in nextjs since the data might get shared with other users, as client component is renderd once on the server.
export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: cartReducer,
            product: productReducer
        },
    }
    )
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];