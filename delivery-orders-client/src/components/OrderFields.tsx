import type { Order } from '../types/order';

interface OrderFieldsProps {
  order: Order;
}

export function OrderFields({ order }: OrderFieldsProps) {
  return (
    <>
      <div className="order-field">
        <span>Город отправителя</span>
        <strong>{order.senderCity}</strong>
      </div>

      <div className="order-field">
        <span>Адрес отправителя</span>
        <strong>{order.senderAddress}</strong>
      </div>

      <div className="order-field">
        <span>Город получателя</span>
        <strong>{order.receiverCity}</strong>
      </div>

      <div className="order-field">
        <span>Адрес получателя</span>
        <strong>{order.receiverAddress}</strong>
      </div>

      <div className="order-field">
        <span>Вес груза</span>
        <strong>{order.weight} кг</strong>
      </div>

      <div className="order-field">
        <span>Дата создания заказа</span>
        <strong>{new Date(order.createdAt).toLocaleString()}</strong>
      </div>
    </>
  );
}