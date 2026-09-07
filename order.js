class Order {
	constructor(items = []) {
		this.items = items // [{ name, price, quantity }]
		this.createdAt = new Date()
	}

	addItem(item) {
		this.items.push(item)
	}

	getTotal() {
		return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
	}
}

// Пример использования:
const order = new Order()
order.addItem({ name: 'Товар 1', price: 100, quantity: 2 })
order.addItem({ name: 'Товар 2', price: 250, quantity: 1 })

console.log(order.getTotal()) // 450
