// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import type { Order } from "../types/order";
// import { ordersApi } from "../api/orders";
// import '../css/orderDetails.css'

// export function OrderDetails() {
//     const { id } = useParams<{ id: string }>()
//     const navigate = useNavigate()
//     const [order, setOrder] = useState<Order | null>(null)
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState<string | null>(null)

//     useEffect(() => {
//         if (!id) return;
//         ordersApi
//             .getById(Number(id))
//             .then(setOrder)
//             .catch(() => setError('Заказ не найден'))
//             .finally(() => setLoading(false))
//     }, [id])

//     if (loading) return <p>Загрузка...</p>
//     if (error || !order) return <p>{error ?? 'Заказ не найден'}</p>

//     return (
//         <div className="order-details">

//             <button onClick={() => navigate('/')}>
//                 Назад к списку
//             </button>

//             <h1>
//                 Заказ ORD-{order.id.toString()}
//             </h1>

//             <div className="order-field">
//                 <span>Город отправителя</span>
//                 <strong>{order.senderCity}</strong>
//             </div>

//             <div className="order-field">
//                 <span>Адрес отправителя</span>
//                 <strong>{order.senderAddress}</strong>
//             </div>

//             <div className="order-field">
//                 <span>Город получателя</span>
//                 <strong>{order.receiverCity}</strong>
//             </div>

//             <div className="order-field">
//                 <span>Адрес получателя</span>
//                 <strong>{order.receiverAddress}</strong>
//             </div>

//             <div className="order-field">
//                 <span>Вес груза</span>
//                 <strong>{order.weight} кг</strong>
//             </div>

//             <div className="order-field">
//                 <span>Дата создания заказа</span>
//                 <strong>
//                     {new Date(order.createdAt).toLocaleString()}
//                 </strong>
//             </div>

//         </div>
//     )
// }

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Order } from '../types/order';
import { ordersApi } from '../api/orders';
import { OrderFields } from '../components/OrderFields';
import { BackButton } from '../components/BackButton';
import '../css/orderDetails.css';

export function OrderDetails() {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    ordersApi
      .getById(Number(id))
      .then(setOrder)
      .catch(() => setError('Заказ не найден'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Загрузка...</p>;
  if (error || !order) return <p>{error ?? 'Заказ не найден'}</p>;

  return (
    <div className="order-details">
      <BackButton />

      <h1>Заказ ORD-{order.id.toString()}</h1>

      <OrderFields order={order} />
    </div>
  );
}