import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {id: 1, title: "Стул серый", img: "1.jpg", description: "Этот серый стул станет идеальным дополнением к вашему интерьеру.", category: "chairs", price: "49.99"},
        {id: 2, title: "Стол обеденный", img: "2.jpg", description: "Прекрасный обеденный стол для уютных ужинов", category: "tables", price: "199.99"},
        {id: 3, title: "Лампа настольная", img: "3.jpg", description: "Стильная настольная лампа для вашего рабочего стола", category: "lighting", price: "29.99"},
        {id: 4, title: "Диван угловой", img: "4.jpg", description: "Удобный угловой диван для гостиной комнаты", category: "sofas", price: "599.99"},
        {id: 5, title: "Шкаф для одежды", img: "5.jpg", description: "Просторный шкаф для хранения вашей одежды", category: "wardrobes", price: "349.99"},
        {id: 6, title: "Ковер с рисунком", img: "6.jpg", description: "Изысканный ковер с элегантным рисунком для вашего интерьера", category: "rugs", price: "79.99"},
        {id: 7, title: "Пуфик", img: "7.webp", description: "Мягкий пуфик для дополнительных мест в гостиной", category: "ottomans", price: "39.99"},
        {id: 8, title: "Книжная полка", img: "8.jpg", description: "Удобная книжная полка для хранения вашей коллекции книг", category: "bookcases", price: "89.99"},
        {id: 9, title: "Стул-качалка", img: "9.jpg", description: "Уютный стул-качалка для релакса и отдыха", category: "chairs", price: "79.99"}
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer/>
      </div>
    );
  }
  
  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({ orders: [...this.state.orders, item] }, () => {
    })
  }
}

export default App;
