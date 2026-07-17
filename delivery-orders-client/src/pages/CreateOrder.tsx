import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { ordersApi } from "../api/orders"
import type { CreateOrderDto } from "../types/order"
import '../css/form.css'

export function CreateOrder() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isSubmitting }
    } = useForm<CreateOrderDto>()

    const onSubmit = async (data: CreateOrderDto) => {
        try {
            const created = await ordersApi.create(data)
            navigate(`/orders/${created.id}`)
        }
        catch {
            alert('Не удалось создать заказ. Проверьте введенные данные.')

        }
    }

    const values = watch()

    return (
        <div>
            <h1>Новый заказ</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label htmlFor="senderCity">
                        Город отправителя
                    </label>

                    <div className="input-wrapper has-clear">
                        <input
                            id="senderCity"
                            {...register("senderCity", {
                                required: "Обязательное поле"
                            })}
                        />

                        {values.senderCity && (
                            <button
                                type="button"
                                className="clear-btn"
                                onClick={() => setValue("senderCity", "")}
                                aria-label="Очистить поле"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                >
                                    <path d="M18 6L6 18" />
                                    <path d="M6 6L18 18" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {errors.senderCity && (
                        <span className="input-error">
                            {errors.senderCity.message}
                        </span>
                    )}
                </div>

                <div>
                    <label htmlFor="senderAddress">
                        Адрес отправителя
                    </label>

                    <div className="input-wrapper has-clear">
                        <input
                            id="senderAddress"
                            {...register("senderAddress", {
                                required: "Обязательное поле"
                            })}
                        />

                        {values.senderAddress && (
                            <button
                                type="button"
                                className="clear-btn"
                                onClick={() => setValue("senderAddress", "")}
                                aria-label="Очистить поле"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                >
                                    <path d="M18 6L6 18" />
                                    <path d="M6 6L18 18" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {errors.senderAddress && (
                        <span className="input-error">
                            {errors.senderAddress.message}
                        </span>
                    )}
                </div>

                <div>
                    <label htmlFor="receiverCity">
                        Город получателя
                    </label>

                    <div className="input-wrapper has-clear">
                        <input
                            id="receiverCity"
                            {...register("receiverCity", {
                                required: "Обязательное поле"
                            })}
                        />

                        {values.receiverCity && (
                            <button
                                type="button"
                                className="clear-btn"
                                onClick={() => setValue("receiverCity", "")}
                                aria-label="Очистить поле"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                >
                                    <path d="M18 6L6 18" />
                                    <path d="M6 6L18 18" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {errors.receiverCity && (
                        <span className="input-error">
                            {errors.receiverCity.message}
                        </span>
                    )}
                </div>

                <div>
                    <label htmlFor="receiverAddress">
                        Адрес получателя
                    </label>

                    <div className="input-wrapper has-clear">
                        <input
                            id="receiverAddress"
                            {...register("receiverAddress", {
                                required: "Обязательное поле"
                            })}
                        />

                        {values.receiverAddress && (
                            <button
                                type="button"
                                className="clear-btn"
                                onClick={() => setValue("receiverAddress", "")}
                                aria-label="Очистить поле"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                >
                                    <path d="M18 6L6 18" />
                                    <path d="M6 6L18 18" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {errors.receiverAddress && (
                        <span className="input-error">
                            {errors.receiverAddress.message}
                        </span>
                    )}
                </div>

                <div>
                    <label htmlFor="weight">
                        Вес груза (кг)
                    </label>

                    <div className="input-wrapper">
                        <input
                            id="weight"
                            type="number"
                            step="0.01"
                            {...register("weight", {
                                required: "Обязательное поле",
                                valueAsNumber: true,
                                min: {
                                    value: 0.01,
                                    message: "Вес должен быть больше 0",
                                },
                            })}
                        />
                    </div>

                    {errors.weight && (
                        <span className="input-error">
                            {errors.weight.message}
                        </span>
                    )}
                </div>

                <div>
                    <label htmlFor="pickupDate">
                        Дата забора груза
                    </label>

                    <div className="input-wrapper">
                        <input
                            id="pickupDate"
                            type="date"
                            {...register("pickupDate", {
                                required: "Обязательное поле",
                            })}
                        />
                    </div>

                    {errors.pickupDate && (
                        <span className="input-error">
                            {errors.pickupDate.message}
                        </span>
                    )}
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Создание..." : "Создать заказ"}
                </button>

            </form>
        </div>
    )
}