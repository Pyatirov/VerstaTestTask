import { useState, useEffect } from "react"
import type { Order } from "../types/order"
import { useNavigate } from "react-router-dom"
import { ordersApi } from "../api/orders"
import '../css/table.css'

export function OrderList() {
    const [orders, setOrders] = useState<Order[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    useEffect(() =>{
        ordersApi
            .getAll()
            .then(setOrders)
            .catch(() => setError("Не удалось загрузить список заказов"))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <h1>Список заказов</h1>
            <button onClick={() => navigate('/orders/new')} style={{marginBottom: 16, width: '25%'}}>Создать заказ</button>

            <table border={1} cellPadding={8} style={{margin: 'auto', borderCollapse: 'collapse'}}>
                <thead>
                    <tr>
                        <th>№ заказа</th>
                        <th>Откуда</th>
                        <th>Куда</th>
                        <th>Вес, кг</th>
                        <th>Дата забора</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) =>
                        <tr 
                            key={order.id}
                            onClick={() => navigate(`/orders/${order.id}`)}
                            style={{cursor: 'pointer'}}
                        >
                            <td> ORD-{order.id.toString()}</td>
                            <td>{order.senderCity}, {order.senderAddress}</td>
                            <td>{order.receiverCity}, {order.receiverAddress}</td>
                            <td>{order.weight}</td>
                            <td> {new Date(order.pickupDate).toLocaleDateString()}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}