import useStore from '../state/store'

export default function OrderFillForm() {

    const { orderId } = useStore()

    return (
        <>
            <div>{orderId}</div>
        </>
    )
}
