import axios from 'axios'
import type { Order, CreateOrderDto } from '../types/order'

const API_BASE_URL = 'https://localhost:7198/api'

const apiClient = axios.create({
    baseURL: API_BASE_URL
})

export const ordersApi = {
    getAll: async (): Promise<Order[]> => {
        const res = await apiClient.get<Order[]>('/orders')
        return res.data
    },

    getById: async (id: number): Promise<Order> => {
        const res = await apiClient.get<Order>(`/orders/${id}`)
        return res.data
    },

    create: async (dto: CreateOrderDto): Promise<Order> => {
        const res = await apiClient.post<Order>('/orders', dto)
        return res.data
    }
}