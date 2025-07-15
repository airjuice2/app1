import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import useStore from '../state/store'
import hostname from '../hostname'

export default function OrderFindForm() {

    const queryClient = useQueryClient()

    const [localOrderId, setLocalOrderId] = useState(74671)
    const { orderId, setOrderId, setOrdersData } = useStore()
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['orders', orderId],
        queryFn: () => {

            const formData = new FormData()
            formData.append('orderId', orderId)

            return fetch(`${hostname}postOrderInfo.php`, {
                method: 'POST',
                body: formData,
            }).then(res => res.json())
        },
        initialData: {
            data: []
        }
    })

    useEffect(() => {
        if (data.length > 0) {
            setOrdersData(data)
        }
    }, [data, setOrdersData])

    if (isLoading) return 'Загрузка...';
    if (error) return 'Произошла ошибка: ' + error.message

    return (
        <>
            <form onSubmit={e => {
                e.preventDefault()
                setOrderId(localOrderId)
                refetch()
                queryClient.removeQueries(['orders', localOrderId])

            }}>
                <input type='number'
                    value={localOrderId}
                    onChange={e => setLocalOrderId(e.target.value)}
                />
                <button type='submit'>Найти заказ</button>
            </form>
        </>
    )
}
