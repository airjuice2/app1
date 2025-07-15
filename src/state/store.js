import { create } from 'zustand';

const useStore = create((set) => ({
    orderId: 0,
    orders: [],
    setOrderId: (orderId) => set((state) => ({ orderId })),
    setOrders: (order) => set((state) => {
        console.log(order)
        
        return ({...state.orders, orders: [order]})
    })
}));

export default useStore;