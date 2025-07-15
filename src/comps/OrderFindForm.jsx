import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import useStore from '../state/store'
import hostname from '../hostname'

export default function OrderFindForm() {

    const [localOrderId, setLocalOrderId] = useState(19)
    const { orderId, orders, setOrderId, setOrders } = useStore()
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['orders', orderId],
        queryFn: () => {
            const formData = new FormData()
            formData.append('orderId', orderId)

            return fetch(`${hostname}postOrderInfo.php`, {
                method: 'POST',
                body: formData,
            }).then(res => res.json())
        }
    })

    useEffect(() => {
        if (data) {
            setOrders(data)
        }
    }, [data, setOrders])

    if (orders) console.log(orders)

    if (isLoading) return 'Загрузка...';
    if (error) return 'Произошла ошибка: ' + error.message
    return (
        <>
            <form onSubmit={e => {
                e.preventDefault()
                setOrderId(localOrderId)
                refetch()
            }}>
                <input type="number"
                    value={localOrderId}
                    onChange={e => setLocalOrderId(e.target.value)}
                />
                <button type="submit">Найти заказ</button>
            </form>
        </>
    )
}
