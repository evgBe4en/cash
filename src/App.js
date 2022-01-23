import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { Button } from 'react-bootstrap'
import { GlobalProvaider } from './context/GlobalState'
import reactDom from 'react-dom';


function App() {

  const downloadTxtFile = () => {
    const element = document.createElement("a")
    const file = new Blob([` Ваш баланс:${document.getElementById("total").textContent}\n` + ` ${document.getElementById("inc-exp-container").textContent}\n` + `История: \n ${document.getElementById("list").textContent.split('x').join('\n')} \n`], {
      type: "text/plain;charset=utf-8",
    })
    element.href = URL.createObjectURL(file)
    element.download = "Expence Trucker - stat.txt"
    document.body.appendChild(element)
    element.click()
  }

  return (
    <GlobalProvaider>
      <Header />
        <Button variant="outline-dark" onClick={downloadTxtFile}>Загрузить информацию</Button>
      <div className='container'> 
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvaider>
  );
}

export default App;
