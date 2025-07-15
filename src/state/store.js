import { create } from 'zustand';

const useStore = create((set) => ({
    orderId: 0,
    ordersData: [],
    setOrderId: (orderId) => set(() => ({ orderId })),
    setOrdersData: (order) => set((state) => {
        return ({ ordersData: [...state.ordersData, order] })
    })
}))

export default useStore;