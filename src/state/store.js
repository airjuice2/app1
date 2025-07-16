import { create } from 'zustand';

const useStore = create((set) => ({
    orderId: 0,
    ordersData: [],
    setOrderId: (orderId) => set(() => ({ orderId })),
    setOrdersData: (order) => set((state) => {
        return ({ ordersData: [...state.ordersData, order] })
    }),
    dropOrdersData: (orderId) => set((state) => {
        return ({
            ordersData: [...state.ordersData.flat().filter(e => e.orderid != orderId)]
        })
    })
}))

export default useStore;